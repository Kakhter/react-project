const QA = (
  <>
    <div style={{ textAlign: "left", marginLeft: "20px" }}>
      <h1>Question & Answer</h1>
    </div>
    Solid Principal Link
   <br/>
  <a href="https://www.google.com/search?q=solid+principles+in+c%23+with+examples+in+hindi&sca_esv=b04cb06c25fa1fe2&udm=7&biw=1366&bih=633&aic=0&sxsrf=ANbL-n5efZeMIyjxGIq8kjAxifNgeflkrw%3A1767971656094&ei=SBthabTFBaidseMP5c3R2Q0&ved=0ahUKEwi0iaPU3_6RAxWoTmwGHeVmNNsQ4dUDCBE&uact=5&oq=solid+principles+in+c%23+with+examples+in+hindi&gs_lp=EhZnd3Mtd2l6LW1vZGVsZXNzLXZpZGVvIi1zb2xpZCBwcmluY2lwbGVzIGluIGMjIHdpdGggZXhhbXBsZXMgaW4gaGluZGkyBRAhGKABMgUQIRigATIFECEYnwVIsRVQkglY8hJwAXgBkAEAmAGaAaABhAiqAQMwLjm4AQPIAQD4AQGYAgqgAqkIwgIKEAAYsAMY1gQYR8ICBRAAGIAEwgIGEAAYFhgewgILEAAYgAQYhgMYigXCAggQABiiBBiJBcICCBAAGIAEGKIEmAMAiAYBkAYEkgcDMS45oAeCKrIHAzAuObgHpgjCBwUwLjkuMcgHFoAIAA&sclient=gws-wiz-modeless-video#fpstate=ive&vld=cid:0d1d2beb,vid:Xm9fezWpHPg,st:0" target ="_blank">Sold Principal Link </a>
   <br/>

    {`
           Implicit and Explicit Interface

           Example of Explicit Interface

            Public interface IAnimal 
             { 
               void Speak(); 
             } 
               
             public class Cat : IAnimal 
             { 
             // Explicit implementation 
       
             void IAnimal.Speak() 
              { 
                 Console.WriteLine("Meow!"); 
              } 
              } 
              
              Cat c = new Cat(); // 
              c.Speak(); ❌ Not accessible 
              ((IAnimal)c).Speak(); // ✅ Works

              public class GetUniqueNumber
              {
                  public HashSet<int> GetUnique()
                  {
                      Random rand = new Random();
                      HashSet<int> numbers = new HashSet<int>();

                      while (numbers.Count < 10)
                      {
                          numbers.Add((rand.Next(1, 101))); // 1 to 100 inclusive
                      }
                      Console.WriteLine(numbers.Count);
                      Console.WriteLine(numbers.ToList()[4]);
                    
                      return numbers;

                  }
              }


    ❓Question 1: ASP.NET Core Request Lifecycle

    🔍 Diagram: ASP.NET Core Request Lifecycle

        Client
          │
          ▼
        Kestrel Server
          │
          ▼
        Middleware Pipeline
          │   ├── Exception Handling
          │   ├── HTTPS Redirection
          │   ├── Routing
          │   ├── Authentication
          │   ├── Authorization
          │   ├── Custom Middleware
          ▼
        Controller / Action
          │
          ▼
        Response Formatting (JSON)
          │
          ▼
        Middleware (on return path)
          │
          ▼
        Kestrel → Client

    ❓Question 2: Middleware Order

    🧩 2. Common Middleware Order

          Here’s a typical and recommended order in Program.cs (or Startup.cs for older projects):

          var builder = WebApplication.CreateBuilder(args);

          var app = builder.Build();

          // 1️⃣ Exception Handling (should be first to catch errors below)
          app.UseExceptionHandler("/error");

          // 2️⃣ HTTPS redirection
          app.UseHttpsRedirection();

          // 3️⃣ Static files (wwwroot)
          app.UseStaticFiles();

          // 4️⃣ Routing
          app.UseRouting();

          // 5️⃣ CORS
          app.UseCors("AllowAll");

          // 6️⃣ Authentication
          app.UseAuthentication();

          // 7️⃣ Authorization
          app.UseAuthorization();

          // 8️⃣ Custom Middleware (e.g., logging, token validation)
          app.UseMiddleware<RequestLoggingMiddleware>();

          // 9️⃣ Endpoints (Controllers, Minimal APIs, Razor Pages)
          app.MapControllers();

          app.Run();



    
    ❓Question 3: Explain the pros, cons, and implementation details of API versioning in ASP.NET Core.

    🧭 What is API Versioning?
    API versioning allows you to manage changes in your API without breaking existing client applications.
    When you make backward-incompatible updates — like changing endpoints, data structures, or business logic — versioning lets old clients keep using older versions while new clients use the latest one.

    Video URL: "https://youtu.be/yw5NS-FNvew"

    🧩 API Versioning Methods

      ASP.NET Core supports multiple versioning strategies — you can use any combination.

      Method	                  Example	          Pros	                        Cons
      URL Path Versioning	      /api/v1/products	Clear, simple, visible in URL	Requires route updates
      Query String Versioning	  /api/products?api-version=1.0	Easy to add	Less RESTful, harder to cache
      Header Versioning	Add x-api-version: 1.0	Clean URL	Clients must set headers manually
      Media Type Versioning	Accept: application/json;version=1.0

    Implementation:
      dotnet add package Microsoft.AspNetCore.Mvc.Versioning


      builder.Services.AddApiVersioning(options =>
      {
          options.DefaultApiVersion = new ApiVersion(1, 0);   // Default version 1.0
          options.AssumeDefaultVersionWhenUnspecified = true; // Assume v1 if no version passed
          options.ReportApiVersions = true;                   // Return version info in headers
          options.ApiVersionReader = new UrlSegmentApiVersionReader(); // Use URL versioning
      });

      3️⃣ Add Version to Controller
      Version 1
      using Microsoft.AspNetCore.Mvc;

      namespace MyApp.Controllers.V1
      {
          [ApiController]
          [Route("api/v{version:apiVersion}/[controller]")]
          [ApiVersion("1.0")]
          public class ProductsController : ControllerBase
          {
              [HttpGet]
              public IActionResult Get() => Ok(new { Version = "1.0", Products = new[] { "Soap", "Shampoo" } });
          }
      }

      Version 2
      namespace MyApp.Controllers.V2
      {
          [ApiController]
          [Route("api/v{version:apiVersion}/[controller]")]
          [ApiVersion("2.0")]
          public class ProductsController : ControllerBase
          {
              [HttpGet]
              public IActionResult Get() => Ok(new { Version = "2.0", Products = new[] { "Soap", "Shampoo", "Conditioner" } });
          }
      }


      4️⃣ Example URLs
      Version	URL
      v1	https://localhost:5001/api/v1/products
      v2	https://localhost:5001/api/v2/products


    ❓Question 4: How have you optimized database access in Entity Framework Core for large-scale applications?

    Optimization	            Purpose
    -------------------------------------------------------------
    AsNoTracking()	            Disable change tracking for reads
    Projection (DTOs)	            Fetch only required columns
    Compiled Queries	            Reuse compiled query plans
    Pagination	                    Handle large result sets efficiently
    Eager Loading	            Avoid N+1 query issue
    DbContext Pooling	            Reuse DB connections
    Caching	                    Reduce database load
    Raw SQL / Stored Procs	    Optimize complex logic
    Indexing	                    Faster lookups
    ExecuteUpdate/Delete	    Batch operations


    ❓Question 5: Describe how you would implement logging in ASP.NET Core with providers such as Serilog or NLog, including structured logging best practices.
       
      Serilog is a third-party structured logging library for .NET applications.
      
      using Serilog;

      var builder = WebApplication.CreateBuilder(args);

      // Configure Serilog before app build
        Log.Logger = new LoggerConfiguration()
            .MinimumLevel.Override("Microsoft", Serilog.Events.LogEventLevel.Error)
            .MinimumLevel.Override("System", Serilog.Events.LogEventLevel.Error)
            .MinimumLevel.Information()
            .WriteTo.Console()
            .WriteTo.File("Logs/app_log.txt", rollingInterval: RollingInterval.Day,
            outputTemplate: "{Timestamp:yyyy-MM-dd HH:mm:ss.fff zzz} [{Level:u3}] {Message:lj}{NewLine}{Exception}" +
                              "{NewLine}------------------------------------------------------------{NewLine}"
            )
            .CreateLogger();
            
        builder.Host.UseSerilog(); // Replace built-in logger with Serilog

      --------------------------------In Controller

      private readonly ILogger<TestController> _logger;

      public TestController(ILogger<TestController> logger)
      {
          _logger = logger;
      }

      [HttpGet("check")]
      public IActionResult Check()
      {
          _logger.LogInformation("✅ Check endpoint called at {Time}", DateTime.Now);
          return Ok("Serilog is working fine!");
      }

      ❓Question 6: Discuss strategies to secure an ASP.NET Core API using OAuth2 and OpenID Connect.
    
      dotnet add package Microsoft.AspNetCore.Authentication.JwtBearer

      🧩 Step 2: Configure Authentication in Program.cs

      Here’s a simple setup using JWT Bearer tokens (OAuth2 flow):

      var builder = WebApplication.CreateBuilder(args);

      builder.Services.AddControllers();

      // 🔐 Add Authentication & JWT Bearer
      builder.Services.AddAuthentication("Bearer")
          .AddJwtBearer("Bearer", options =>
          {
              options.Authority = "https://demo.identityserver.io"; // Identity Provider (OIDC)
              options.Audience = "api1"; // API Resource name
              options.RequireHttpsMetadata = true;
          });

      builder.Services.AddAuthorization();

      var app = builder.Build();

      // Middleware order matters
      app.UseHttpsRedirection();
      app.UseAuthentication(); // 👈 Must come before UseAuthorization
      app.UseAuthorization();

      app.MapControllers();

      app.Run();


      [HttpGet]
          [Authorize] // 🔒 Only accessible with valid JWT token
          public IActionResult GetCustomers()
          {
              return Ok(new[] { "John", "Mary", "Steve" });
          }

    `}
  </>
);

export default QA;
