const EnvironmentSetting = (
  <>
    <div style={{ textAlign: "left", marginLeft: "3%" }}>
      <h2>Environment Setting</h2>
    </div>
    {`
    This is envoronment setting for .net core api.
            MyApi/
            │
            ├── appsettings.json
            ├── appsettings.Development.json
            ├── appsettings.Staging.json
            ├── appsettings.Production.json
            ├── Program.cs

        🧩 1️⃣ appsettings.json (base config)

        This is your default configuration used across all environments.

        {
            "ConnectionStrings": {
                "DefaultConnection": "Server=.;Database=MyApp;Trusted_Connection=True;"
            },
            "Logging": {
                "LogLevel": {
                "Default": "Information"
                }
            },
            "AppSettings": {
                "Environment": "Base"
            }
        }

        🧩 2️⃣ Environment-specific config files

        Each environment overrides only what’s different.

        📄 appsettings.Development.json
        {
        "ConnectionStrings": {
            "DefaultConnection": "Server=localhost;Database=MyApp_Dev;Trusted_Connection=True;"
        },
        "AppSettings": {
            "Environment": "Development"
        }
        }

        📄 appsettings.Staging.json
        {
        "ConnectionStrings": {
            "DefaultConnection": "Server=staging-sql;Database=MyApp_Stage;User Id=stage_user;Password=pass;"
        },
        "AppSettings": {
            "Environment": "Staging"
        }
        }

        📄 appsettings.Production.json
        {
        "ConnectionStrings": {
            "DefaultConnection": "Server=prod-sql;Database=MyApp_Prod;User Id=prod_user;Password=secure;"
        },
        "AppSettings": {
            "Environment": "Production"
        }
        }

        🧱 3️⃣ Program.cs (automatic environment loading)

        ASP.NET Core automatically detects environment and loads correct file.

        var builder = WebApplication.CreateBuilder(args);

        // Loads appsettings.{ENVIRONMENT}.json automatically
        var configuration = builder.Configuration;

        // Example usage:
        var connectionString = configuration.GetConnectionString("DefaultConnection");
        var environment = builder.Environment.EnvironmentName;

        builder.Services.AddControllers();

        var app = builder.Build();

        app.MapControllers();
        app.Run();


        ✅ builder.Environment.EnvironmentName automatically gives:

        Development

        Staging

        Production

        ⚙️ 4️⃣ Set the Environment

        You can set it in multiple ways depending on where you run the API.

        🖥️ (A) Local Machine (Visual Studio)

        Open launchSettings.json
        Path: Properties/launchSettings.json

        {
        "profiles": {
            "MyApi": {
            "commandName": "Project",
            "dotnetRunMessages": true,
            "launchBrowser": true,
            "applicationUrl": "https://localhost:7100;http://localhost:5100",
            "environmentVariables": {
                "ASPNETCORE_ENVIRONMENT": "Development"
            }
            }
        }
        }

`}

    <span style={{ color: "blue", marginLeft: "60px" }}>
      You can change "Development" to "Staging" or "Production" for testing.
    </span>

    {`

        ✅ Summary
        Step	Purpose
        appsettings.json	Base configuration
        appsettings.{ENV}.json	Overrides for each environment
        ASPNETCORE_ENVIRONMENT	Defines current environment
        builder.Environment.IsDevelopment()	Used for conditional setup
        launchSettings.json	Local debugging environment

    `}
  </>
);

export default EnvironmentSetting;
