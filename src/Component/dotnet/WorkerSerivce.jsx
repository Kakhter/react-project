const WorkerService = (
  <>
    {`      🧩 What is a Worker Service in .NET Core?

        A Worker Service is a background application built using the Generic Host in .NET Core.
        It runs without user interaction, performing background or scheduled tasks continuously or 
        at intervals — very similar to a Windows Service or Linux daemon.

        🏗 Typical Use Cases

        ✅ Background processing — sending emails, reports, or cleanup jobs
        ✅ Message queue processing — e.g., reading from Azure Service Bus, RabbitMQ, or Kafka
        ✅ File watchers or data sync services
        ✅ Scheduled jobs (cron-style logic)
        ✅ IoT device listeners or monitoring services


        ⚙️ How to Create a Worker Service

        In Visual Studio or CLI:

        Using CLI:
        dotnet new worker -n MyWorkerService

        📁 Default Structure
        MyWorkerService/
        │
        ├── Program.cs
        ├── appsettings.json
        └── Worker.cs

        🧩 Example: Worker Service Code
        Program.cs
        using Microsoft.Extensions.DependencyInjection;
        using Microsoft.Extensions.Hosting;
        using Microsoft.Extensions.Logging;

        Host.CreateDefaultBuilder(args)
            .ConfigureServices((hostContext, services) =>
            {
                services.AddHostedService<Worker>(); // Register worker
            })
            .Build()
            .Run();

        Worker.cs
        using Microsoft.Extensions.Hosting;
        using Microsoft.Extensions.Logging;

        public class Worker : BackgroundService
        {
            private readonly ILogger<Worker> _logger;

            public Worker(ILogger<Worker> logger)
            {
                _logger = logger;
            }

            protected override async Task ExecuteAsync(CancellationToken stoppingToken)
            {
                while (!stoppingToken.IsCancellationRequested)
                {
                    _logger.LogInformation("Worker running at: {time}", DateTimeOffset.Now);
                    await Task.Delay(5000, stoppingToken); // Wait 5 seconds
                }
            }
        }


        🟢 This worker runs every 5 seconds and writes a log message.
    
    
    
    
    `}
  </>
);
export default WorkerService;
