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
  </>
);

export default JWT;
