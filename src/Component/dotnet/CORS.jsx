const CORS = (
  <>
    <div style={{ textAlign: "left", marginLeft: "3%" }}>
      <h2>CORS</h2>
    </div>

    {`

    In ASP.NET Core APIs, CORS (Cross‑Origin Resource Sharing) is a browser security standard 
    that lets your API accept requests from different domains, ports, or schemes. 
    -----------------------------------------------------------------------------------------
    Import in program.cs
    using Microsoft.EntityFrameworkCore;
    
    builder.Services.AddCors(options =>
    {
    options.AddPolicy("AllowSpecificOrigin",
        policy => policy.WithOrigins("https://example.com")  // Allow this domain
                        .AllowAnyHeader()
                        .AllowAnyMethod());
    });
    
    ...

    var app = builder.Build();

    app.UseCors("AllowSpecificOrigin")
    
    Note:
    .policy.WithOrigin()
    .policy.WithHeader() OR
    .WithHeaders("Content-Type", "Authorization") OR
    .WithHeaders("Content-Type", "Authorization", "X-CSRF-TOKEN","Content-Type");
    .policy.WithMetho("PUT","GET","POST","DELETE","PATCH")
  `}
  </>
);
export default CORS;
