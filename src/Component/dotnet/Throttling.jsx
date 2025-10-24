const Throttling = (
  <>
    {`
    -------------------------------Welcome to Throttling--------------------------------------------

    Throttling in ASP.NET (or any web API) means limiting the number of requests a client (user, IP, or application) can send to your API within a specific time window.
    It helps you control the traffic load and prevent abuse (like Denial-of-Service or brute-force attacks)

        🧰 Step 1: Install Package

        `}

    <span style={{ backgroundColor: "lightyellow", marginLeft: "3%" }}>
      dotnet add package AspNetCoreRateLimit
    </span>
    {`

        🧰 Step 2: Configure in Program.cs

        using AspNetCoreRateLimit;

        var builder = WebApplication.CreateBuilder(args);

    // Option 1   Throttling

        // Add memory cache (required by rate limiting)
        builder.Services.AddMemoryCache();
    
        // Load configuration from appsettings.json
        builder.Services.Configure<IpRateLimitOptions>(builder.Configuration.GetSection("IpRateLimiting"));
        // Register rate limiting services
        builder.Services.AddInMemoryRateLimiting();
        builder.Services.AddSingleton<IRateLimitConfiguration, RateLimitConfiguration>();
     // End of Option 1

    //OR

    // Option 2  Throttling
        builder.Services.AddMemoryCache();

        builder.Services.Configure<IpRateLimitOptions>(options =>
        {
            options.GeneralRules = new List<RateLimitRule>
            {
                new RateLimitRule
                {
                    Endpoint = "*",       // All endpoints
                    Limit = 15,            // Max 5 requests
                    Period = "1m"         // Per 1 minute
                }
            };
        });

        builder.Services.AddInMemoryRateLimiting();
        builder.Services.AddSingleton<IRateLimitConfiguration, RateLimitConfiguration>();
    //----------------End of Option 2

    builder.Services.AddControllers();

        var app = builder.Build();

        app.UseIpRateLimiting(); // Enable IP-based throttling

        app.MapControllers();
        app.Run();

        Step 3: Add Configuration in appsettings.json

        "IpRateLimiting": {
        "EnableEndpointRateLimiting": true,
        "StackBlockedRequests": false,
        "RealIpHeader": "X-Real-IP",
        "ClientIdHeader": "X-ClientId",
        "HttpStatusCode": 429,
        "GeneralRules": [
            {
            "Endpoint": "*",
            "Period": "1m",
            "Limit": 5
            }
        ]
        }


        🔹 This means: Each IP can call any endpoint at most 5 times per minute.


        🔒 Why Throttling Is Important
        Benefit	Description
        🛡 Security	Prevents brute-force or DDoS attacks
        ⚙️ Performance	Ensures fair use among clients
        💰 Cost Control	Avoids overuse of API or bandwidth
        🧩 Stability	Keeps system responsive even under heavy load

        🚀 Advanced: Types of Throttling
        Type	        Description
        IP-based	    Limits requests per IP address
        Client ID-based	Limits requests per API key/client
        User-based	    Limits per authenticated user
        Endpoint-based	Different limits for different APIs

        🧭 Example
        Endpoint	    Limit	    Period
        /api/orders	    10	        per minute
        /api/products	100	        per minute
        /api/admin/*	5	        per hour

        ✅ Summary
        Concept	Explanation
        Throttling	Controls how many API requests a client can make in a given time
        Common Code	AspNetCoreRateLimit middleware
        Error Code	HTTP 429 (Too Many Requests)
        Benefits	Prevents overload, improves fairness, enhances security



`}
  </>
);

export default Throttling;
