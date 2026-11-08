import React from "react";

const Kafka = () => {
    return (
        <>
            <h1>Kafka Implementation</h1>
            <div className="code_css">
                <pre>
                    <code>
                        {`  
            Project Directory: C:\MyProject\Kafka

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
                    
                    
                    
                    
                    
                    `}
                    </code>
                </pre>
                HI
            </div>
        </>
    );
};

export default Kafka;

