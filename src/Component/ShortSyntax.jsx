import React, { useEffect } from 'react'

const ShortSyntax = () => {

    useEffect(() => {

    }, [])

    return (

        <>
            <pre>
                {`
--------------------------------------------------------------------------------------------------------
                                            SWAGGER
--------------------------------------------------------------------------------------------------------
builder.Services.AddSwaggerGen() -- DEFAULT

app.UseSwagger();
app.UseSwaggerUI()

--------------------------------------------------------------------------------------------------------
                                            RESPONSE COMPRESSION:
--------------------------------------------------------------------------------------------------------
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

--------------------------------------------------------------------------------------------------------
                                            THROTTLING
--------------------------------------------------------------------------------------------------------
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
--------------------------------------------------------------------------------------------------------
                                            XML RESPONSE
--------------------------------------------------------------------------------------------------------
        headers: {
            "Content-Type": "application/xml",  // 👈 You are sending XML
            "Accept": "application/xml"         // 👈 You want XML in response
        },

ADD in Asp.net
builder.Services.AddControllers().AddXmlSerializerFormatters();

--------------------------------------------------------------------------------------------------------
                                            SERILOG IMPLEMENTATION
--------------------------------------------------------------------------------------------------------
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
--------------------------------------------------------------------------------------------------------
                                            EF Short notes:
--------------------------------------------------------------------------------------------------------
1. public class Customer
2. Create ICustomerRepository Interface:
public interface ICustomerRepository
            {
                Task<IEnumerable<Customer>> GetAllAsync();
                Task<Customer?> GetByIdAsync(int id);
                Task<int> AddAsync(Customer customer);
                Task<int> UpdateAsync(Customer customer);
                Task<int> DeleteAsync(int id);
            }

3. Create Customer Service

4. public class CustomerRepository:ICustomerRepository => Infrastructure Layer
    {
        private readonly DBContext _db;
        public CustomerRepository(DBContext db)
        {
        _db=db;
        }
    
        public IEnumeriable<Customer>GetAll()
        {
            return _db.tblCustomer;
        }
            Similarly implement other methods of the interface:
            
            return _db.tblCustomer.Find(id);

            _db.tblCustomer.Add(customer);
            _db.SaveChanges();

            _db.tblCustomer.Remove(id);
            _db.SaveChanges();

            _db.tblCustomer.Update(customer);
            _db.SaveChanges();





`}
            </pre>
        </>
    )
}

export default ShortSyntax;