const MiddleWare = (
  <>
    <div style={{ textAlign: "left", marginLeft: "20px" }}>
      <h1>Middleware</h1>
    </div>
    {`
    Middleware https://www.iscalepro.com/post/asp-net-core-interview-questions/

    Folder Structure:
    ✅ Middleware is Framework-dependent
       Middleware depends directly on ASP.NET Core’s pipeline (i.e., HttpContext, RequestDelegate, etc.), which are part of the presentation framework.
       That means:
       It cannot be reused by another presentation layer (like a console app or Blazor front-end).
       It’s specific to Web API behavior, not business logic.

    📦 CleanArchitecture.API
        ┣ 📂 Controllers
        ┃ ┗ CustomerController.cs
        ┣ 📂 Middleware
        ┃ ┗ CustomerMiddleware.cs
        ┣ Program.cs
        ┗ appsettings.json

        var path = context.Request.Path;            // /api/customers
        var method = context.Request.Method;        // GET, POST, PUT, DELETE
        var query = context.Request.QueryString;    // ?page=2&size=10
        var headers = context.Request.Headers;      // Authorization, Content-Type, etc.
        var bodyStream = context.Request.Body;      // Request body stream
        var contentType = context.Request.ContentType;

        Category	          Property / Method	                        Purpose
        Request Info	        HttpContext.Request	                        =>Access request details like URL, headers, query params, body, etc.
                                Request.Path, Request.Method, Request.Query	=>To check request route and type (GET, POST etc.)
                                Request.Headers["Authorization"]	        =>To read custom or JWT headers
        Response Control        HttpContext.Response	                    =>Modify outgoing response (status, body, headers)
                                Response.StatusCode	                        =>Set HTTP status code
                                Response.Headers.Add()	                    =>Add custom response headers
        User Information	    HttpContext.User	                        =>Access logged-in user claims/principal (from JWT, cookies, etc.)
        Dependency Services	    HttpContext.RequestServices	                =>Resolve scoped dependencies (e.g., database, logger)
        Session	                HttpContext.Session	                        =>Store user data during a session
        Items(Per Request Data) HttpContext.Items["key"]	                =>Store temporary data for this request (used by both middleware and filters)
        Connection Info	        HttpContext.Connection.RemoteIpAddress	    =>Get client IP address
        Cancellation Token	    HttpContext.RequestAborted	                =>Detect when the client cancels request


    What is Middleware?

        In ASP.NET Core, middleware is a component that is executed in the HTTP request/response pipeline.

        Every incoming request passes through a sequence (pipeline) of middleware components, and each can:

        Process the request

        Call the next middleware (or stop the chain)

        Modify the response before it goes back to the client


    Examples of common middleware: 

        • Authentication Middleware: This middleware is responsible for authenticating
    users, ensuring that only authorized users can access protected resources. 

        •  Static Files Middleware: This middleware serves static files, such as CSS
    stylesheets, JavaScript files, and images, directly to the client. 

        • Routing Middleware: This middleware matches incoming requests to specific
    controllers and actions based on the defined routes. 

        • Session Middleware: This middleware enables session management, allowing you to store
    user-specific data across multiple requests. 

        • CORS Middleware: This middleware handles Cross-Origin Resource Sharing (CORS), allowing your
    application to accept requests from different origins. 

        • Exception Handling Middleware: This middleware catches unhandled exceptions and provides a
    mechanism for logging errors and displaying custom error pages.

    `}
    {`
        Example of middleware order:
        C#
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            // … other middleware …
            app.UseHttpsRedirection(); // Redirect HTTP requests to HTTPS
            app.UseStaticFiles(); // Serve static files
            app.UseRouting(); // Match requests to routes
            app.UseAuthentication(); // Authenticate users
            app.UseAuthorization(); // Authorize users
            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers(); // Map controllers for API requests
                endpoints.MapRazorPages(); // Map Razor Pages for page-based requests
            });
            // … other middleware …
        }
        
        2️⃣ Custom Middleware

            Created by developers to handle specific logic (e.g., logging, error handling, request timing, API key validation, etc.)

            Example:

            public class RequestLoggingMiddleware
            {
                private readonly RequestDelegate _next;
                private readonly ILogger<RequestLoggingMiddleware> _logger;

                public RequestLoggingMiddleware(RequestDelegate next, ILogger<RequestLoggingMiddleware> logger)
                {
                    _next = next;
                    _logger = logger;
                }

                public async Task InvokeAsync(HttpContext context)
                {
                    _logger.LogInformation($"Request: {context.Request.Method} {context.Request.Path}");
                    await _next(context);
                    _logger.LogInformation($"Response: {context.Response.StatusCode}");
                }
            }


            Register in Program.cs:

            app.UseMiddleware<RequestLoggingMiddleware>();

--------------Another Example-----------------------------------------

        using Microsoft.AspNetCore.Http;
        using Microsoft.Extensions.Configuration;
        using Microsoft.IdentityModel.Tokens;
        using System.IdentityModel.Tokens.Jwt;
        using System.Text;
        using System.Threading.Tasks;

        public class JwtValidationMiddleware
        {
            private readonly RequestDelegate _next;
            private readonly IConfiguration _configuration;

            public JwtValidationMiddleware(RequestDelegate next, IConfiguration configuration)
            {
                _next = next;
                _configuration = configuration;
            }

            public async Task InvokeAsync(HttpContext context)
            {
                var token = context.Request.Headers["Authorization"].FirstOrDefault()?.Split(" ").Last();

                if (token == null)
                {
                    context.Response.StatusCode = 401; // Unauthorized
                    await context.Response.WriteAsync("Token is missing");
                    return;
                }

                try
                {
                    var tokenHandler = new JwtSecurityTokenHandler();
                    var key = Encoding.ASCII.GetBytes(_configuration["Jwt:Key"]); // Secret key from appsettings
                    tokenHandler.ValidateToken(token, new TokenValidationParameters
                    {
                        ValidateIssuerSigningKey = true,
                        IssuerSigningKey = new SymmetricSecurityKey(key),
                        ValidateIssuer = true,
                        ValidIssuer = _configuration["Jwt:Issuer"],
                        ValidateAudience = true,
                        ValidAudience = _configuration["Jwt:Audience"],
                        ValidateLifetime = true
                    }, out SecurityToken validatedToken);

                    // Optionally attach user info to context
                    var jwtToken = (JwtSecurityToken)validatedToken;
                    context.Items["UserId"] = jwtToken.Claims.First(x => x.Type == "id").Value;

                    await _next(context); // Call the next middleware
                }
                catch
                {
                    context.Response.StatusCode = 401;
                    await context.Response.WriteAsync("Invalid Token");
                }
            }
        }
    2---------- Register Middleware in Program.cs
        var builder = WebApplication.CreateBuilder(args);
        var app = builder.Build();

        // Add your middleware before controllers
        app.UseMiddleware<JwtValidationMiddleware>();

        app.MapControllers();
        app.Run();

    3---------- Sample appsettings.json for JWT
    {
    "Jwt": {
        "Key": "ThisIsASecretKeyForJWT12345",
        "Issuer": "MyApp",
        "Audience": "MyAppUsers"
    }
    }


`}
  </>
);

export default MiddleWare;
