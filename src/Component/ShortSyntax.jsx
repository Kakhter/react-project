import React, { useEffect } from 'react'

const ShortSyntax = () => {

    useEffect(() => {

    }, [])

    return (

        <>
            <pre>
                {`
SWAGGER
----------------------------------------------------
builder.Services.AddSwaggerGen() -- DEFAULT

app.UseSwagger();
app.UseSwaggerUI()

----------------------------------------------------

RESPONSE COMPRESSION:
----------------------------------------------------
dotnet add package Microsoft.AspNetCore.ResponseCompression

        using Microsoft.AspNetCore.ResponseCompression;
        using System.IO.Compression;

builder.Services.AddResponseCompression() -- only for Gzip

builder.Services.AddResponseCompression(options =>
{
    options.EnableForHttps = true; // ✅ compress HTTPS responses
    options.Providers.Add<GzipCompressionProvider>();
    options.Providers.Add<BrotliCompressionProvider>();
});

builder.Services.Configure<GzipCompressionProviderOptions>(opts =>
{
    opts.Level = System.IO.Compression.CompressionLevel.Fastest;
});

builder.Services.Configure<BrotliCompressionProviderOptions>(opts =>
{
    opts.Level = System.IO.Compression.CompressionLevel.Fastest;
});

app.UseResponseCompression();

Postman
--------
Accept-Encoding: gzip, br

----------------------------------------------------
THROTTLING
--------------------------------
dotnet add package AspNetCoreRateLimit

   builder.Services.AddMemoryCache();
   builder.Services.AddInMemoryRateLimiting();

builder.Services.Configure<IpRateLimitOptions>(options =>
      {
          options.GeneralRules = new List<RateLimitRule>
                  {
                      new RateLimitRule
                      {
                          Endpoint = "*",       // All endpoints
                          Period = "10s",       // Per m/s
                          Limit = 5            // Max 5 requests
                      }
                  };
      });
      builder.Services.AddSingleton<IRateLimitConfiguration, RateLimitConfiguration>();
--------------------------------------------

XML RESPONSE
----------------------------------------------------
        headers: {
            "Content-Type": "application/xml",  // 👈 You are sending XML
            "Accept": "application/xml"         // 👈 You want XML in response
        },

ADD in Asp.net
builder.Services.AddControllers().AddXmlSerializerFormatters();

SERILOG IMPLEMENTATION
----------------------------------------------------
using Serilog;

/*Install
dotnet add package Serilog.AspNetCore
dotnet add package Serilog.Sinks.File
dotnet add package Serilog.Sinks.Console

Configure the Serilog as below in the Program.cs file. 
This configuration will log error-level messages to both the console and a file named "error_log.txt" 
in a "Logs" directory. The logs will be rolled daily, and the output template includes the timestamp, 
source context, message, and exception details.

Use
  private readonly ILogger<CustomerController> _logger;
  and inject in Constructor of the controller and use it as below in the action method
 */


var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
Log.Logger = new LoggerConfiguration()
    .MinimumLevel.Information()
    .WriteTo.Console() // logs to console
    .WriteTo.File("Logs/error_log.txt",
        rollingInterval: RollingInterval.Day,
        restrictedToMinimumLevel: Serilog.Events.LogEventLevel.Information,
        outputTemplate: "{Timestamp:yyyy-MM-dd HH:mm:ss} | {SourceContext} | {Message:lj} | {Exception}")
    .CreateLogger();

builder.Host.UseSerilog(); // replace default ILogger with Serilog
-------------------------------------------------------------------

`}
            </pre>
        </>
    )
}

export default ShortSyntax;