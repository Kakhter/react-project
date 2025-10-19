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

        `
        export default CleanArchitecture;