const Performance = (
  <>
    {`

        ⚙️ 1️⃣ What “Performance” Means for an API

        Performance can be measured in multiple ways:

        Response Time (Latency): How long it takes to process a request.

        Throughput (Requests/sec): How many requests your API can handle per second.

        Resource Usage: CPU, memory, and I/O consumption under load.

        Scalability: How performance changes under increased load.

        🚀 2️⃣ Tools to Check API Performance
        ✅ A. Postman or Thunder Client

        Simple manual testing.

        You can view response time directly.

        Great for quick local checks.

        ✅ B. Browser DevTools (Network tab)

        Useful for frontend-connected APIs.

        Shows request duration, size, and status code.

        ✅ C. Benchmark Tools

        Use one of these for realistic load/performance testing:

        Tool	                                Description
        -----------------------------------------------------------------------------------
        🧪 Apache JMeter	                Industry-standard load testing tool (GUI-based).
        ⚙️ k6.io	                        Script-based performance/load testing for modern APIs.
        💨 wrk / Bombardier	                Command-line tools for HTTP benchmarking.
        💻 Visual Studio Load Test (older)	For local or Azure DevOps testing.


        ✅ D. .NET Core Built-in Performance Tools
        🟣 Use ASP.NET Core Middleware to measure execution time

        You can write a custom middleware to log duration for each request.

        public class PerformanceMiddleware
        {
            private readonly RequestDelegate _next;
            private readonly ILogger<PerformanceMiddleware> _logger;

            public PerformanceMiddleware(RequestDelegate next, ILogger<PerformanceMiddleware> logger)
            {
                _next = next;
                _logger = logger;
            }

            public async Task InvokeAsync(HttpContext context)
            {
`}
    <div className="highlightText">
      var watch = Stopwatch.StartNew(); <br />
      await _next(context);
      <br />
      watch.Stop();
      <br />
    </div>
    {`
                _logger.LogInformation("Request [{method}] {url} executed in {duration} ms",
                    context.Request.Method,
                    context.Request.Path,
                    watch.ElapsedMilliseconds);
            }
        }


        Register in Program.cs before other middlewares:

        app.UseMiddleware<PerformanceMiddleware>();


        You’ll see per-request timing in logs.

        ✅ E. Use Application Performance Monitoring (APM) tools

        For production-grade insights:

        Tool	                            Features
        ------------------------------------------------------------------------------
        Application Insights (Azure)	    Full tracing, dependency tracking, live metrics
        New Relic	                    End-to-end monitoring with SQL traces
        Datadog/Dynatrace/Elastic APM	    Distributed tracing, bottleneck detection
        OpenTelemetry	                    Open-source tracing and metrics framework

        📘 Example — using Application Insights:

        builder.Services.AddApplicationInsightsTelemetry();


        Then monitor in Azure Portal → Application Insights → “Performance” tab.

        📊 3️⃣ Metrics to Focus On
        Metric	                Ideal Range	            Description
        ---------------------------------------------------------------------------
        Avg. Response Time	    < 300 ms	            Time to complete API request
        95th Percentile Latency	    < 1 sec	            High-end latency (for 95% of requests)
        CPU Usage	            < 80%	            Indicates server capacity
        Memory Usage	            Stable	            Memory leaks cause growing usage
        Error Rate	            < 1%	            High errors = performance issues
        Throughput (RPS)	    As high as possible	    Requests per second

        🧠 4️⃣ Optimize API Performance
        Area	                Optimization
        -------------------------------------------------------------
        Database	        Use async EF Core, indexes, no N+1 queries
        Caching	                MemoryCache, Redis for frequent calls
        Serialization	        Use System.Text.Json (faster than Newtonsoft)
        Compression	        Enable response compression middleware
        Pooling	                Use AddDbContextPool for EF Core
        Async I/O	        Prefer async all the way down
        Minimize Middleware	Only load what’s needed
        Use CDN	                For static content
        Profiling	        Use MiniProfiler to see slow methods

        🧩 Example: Enabling Response Compression
        builder.Services.AddResponseCompression(options =>
            {
                options.EnableForHttps = true;
            });

        app.UseResponseCompression();

        🧪 5️⃣ Test Example with k6

        Create a script loadtest.js:

        import http from 'k6/http';
        import { sleep } from 'k6';

        export default function () {
        http.get('https://localhost:5001/api/customers');
        sleep(1);
        }


        Run test:

        k6 run --vus 10 --duration 30s loadtest.js


        This runs 10 virtual users for 30 seconds — you’ll get:

        Requests/sec

        Avg response time

        Failure rate

        ✅ Summary

        Method	                Use For
        -------------------------------------------------
        Middleware Stopwatch	Debug-level timing
        Application Insights	Production monitoring
        JMeter / k6             Load testing
        MiniProfiler	        Per-request method-level profiling
        APM tools               Full distributed tracing

`}
  </>
);
export default Performance;
