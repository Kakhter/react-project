const JWT = (
  <>
    {`
    JWT Implementation
    Generate JWT Token
    
    Step 1:
    Install the required packages:

    Microsoft.AspNetCore.Authentication.JwtBearer;
    Microsoft.IdentityModel.Tokens;
    System.IdentityModel.Tokens.Jwt;
    System.Security.Claims

    Step 2:
    In appSetting.json file add the following:

    "Jwt": {
        "Key": "ThisisyourkeyThisisyourkeyThisisyourkeyThisisyourkeyThisisyourkey",
        "Issuer": "Iamyourissuer",
        "Audience": "Iamyouraudience",
        "Subject": "thisisyoursubject"
    }

    Step 3: Create Claims with Subject and Payload.

    var claims = new[]
    {
        new Claim(System.IdentityModel.Tokens.Jwt.JwtRegisteredClaimNames.Sub,_configuration["Jwt:Subject"]),
        new Claim("Id",username),
        new Claim("Password",password),
        new Claim(ClaimTypes.Role,"Admin")
    };

    var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["Jwt:Key"]));

    var signIn = new SigningCredentials(key,SecurityAlgorithms.HmacSha256);

    var token = new JwtSecurityToken(
        _configuration["Jwt:Issuer"],
        _configuration["Jwt:Audience"],
        claims,
        expires: DateTime.UtcNow.AddMinutes(1),
        signingCredentials:signIn
    );

    return new JwtSecurityTokenHandler().WriteToken(token)

    Step 4:
    Validate JWT Token in program.cs file

    Namespace required:
    using Microsoft.AspNetCore.Authentication.JwtBearer;

    Add following code before builer.build()

    builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme).AddJwtBearer(
    options =>
    {
        options.RequireHttpsMetadata = false;
        options.SaveToken = true;
        options.TokenValidationParameters = new TokenValidationParameters()
        {
            ValidateIssuer = true,
            ValidateAudience = true,
            ValidAudience = builder.Configuration["Jwt:Audience"],
            ValidIssuer = builder.Configuration["Jwt:Issuer"],
            IssuerSigningKey = new
            SymmetricSecurityKey(Encoding.UTF8.GetBytes(builder.Configuration["Jwt:Key"]))
        };
    })

    `}
    <h3>JWT token validation using Custom Middleware</h3>

    {`
        Validate a JWT token in a custom middleware in ASP.NET Core.

        1. Create the Custom Middleware

        You can create a middleware class that intercepts requests and validates the JWT token manually.

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

        2. Register Middleware in Program.cs
        var builder = WebApplication.CreateBuilder(args);
        var app = builder.Build();

        // Add your middleware before controllers
        app.UseMiddleware<JwtValidationMiddleware>();

        app.MapControllers();
        app.Run();

        3. Sample appsettings.json for JWT
        {
        "Jwt": {
            "Key": "ThisIsASecretKeyForJWT12345",
            "Issuer": "MyApp",
            "Audience": "MyAppUsers"
        }
        }

        4. Notes & Tips

        Token Extraction: Usually from Authorization header as Bearer <token>.

        Attach Info: You can attach user info to HttpContext.Items to use later in controllers.

        Middleware Order: Ensure this runs before any endpoints that require authentication.

        Custom Claims: You can validate custom claims if needed.
   
   `}
  </>
);

export default JWT;
