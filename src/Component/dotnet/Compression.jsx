const Compression = (
  <>
    {`
        Compression
        ------------
    🧠 What Is Compression in ASP.NET Core?

        Compression means reducing the size of the data (like JSON, XML, HTML, or text) 
        before sending it from the server to the client — typically the response body.

        ⚙️ Example

        Without compression:

        {
        "id": 1,
        "name": "Khalid Akhter",
        "designation": "Principal Consultant"
        }

        might be 1 KB in size.

        With compression (e.g., Gzip), it might become 200 bytes — a huge savings.

        The client browser or API consumer automatically decompresses it when received.

        🚀 Why Use Compression?
        Benefit	Description
        ⚡ Faster Response	Smaller payload = faster network transfer
        💾 Lower Bandwidth	Saves bandwidth and hosting cost
        🌐 Better Performance	Improves user experience, especially over slow connections
        🔒 Secure Transport	Works seamlessly with HTTPS
        🧩 Types of Compression

        ASP.NET Core supports:

        Algorithm	    Description
        ----------------------------------------------------------------------
        Gzip	            Most common, widely supported
        Brotli	            Newer, provides better compression (especially for text)

        Step 1️⃣ — Add NuGet Package (if not already available)
        dotnet add package Microsoft.AspNetCore.ResponseCompression

        using Microsoft.AspNetCore.ResponseCompression;
        using System.IO.Compression;

        var builder = WebApplication.CreateBuilder(args);

        // Configure compression
        builder.Services.AddResponseCompression(options =>
        {
            // Enable Gzip and Brotli
            options.Providers.Add<GzipCompressionProvider>();
            options.Providers.Add<BrotliCompressionProvider>();
            
            // Optional: only compress certain MIME types
            options.MimeTypes = ResponseCompressionDefaults.MimeTypes.Concat(new[]
            {
                "application/json"
            });
        });

        // Configure Gzip and Brotli levels
        builder.Services.Configure<GzipCompressionProviderOptions>(options =>
        {
            options.Level = CompressionLevel.Fastest; // or Optimal
        });

        builder.Services.Configure<BrotliCompressionProviderOptions>(options =>
        {
            options.Level = CompressionLevel.Fastest;
        });

        var app = builder.Build();

        // Enable compression middleware
        app.UseResponseCompression();

        app.MapControllers();
        app.Run();

        ✅ Summary
        Concept	Description
        Compression	Reduces response size sent to the client
        Common Types	Gzip, Brotli
        Middleware	UseResponseCompression()
        Benefit	Faster response, less bandwidth
        Header	Content-Encoding: gzip or br

        ⚙️ If the Client Doesn’t Send Accept-Encoding

        If the client doesn’t send that header,
        then no compression happens.
        Response will be plain text or JSON without Content-Encoding.

        🧭 Summary Table
        Client’s Header	            Compression Used	Response Header
        Accept-Encoding: br, gzip   Brotli	            Content-Encoding: br
        Accept-Encoding: gzip       Gzip	            Content-Encoding: gzip
        Accept-Encoding: none or    ❌ None	           (no Content-Encoding)
                not present


`}
  </>
);

export default Compression;
