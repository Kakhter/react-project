import "./dotnet.css";
const Scope = (
  <>
    <div style={{ textAlign: "left", marginLeft: "3%" }}>
      <h2>Scope</h2>
    </div>
    <span className="highlightText"> Welcome to Scope DI </span>
    {`

    🧠 What is Dependency Injection (DI)?

        In ASP.NET Core, Dependency Injection means you let the framework create and manage 
        class objects (dependencies) instead of creating them manually using new.

        Example:

        Instead of:

        var repo = new CustomerRepository();


        You do:

        public class CustomerService
        {
            private readonly ICustomerRepository _repo;

            public CustomerService(ICustomerRepository repo)
            {
                _repo = repo;
            }
        }

        And you register it in Program.cs:

        builder.Services.AddScoped<ICustomerRepository, CustomerRepository>();
        So ASP.NET Core automatically injects the correct instance when needed.

        ⚙️ The Three DI Lifetimes

        1️⃣ AddTransient

        🔹 New instance every time you request it.

        Created each time the service is requested.

        Best for lightweight, stateless, and independent services.

        builder.Services.AddTransient<IMailService, MailService>();


        Use case example:

        Email sender

        Utility/helper classes (e.g., data mappers, formatters)

        🧩 Example:

        public class MailService : IMailService
        {
            public MailService()
            {
                Console.WriteLine("MailService Created");
            }
        }


        If your controller uses IMailService multiple times, it creates a new instance every time.

        2️⃣ AddScoped

        🔹 One instance per HTTP request (scope).

        The same instance is used throughout a single API request, but a new one is created for each new HTTP request.

        Perfect for business logic or database repository classes.

        builder.Services.AddScoped<ICustomerRepository, CustomerRepository>();


        Use case example:

        Repository pattern

        Unit of Work

        Business logic services

        🧩 Example:
        If a controller and a service both depend on ICustomerRepository, they share the same instance during that HTTP request.

        3️⃣ AddSingleton

        🔹 One instance for the entire application lifetime.

        Created once and shared globally across all requests and users.

        Ideal for configuration, logging, or caching.

        builder.Services.AddSingleton<IAppConfig, AppConfig>();


        Use case example:

        App settings

        In-memory cache

        Static data providers

        🧩 Example:
        If you have 1000 API requests, they all share the same Singleton instance.




    `}
  </>
);
export default Scope;
