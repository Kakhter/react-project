import React from "react";

const Kafka = () => {
    return (
        <>
            <h1>Kafka Implementation</h1>
            <div className="code_css">
                <pre>
                    <code>
                        {`  
            Project Directory: C:\\MyProject\\Kafka
            \\KafkaConsumer
            \\KafkaProducerAPI

            yaml file: docker-compose.yml in Implementation section.

            Run:    docker compose up -d
                    docker ps 
                    docker compose down


            Producer Command:
            C:\Users\User>
            docker exec -it kafka /opt/kafka/bin/kafka-console-producer.sh --topic order-created --bootstrap-server kafka:9092

            Consumer Commnad:

            C:\MyProject\Kafka>
            docker exec -it kafka /opt/kafka/bin/kafka-console-consumer.sh --topic order-created --bootstrap-server kafka:9092 --partition 0 --offset earliest
            
            at end earlist is there you can use latest as well
  

            When implementing Kafka in .NET:

           1. Create Kafka Topic.
           2. Install Confluent.Kafka.
           3. Create Producer.
           4. Publish events to Topic. (Partitioning is optional but recommended for scalability)
           5. Create Consumer Group.
           6. Consume messages from Topic.
           7. Process business logic.
           8. Commit Offset after success.
           9. Make consumers idempotent to handle duplicate messages.
           10. Use partitions for scalability and consumer groups for load balancing.

          ----------------------------IMPLEMENTATION----------------------------------------------
          docker-compose.yml
          ----------------------------------------------------------------------------------------
            version: '3.8'

            services:

            kafka:
                image: apache/kafka:latest
                container_name: kafka
                hostname: kafka
                restart: unless-stopped

                ports:
                - "9092:9092"
                - "29092:29092"

                environment:
                KAFKA_NODE_ID: 1
                KAFKA_PROCESS_ROLES: broker,controller

                KAFKA_LISTENERS: PLAINTEXT://:9092,EXTERNAL://:29092,CONTROLLER://:9093

                KAFKA_ADVERTISED_LISTENERS: PLAINTEXT://kafka:9092,EXTERNAL://localhost:29092

                KAFKA_LISTENER_SECURITY_PROTOCOL_MAP: PLAINTEXT:PLAINTEXT,EXTERNAL:PLAINTEXT,CONTROLLER:PLAINTEXT

                KAFKA_CONTROLLER_LISTENER_NAMES: CONTROLLER
                KAFKA_CONTROLLER_QUORUM_VOTERS: 1@kafka:9093

                KAFKA_INTER_BROKER_LISTENER_NAME: PLAINTEXT

                KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR: 1
                KAFKA_TRANSACTION_STATE_LOG_REPLICATION_FACTOR: 1
                KAFKA_TRANSACTION_STATE_LOG_MIN_ISR: 1

                KAFKA_LOG_DIRS: /tmp/kraft-combined-logs

            kafka-ui:
                image: provectuslabs/kafka-ui:latest
                container_name: kafka-ui
                restart: unless-stopped

                depends_on:
                - kafka

                ports:
                - "8081:8080"

                environment:
                KAFKA_CLUSTERS_0_NAME: local
                KAFKA_CLUSTERS_0_BOOTSTRAPSERVERS: kafka:9092
                DYNAMIC_CONFIG_ENABLED: "true"

          ----------------------------------------------------------------------------------------
          KafkaAPI
          ----------------------------------------------------------------------------------------
          Install Package: Confluent.Kafka

          ----------------------------------------------------------------------------------------
          Program.cs
          ----------------------------------------------------------------------------------------
          using Confluent.Kafka;
          using KafkaAPI;


          builder.Services.AddSingleton<KafkaProducer>();

          ----------------------------------------------------------------------------------------
          Class: OrderCreatedEvent.cs
          ----------------------------------------------------------------------------------------           
          namespace KafkaAPI
            {
                public class OrderCreatedEvent
                {
                    public Guid OrderId { get; set; }
                    public string ProductName { get; set; }
                    public decimal Amount { get; set; }
                }
            }          
                    
          ----------------------------------------------------------------------------------------
          Class: KafkaProducer.cs
          ----------------------------------------------------------------------------------------
           namespace KafkaAPI
            {
                using Confluent.Kafka;
                using System.Text.Json;

                public class KafkaProducer
                {
                    private readonly IProducer<string, string> _producer;

                    public KafkaProducer()
                    {
                        var config = new ProducerConfig
                        {
                            BootstrapServers = "localhost:29092",
                            Debug = "broker,protocol"
                        };

                        _producer = new ProducerBuilder<string, string>(config)
                            .Build();
                    }

                    public async Task ProduceAsync(OrderCreatedEvent order)
                    {
                        var message = JsonSerializer.Serialize(order);

                        await _producer.ProduceAsync(
                            "order-created",
                            new Message<string, string>
                            {
                                Key = order.OrderId.ToString(),
                                Value = message
                            });
                    }
                }
            }

          ----------------------------------------------------------------------------------------
           kafkaAPIController.cs
          ----------------------------------------------------------------------------------------
            using Confluent.Kafka;
            using Microsoft.AspNetCore.Mvc;
            using System.Runtime.CompilerServices;

            namespace KafkaAPI.Controllers
            {
                [ApiController]
                [Route("[controller]")]
                public class KafkaProducerController : ControllerBase
                {
                    private readonly KafkaProducer _producer;

                    public KafkaProducerController(KafkaProducer producer)
                    {
                        _producer = producer;
                    }
                    [HttpPost]
                    public async Task<IActionResult> CreateOrder(OrderCreatedEvent order)
                    {
                        order.OrderId = Guid.NewGuid();
                        await _producer.ProduceAsync(order);
                        return Ok(order);
                    }
                }
            }


          ----------------------------------------------------------------------------------------
                                  Worker Server as KafkaConsumer
          ----------------------------------------------------------------------------------------
          Install Package: Confluent.Kafka and Microsoft.Extensions.Hosting
          ----------------------------------------------------------------------------------------
          Program.cs
          ----------------------------------------------------------------------------------------
            using KafkaConsumer;

            var builder = Host.CreateApplicationBuilder(args);
            builder.Services.AddHostedService<KafkaConsumerHostedService>();

            var app = builder.Build();

            app.Run();

          ----------------------------------------------------------------------------------------
          Worker Class: KafkaConsumerHostedService.cs
          ----------------------------------------------------------------------------------------
            using Confluent.Kafka;
            using Microsoft.Extensions.Hosting;
            using System.Text.Json;

            namespace KafkaConsumer
            {
                public class KafkaConsumerHostedService : BackgroundService
                {
                    private readonly IServiceProvider _serviceProvider;

                    public KafkaConsumerHostedService(IServiceProvider serviceProvider)
                    {
                        _serviceProvider = serviceProvider;
                    }

                    protected override async Task ExecuteAsync(CancellationToken stoppingToken)
                    {
                        var config = new ConsumerConfig
                        {
                            BootstrapServers = "localhost:29092",
                            GroupId = "order-consumer-group2",
                            AutoOffsetReset = AutoOffsetReset.Earliest,
                            EnableAutoCommit = false
                        };

                        using var consumer =
                            new ConsumerBuilder<string, string>(config).Build();

                        consumer.Subscribe("order-created");

                        Console.WriteLine("Kafka Consumer Started...");

                        try
                        {
                            while (!stoppingToken.IsCancellationRequested)
                            {
                                var result = consumer.Consume(stoppingToken);

                                Console.WriteLine($"Received: {result.Message.Value}");

                                var order = JsonSerializer.Deserialize<OrderCreatedEvent>(
                                    result.Message.Value);

                                if (order != null)
                                {
                                    Console.WriteLine($"OrderId: {order.OrderId}");
                                    Console.WriteLine($"Product: {order.ProductName}");
                                    Console.WriteLine($"Price: {order.Amount}");

                                    // Simulate database save
                                    //await SaveOrder(order);

                                    // Commit only after successful processing
                                    consumer.Commit(result);
                                    Console.WriteLine($"Offset {result.Offset} committed successfully");
                                }

                                await Task.CompletedTask;
                            }
                        }
                        catch (OperationCanceledException)
                        {
                            Console.WriteLine("Consumer stopped.");
                        }
                        finally
                        {
                            consumer.Close();
                        }
                    }
                }

                public class OrderCreatedEvent
                {
                    public Guid OrderId { get; set; }

                    public string ProductName { get; set; } = string.Empty;

                    public decimal Amount { get; set; }
                }
            }
          ----------------------------------------------------------------------------------------                              
                    `}
                    </code>
                </pre>
                HI
            </div>
        </>
    );
};

export default Kafka;

