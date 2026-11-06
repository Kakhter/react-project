import React from 'react';

const Architecture = () => {

    return (
        <>
            <div className="code_css">
                <h1> Architecture</h1>
                <pre>
                    <code> {`
        Architecture is the process of designing and structuring software systems to meet specific requirements, 
        ensuring scalability, maintainability, and performance. It involves defining components, their interactions, 
        and the overall system structure.

        Interview Definition

        Software Architecture is the high-level structure of a software system that defines its components, their 
        responsibilities, interactions, technologies, and design principles to meet business and technical 
        requirements.


        Key Concepts:

        Most Important Architecture Patterns to Learn as a .NET Developer

                Monolithic Architecture
                Layered Architecture
                MVC
                Clean Architecture
                Microservices
                Event-Driven Architecture (Kafka)
                CQRS
                Hexagonal Architecture

                There are many types of Software Architectures, each designed for different business 
                and technical requirements.

                1. Monolithic Architecture
                All functionality exists in a single application.
                Plain Text
                +----------------------------------+
                | Web Application |
                |----------------------------------|
                | Login |
                | Orders |
                | Inventory |
                | Payments |
                +----------------------------------+
                |
                v
                Database
                Advantages
                Easy to develop initially
                Simple deployment
                Disadvantages
                Hard to scale
                Large codebase
                One failure can affect the entire application


                2. Layered (N-Tier) Architecture
                Most common in .NET applications.
                Plain Text
                +-------------------+
                | Presentation Layer|
                +-------------------+
                |
                v
                +-------------------+
                | Business Layer |
                +-------------------+
                |
                v
                +-------------------+
                | Data Access Layer |
                +-------------------+
                |
                v
                +-------------------+
                | Database |
                +-------------------+
                Example
                Plain Text
                React UI
                |
                ASP.NET Controller
                |
                Service
                |
                Repository
                |
                SQL Server

                3. Microservices Architecture
                Application is split into independent services.

                Plain Text
                +------------+
                | API Gateway|
                +------------+
                |
                +----------------+----------------+
                | | |
                v v v
                +---------+ +---------+ +---------+
                | Order | | Payment | | Profile |
                | Service | | Service | | Service |
                +---------+ +---------+ +---------+
                | | |
                +--------------+--------------+
                |
                Database
                Advantages
                Independent deployment
                Scalable
                Team autonomy
                Disadvantages
                More complex
                Service communication challenges

                4. Event-Driven Architecture
                Services communicate using events.

                Plain Text
                Order Service
                |
                v
                Kafka
                |
                +----+-----+------+
                | | |
                v v v
                Email Inventory Audit
                Example
                Plain Text
                Order Created
                |
                v
                Kafka Topic
                |
                +--> Inventory Consumer
                +--> Notification Consumer
                +--> Audit Consumer
                This is common in banking, e-commerce, MES, and IoT systems.


                5. Service-Oriented Architecture (SOA)


                Services communicate through an Enterprise Service Bus (ESB).
                Plain Text
                +-------------+
                | ESB |
                +-------------+
                | | |
                v v v
                CRM ERP Finance
                Popular ESBs:
                MuleSoft
                IBM Integration Bus
                BizTalk Server
                6. Client-Server Architecture
                Traditional architecture.
                Plain Text
                Client
                |
                v
                Server
                |
                v
                Database
                Examples:
                Web applications
                Desktop applications
                Mobile apps


                7. Serverless Architecture

                No server management.
                Plain Text
                React App
                |
                v
                Azure Function
                |
                v
                Azure SQL
                Examples:
                Azure Functions
                AWS Lambda
                Google Cloud Functions

                8. Hexagonal (Ports & Adapters) Architecture
                Separates business logic from external systems.

                Plain Text
                API
                |
                v
                +----------------+
                | Business Logic |
                +----------------+
                | |
                v v
                Database Kafka
                Benefits:
                Easy testing
                Low coupling
                Replace databases or messaging systems easily

                9. Clean Architecture
                Popular in ASP.NET Core.

                Plain Text
                +---------------------+
                | Presentation Layer |
                +---------------------+
                |
                +---------------------+
                | Application Layer |
                +---------------------+
                |
                +---------------------+
                | Domain Layer |
                +---------------------+
                |
                +---------------------+
                | Infrastructure |
                +---------------------+
                Example
                Plain Text
                Controllers
                |
                Use Cases
                |
                Entities
                |
                Repositories
                |
                SQL Server

                10. CQRS Architecture
                Command Query Responsibility Segregation.

                Plain Text
                User
                |
                +-------+-------+
                | |
                v v
                Commands Queries
                (Create) (Read)
                | |
                Write DB Read DB
                Used when read and write workloads differ significantly.

                11. MVC Architecture
                Very common in ASP.NET MVC applications.

                Plain Text
                User
                |
                v
                Controller
                / \
                v v
                Model View
                12. Pipe and Filter Architecture
                Data flows through processing stages.
                Plain Text
                Input
                |
                Filter1
                |
                Filter2
                |
                Filter3
                |
                Output
                Examples:
                ETL pipelines
                Data processing systems
                What Is Common in Modern Enterprises?
                For a typical Azure + React + .NET + Kafka application:
                Plain Text
                React UI
                |
                Azure API Management
                |
                ASP.NET Core APIs
                |
                Kafka
                |
                Microservices
                |
                Azure SQL Database
                This combines:
                Microservices Architecture
                Event-Driven Architecture
                Clean Architecture inside each service





        `}
                    </code>
                </pre>
            </div>
        </>

    )

}

export default Architecture;