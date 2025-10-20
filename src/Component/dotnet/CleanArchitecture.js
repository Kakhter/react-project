        const CleanArchitecture =
        `
        Scaffold-DbContext "your-connection-string" Microsoft.EntityFrameworkCore.SqlServer 
        -OutputDir Models -Context AppDbContext
        EF Core generates:

            ✅ DbContext class (e.g. AppDbContext.cs)
            ✅ Entity classes (POCOs representing tables)

        Example output:

            /Models
            ├── AppDbContext.cs
            ├── Customer.cs
            ├── Order.cs
            ├── Product.cs

        Where to Place These in a Clean Architecture:
        Example 1

            /Domain
                /Entities
                    Customer.cs
                    Order.cs
                    Product.cs
                /Interfaces
                    ICustomerRepository.cs

            /Application
                /DTOs
                /Services
                /UseCases

            /Infrastructure
                /Data
                    AppDbContext.cs
                /Repositories
                    CustomerRepository.cs
                /Configurations
                    CustomerConfiguration.cs

            /Presentation
                /Controllers
                    CustomerController.cs

        ------------------------------------------------------------
        Example 2

        CustomerDiscountSolution/
            │
            ├── src/
            │   ├── CustomerDiscount.Domain/
            │   │   ├── Entities/
            │   │   │   └── Customer.cs
            │   │   ├── Interfaces/
            │   │   │   └── ICustomer.cs
            │   │   └── Rules/
            │   │       ├── GoldCustomer.cs
            │   │       ├── SilverCustomer.cs
            │   │       ├── PlatinumCustomer.cs   ← new one (extension)
            │   │       └── CustomerResolver.cs
            │   │
            │   ├── CustomerDiscount.Application/
            │   │   ├── Interfaces/
            │   │   │   └── ICustomerService.cs
            │   │   └── Services/
            │   │       └── CustomerService.cs
            │   │
            │   ├── CustomerDiscount.Infrastructure/
            │   │   ├── Data/
            │   │   │   └── CustomerDbContext.cs  (if using DB)
            │   │   └── Repositories/
            │   │       └── CustomerRepository.cs
            │   │
            │   ├── CustomerDiscount.API/
            │   │   ├── Controllers/
            │   │   │   └── CustomerController.cs
            │   │   ├── Program.cs
            │   │   └── appsettings.json
            │   │
            │   └── CustomerDiscount.Tests/
            │       └── CustomerServiceTests.cs
            │
            └── CustomerDiscount.sln

        `
        export default CleanArchitecture;