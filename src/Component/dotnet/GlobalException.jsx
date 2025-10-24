const GlobalException = (
  <>
    {`

        🧩 What is Global Exception Handling?

        Global Exception Handling in ASP.NET Core ensures that all unhandled exceptions (in controllers, services, etc.) are:

        Caught automatically

        Logged properly

        And a consistent response (JSON or XML) is returned to the client

        It avoids exposing stack traces or internal errors to users.

        🧱 There Are 3 Common Ways to Handle It Globally
        Approach	Description
        ✅ 1. Custom Middleware (Recommended)	Centralized control, works across the pipeline
        2. UseExceptionHandler()	Built-in ASP.NET Core feature
        3. Exception Filters	Controller-level or global MVC filters

        Let’s focus on the best approach — using a Custom Middleware.

        🧠 1️⃣ Create a Custom Exception Middleware
        📄 ExceptionHandlingMiddleware.cs
        using Microsoft.AspNetCore.Http;
        using Microsoft.Extensions.Logging;
        using System.Net;
        using System.Text.Json;

        public class ExceptionHandlingMiddleware
        {
            private readonly RequestDelegate _next;
            private readonly ILogger<ExceptionHandlingMiddleware> _logger;

            public ExceptionHandlingMiddleware(RequestDelegate next, ILogger<ExceptionHandlingMiddleware> logger)
            {
                _next = next;
                _logger = logger;
            }

            public async Task InvokeAsync(HttpContext context)
            {
                try
                {
                    // Pass control to next middleware
                    await _next(context);
                }
                catch (Exception ex)
                {
                    // Log exception
                    _logger.LogError(ex, "An unhandled exception occurred.");

                    // Return formatted error response
                    await HandleExceptionAsync(context, ex);
                }
            }

            private static Task HandleExceptionAsync(HttpContext context, Exception exception)
            {
                var response = context.Response;
                response.ContentType = "application/json";

                // You can customize the status code based on exception type
                response.StatusCode = exception switch
                {
                    ArgumentNullException => (int)HttpStatusCode.BadRequest,
                    UnauthorizedAccessException => (int)HttpStatusCode.Unauthorized,
                    _ => (int)HttpStatusCode.InternalServerError
                };

                var result = JsonSerializer.Serialize(new
                {
                    statusCode = response.StatusCode,
                    message = exception.Message,
                    detail = "Something went wrong. Please contact support."
                });

                return response.WriteAsync(result);
            }
        }

        ⚙️ 2️⃣ Register Middleware in Program.cs

        Add this before app.UseAuthorization():

        var app = builder.Build();

        app.UseMiddleware<ExceptionHandlingMiddleware>(); // ✅ Custom global handler

        app.UseHttpsRedirection();
        app.UseAuthorization();
        app.MapControllers();

        app.Run();

        🧪 3️⃣ Example Controller to Test
        [ApiController]
        [Route("api/[controller]")]
        public class TestController : ControllerBase
        {
            [HttpGet("error")]
            public IActionResult ThrowError()
            {
                throw new Exception("Test exception for demo!");
            }
        }


        If you hit:
        GET /api/test/error

        You’ll get a clean, consistent response like:

        {
        "statusCode": 500,
        "message": "Test exception for demo!",
        "detail": "Something went wrong. Please contact support."
        }


        And it’s logged internally via ILogger 🔥

        🧩 4️⃣ Optional: Global Exception Filter (Alternative)

        You can also use an Exception Filter:

        public class GlobalExceptionFilter : IExceptionFilter
        {
            private readonly ILogger<GlobalExceptionFilter> _logger;

            public GlobalExceptionFilter(ILogger<GlobalExceptionFilter> logger)
            {
                _logger = logger;
            }

            public void OnException(ExceptionContext context)
            {
                _logger.LogError(context.Exception, "Unhandled exception");
                context.Result = new ObjectResult(new
                {
                    Message = context.Exception.Message,
                    Code = 500
                })
                {
                    StatusCode = StatusCodes.Status500InternalServerError
                };
                context.ExceptionHandled = true;
            }
        }


        Then register it globally:

        builder.Services.AddControllers(options =>
        {
            options.Filters.Add<GlobalExceptionFilter>();
        });

        🧭 Summary
        Method	Layer	Recommended
        ✅ Custom Middleware	Global (Request Pipeline)	✅ Best choice
        UseExceptionHandler()	Global	For simple APIs
        Exception Filter	MVC/Controller level	Optional
        🧰 Pro Tips

        Always log full exception details (stack trace) internally, not in API response.

        Use custom exception types for known business errors (e.g., NotFoundException, ValidationException).

        Add correlation ID for tracing distributed systems.

        Use libraries like Serilog, NLog, or Application Insights for advanced logging.



`}
  </>
);

export default GlobalException;
