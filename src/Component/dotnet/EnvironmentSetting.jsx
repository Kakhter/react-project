const EnvironmentSetting = (
  <>
    <div>
      <span className="highlightText">API Environment Setting</span>
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

    <div>
      <span className="highlightText">
        You can change "Development" to "Staging" or "Production" for testing.
      </span>
    </div>

    {`

        ✅ Summary
        Step	Purpose
        appsettings.json	Base configuration
        appsettings.{ENV}.json	Overrides for each environment
        ASPNETCORE_ENVIRONMENT	Defines current environment
        builder.Environment.IsDevelopment()	Used for conditional setup
        launchSettings.json	Local debugging environment

`}
    <div>
      <span className="highlightText">
        🧩 Step 2: How .NET Knows Which Environment to Use
      </span>
    </div>

    {`

    var builder = WebApplication.CreateBuilder(args);
    Console.WriteLine($"Current Environment: {builder.Environment.EnvironmentName}");

        The environment is set using the variable:
        ASPNETCORE_ENVIRONMENT
        Possible values:

        Development
        Staging
        Production

        You can check or set it in multiple ways 👇
        🔹 Option 1: In Visual Studio (for local run)
        Open:
        Properties → launchSettings.json
        You’ll see something like:

        {
        "profiles": {
            "YourAPI": {
            "commandName": "Project",
            "dotnetRunMessages": true,
            "launchBrowser": true,
            "environmentVariables": {
            "ASPNETCORE_ENVIRONMENT": "Staging"
            },
            "applicationUrl": "https://localhost:7247"
            }
        }
        }


        ✅ If that says "Staging", your API will use appsettings.Staging.json.
`}
    <span className="highlightText">🔹 Option 2: In command line</span>
    {`

        You can run:

        set ASPNETCORE_ENVIRONMENT=Staging
        dotnet run




    `}
  </>
);

export default EnvironmentSetting;
