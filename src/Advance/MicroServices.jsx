import React from 'react';
const MicroServices = () => {

    return (
        <>
            <div className="code_css">
                <h1> MicroServices</h1>
                <pre>
                    <code> {`
        Defination:

        Microservices is an architectural style that structures an application as a collection of small, 
        autonomous services modeled around a business domain. 
        Each service is self-contained and implements a single business capability. Microservices communicate 
        with each other through well-defined APIs, often over HTTP or messaging protocols.

                Request Flow

                    Client
                    ↓
                    API Gateway
                    ↓
                    Order Service
                    ↓
                    Database
                    ↓
                    Response
                    ↓
                    API Gateway
                    ↓
                    Client


                Technology Stack (.NET)

                    Frontend  : React / Angular
                    Gateway   : Ocelot / YARP
                    Services  : ASP.NET Core Web API
                    Database  : SQL Server
                    Messaging : Kafka / RabbitMQ / Azure Service Bus
                    Caching   : Redis
                    Auth      : JWT / Identity Server           


        Key Characteristics of Microservices: See at bottom.
-------------------------------------------------------------------------------------------------------
                                            Microservice Circuit Breaker **
-------------------------------------------------------------------------------------------------------
                using Polly;
                using Polly.Timeout;

                using System.Net.Http;
                using static System.Net.WebRequestMethods;


                class Program
                {
                    static async Task Main()
                    {
                    

                    /* Policy Wrapping Order
                    
                    Fallback
                        ↓
                    Circuit Breaker
                        ↓
                    Retry
                        ↓
                    Timeout
                        ↓
                    HTTP Call
                    */
                    var fallback = Policy<string>
                            .Handle<Exception>()
                            .FallbackAsync("Fallback");

                        var retry = Policy<string>
                            .Handle<Exception>()
                            .WaitAndRetryAsync(
                                2,
                                _ => TimeSpan.FromSeconds(1));

                        var timeout = Policy.TimeoutAsync<string>(
                            3,
                            TimeoutStrategy.Pessimistic);

                        var breaker = Policy<string>
                            .Handle<Exception>()
                            .CircuitBreakerAsync(
                                2,
                                TimeSpan.FromSeconds(5));

                        var pipeline = Policy.WrapAsync(
                            fallback,
                            breaker,
                            retry,
                            timeout
                            );

                        string data = await pipeline.ExecuteAsync(async () =>
                        {
                            Console.WriteLine("Calling slow API...");
                            //"
                            var handler = new HttpClientHandler
                            {
                                UseDefaultCredentials = true
                            };
                            using var client = new HttpClient(handler);
                            string url = "https://localhost:64300/api/ADUser";
                            HttpResponseMessage response = await client.GetAsync(url);
                            response.EnsureSuccessStatusCode();

                            return await response.Content.ReadAsStringAsync();
                            //if (response.IsSuccessStatusCode)
                            //{
                            //    string result = await response.Content.ReadAsStringAsync();
                            //    //Console.WriteLine(result);
                            //    return result;
                            //}
                            //else
                            //{
                            //    Console.WriteLine($"Error: {response.StatusCode}");
                            //}

                            // await Task.Delay(3000);

                            throw new Exception("API failed");
                        });

                        Console.WriteLine(data);
                    }
                }

        Key Characteristics of Microservices

        1. Independent Deployment: Each microservice can be developed, deployed, and scaled independently.  
        2. Decentralized Data Management: Each microservice manages its own database or data storage, promoting loose coupling and autonomy.
        3. Technology Diversity: Different microservices can be built using different programming languages, frameworks, or technologies based on the requirements of the service.
        4. Resilience and Fault Isolation: If one microservice fails, it does not necessarily bring down the entire system. Other services can continue to operate.
        5. Scalability: Microservices can be scaled independently based on demand, allowing for efficient resource utilization.
        6. Continuous Delivery and DevOps: Microservices align well with continuous integration and continuous delivery practices, enabling faster development cycles.  
        
        Advantages of Microservices:
        1. Flexibility in Technology Stack: Teams can choose the best technology for each service.
        2. Improved Fault Isolation: Failures in one service do not affect the entire application.
        3. Easier Maintenance and Updates: Smaller codebases are easier to understand and maintain.
        4. Scalability: Services can be scaled independently based on demand.
        5. Faster Time to Market: Independent teams can work on different services simultaneously, speeding up development.     
        
        Challenges of Microservices:
        1. Complexity: Managing multiple services can introduce complexity in terms of deployment, monitoring, and communication.
        2. Data Consistency: Ensuring data consistency across services can be challenging, especially in distributed systems.
        3. Network Latency: Communication between services over the network can introduce latency.
        4. Testing: Testing microservices can be more complex due to their distributed nature.
        5. Deployment and Orchestration: Coordinating deployments and managing service dependencies can be challenging. 
        `}
                    </code></pre>
            </div>
        </>
    );
}

export default MicroServices;