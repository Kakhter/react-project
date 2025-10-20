const CORS = (
  <>
    {`
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
    .policy.WithHeader()
    .policy.WithMetho("PUT","GET","POST","DELETE")
  `}
  </>
);
export default CORS;
