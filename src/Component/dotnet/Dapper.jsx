const Dapper = (
  <>
    <div style={{ textAlign: "left", marginLeft: "3%" }}>
      <h2>Dapper</h2>
    </div>
    {/* <span style={{ color: "red", fontWeight: "bold" }}>How to decorate </span>
    <span style={{ textDecoration: "underline", color: "green" }}>
      the text
    </span>
    i.e. Bold Underline color etc
    <br /> */}
    {/* <img src="/dotnet/Repository.jpg" width="100%"></img> */}
    <br />
    {`      Folder Structure:

      📦 DapperCleanArchitecture
      ┣ 📂 DapperCleanArchitecture.Domain
      ┃ ┣ Entities
            Customer.cs
      ┃ ┗ Interfaces/
            ICustomerRepository.cs

      ┣ 📂 DapperCleanArchitecture.Infrastructure
      ┃ ┣ Data
            DapperContext.cs
      ┃ ┗ Repositories
            CustomerRepository.cs
      ┣ 📂 DapperCleanArchitecture.Application
      ┃ ┗ Services 
            CustomerService.cs
      ┣ 📂 DapperCleanArchitecture.API
      ┃ ┣ Controllers
            CustomerController.cs
      ┃ ┣ appsettings.json
      ┃ ┗ Program.cs

    🧩 1️⃣ Domain Layer
    
    Install:
    dotnet add package Dapper
    
    namespace DapperCleanArchitecture.Domain.Entities
    {
        public class Customer
        {
            public int Id { get; set; }
            public string Name { get; set; } = string.Empty;
            public string Email { get; set; } = string.Empty;
        }
    }

    🔹 ICustomerRepository.cs

        using DapperCleanArchitecture.Domain.Entities;

        namespace DapperCleanArchitecture.Domain.Interfaces
        {
            public interface ICustomerRepository
            {
                Task<IEnumerable<Customer>> GetAllAsync();
                Task<Customer?> GetByIdAsync(int id);
                Task<int> AddAsync(Customer customer);
                Task<int> UpdateAsync(Customer customer);
                Task<int> DeleteAsync(int id);
            }
        }

        🧩 2️⃣ Infrastructure Layer
              🔹 DapperContext.cs
              using Microsoft.Data.SqlClient;
              using System.Data;

              namespace DapperCleanArchitecture.Infrastructure.Data
              {
                  public class DapperContext
                  {
                      private readonly string _connectionString;

                      public DapperContext(IConfiguration configuration)
                      {
                          _connectionString = configuration.GetConnectionString("DefaultConnection");
                      }

                      public IDbConnection CreateConnection() => new SqlConnection(_connectionString);
                  }
              }

              🔹 CustomerRepository.cs
              using Dapper;
              using DapperCleanArchitecture.Domain.Entities;
              using DapperCleanArchitecture.Domain.Interfaces;
              using DapperCleanArchitecture.Infrastructure.Data;

              namespace DapperCleanArchitecture.Infrastructure.Repositories
              {
                  public class CustomerRepository : ICustomerRepository
                  {
                      private readonly DapperContext _context;

                      public CustomerRepository(DapperContext context)
                      {
                          _context = context;
                      }

                      public async Task<IEnumerable<Customer>> GetAllAsync()
                      {
                          var sql = "SELECT * FROM Customers";
                          using var connection = _context.CreateConnection();
                          return await connection.QueryAsync<Customer>(sql);
                      }

                      public async Task<Customer?> GetByIdAsync(int id)
                      {
                          var sql = "SELECT * FROM Customers WHERE Id = @Id";
                          using var connection = _context.CreateConnection();
                          return await connection.QueryFirstOrDefaultAsync<Customer>(sql, new { Id = id });
                      }

                      public async Task<int> AddAsync(Customer customer)
                      {
                          var sql = "INSERT INTO Customers (Name, Email) VALUES (@Name, @Email)";
                          using var connection = _context.CreateConnection();
                          return await connection.ExecuteAsync(sql, customer);
                      }

                      public async Task<int> UpdateAsync(Customer customer)
                      {
                          var sql = "UPDATE Customers SET Name = @Name, Email = @Email WHERE Id = @Id";
                          using var connection = _context.CreateConnection();
                          return await connection.ExecuteAsync(sql, customer);
                      }

                      public async Task<int> DeleteAsync(int id)
                      {
                          var sql = "DELETE FROM Customers WHERE Id = @Id";
                          using var connection = _context.CreateConnection();
                          return await connection.ExecuteAsync(sql, new { Id = id });
                      }
                  }
              }

       🧩 3️⃣ Application Layer
            🔹 CustomerService.cs
            using DapperCleanArchitecture.Domain.Entities;
            using DapperCleanArchitecture.Domain.Interfaces;

            namespace DapperCleanArchitecture.Application.Services
            {
                public class CustomerService
                {
                    private readonly ICustomerRepository _repository;

                    public CustomerService(ICustomerRepository repository)
                    {
                        _repository = repository;
                    }

                    public async Task<IEnumerable<Customer>> GetAllCustomersAsync() =>
                        await _repository.GetAllAsync();

                    public async Task<Customer?> GetCustomerByIdAsync(int id) =>
                        await _repository.GetByIdAsync(id);

                    public async Task AddCustomerAsync(Customer customer) =>
                        await _repository.AddAsync(customer);

                    public async Task UpdateCustomerAsync(Customer customer) =>
                        await _repository.UpdateAsync(customer);

                    public async Task DeleteCustomerAsync(int id) =>
                        await _repository.DeleteAsync(id);
                }
            }       

        🧩 4️⃣ API Layer
        🔹 appsettings.json
        {
          "ConnectionStrings": {
            "DefaultConnection": "Server=.;Database=CustomerDB;User Id=sa;Password=sa;TrustServerCertificate=True;"
          },
          "Logging": {
            "LogLevel": {
              "Default": "Information"
            }
          }
        }

        🔹 CustomerController.cs
        using DapperCleanArchitecture.Application.Services;
        using DapperCleanArchitecture.Domain.Entities;
        using Microsoft.AspNetCore.Mvc;

        namespace DapperCleanArchitecture.API.Controllers
        {
            [Route("api/[controller]")]
            [ApiController]
            public class CustomerController : ControllerBase
            {
                private readonly CustomerService _service;

                public CustomerController(CustomerService service)
                {
                    _service = service;
                }

                [HttpGet]
                public async Task<IActionResult> GetAll()
                {
                    var customers = await _service.GetAllCustomersAsync();
                    return Ok(customers);
                }

                [HttpGet("{id}")]
                public async Task<IActionResult> GetById(int id)
                {
                    var customer = await _service.GetCustomerByIdAsync(id);
                    if (customer == null)
                        return NotFound();

                    return Ok(customer);
                }

                [HttpPost]
                public async Task<IActionResult> Add(Customer customer)
                {
                    await _service.AddCustomerAsync(customer);
                    return Ok("Customer added successfully");
                }

                [HttpPut]
                public async Task<IActionResult> Update(Customer customer)
                {
                    await _service.UpdateCustomerAsync(customer);
                    return Ok("Customer updated successfully");
                }

                [HttpDelete("{id}")]
                public async Task<IActionResult> Delete(int id)
                {
                    await _service.DeleteCustomerAsync(id);
                    return Ok("Customer deleted successfully");
                }
            }
        }

        🔹 Program.cs
        using DapperCleanArchitecture.Application.Services;
        using DapperCleanArchitecture.Domain.Interfaces;
        using DapperCleanArchitecture.Infrastructure.Data;
        using DapperCleanArchitecture.Infrastructure.Repositories;

        var builder = WebApplication.CreateBuilder(args);

        // Add services
        builder.Services.AddSingleton<DapperContext>();
        builder.Services.AddScoped<ICustomerRepository, CustomerRepository>();
        builder.Services.AddScoped<CustomerService>();

        builder.Services.AddControllers();
        builder.Services.AddEndpointsApiExplorer();
        builder.Services.AddSwaggerGen();

        var app = builder.Build();
        app.UseSwagger();
        app.UseSwaggerUI();

        app.MapControllers();
        app.Run();

        🧩 Database Table
        CREATE TABLE Customers (
            Id INT IDENTITY(1,1) PRIMARY KEY,
            Name NVARCHAR(100),
            Email NVARCHAR(100)
        );

        ✅ API Endpoints
        Method	Endpoint	Description
        GET	/api/customer	Get all customers
        GET	/api/customer/{id}	Get customer by ID
        POST	/api/customer	Add new customer
        PUT	/api/customer	Update customer
        DELETE	/api/customer/{id}	Delete customer
        💡 Notes

        ✅ Clean separation of concerns
        ✅ No Entity Framework — purely Dapper
        ✅ Each layer has its own responsibility
        ✅ Very fast, lightweight API
        ✅ Easy to extend for more entities (e.g., Orders, Products, etc.)

        ===========================================REAL CODE====================================

        ===========DAPPER
        ------------------------------------------------------------------------Domain
        ------------------------------------------------/Entities
        namespace DapperApi.Domain.Entities
        {
            public class Customer
            {
                public int Id { get; set; }
                public string Name { get; set; }
                public string Email { get; set; }
            }
        }
        ------------------------------------------------/Interfaces
        using DapperApi.Domain.Entities;

        namespace DapperApi.Domain.Interfaces
        {
            public interface ICustomerRepository
            {
                Task<IEnumerable<Customer>> GetAllCustomersAsync();
                Task<Customer> GetCustomerByIdAsync(int id);
                Task<int> CreateCustomerAsync(Customer customer);
                Task<int> UpdateCustomerAsync(Customer customer);
                Task<int> DeleteCustomerAsync(int id);
            }
        }
        ------------------------------------------------------------------------Infrastructure
        ------------------------------------------------/Data
        using System.Data;
        using System.Data.SqlClient;

        namespace DapperApi.Infrastructure.Data
        {
            public class DapperContext
            {
                private readonly IConfiguration _configuration;
                public DapperContext(IConfiguration configuration)
                {
                    _configuration = configuration;
                }
                public IDbConnection CreateConnection()
                {
                    return new SqlConnection(_configuration.GetConnectionString("DefaultConnection")); // No changes needed here as the namespace is updated
                }
            }
        }
        ------------------------------------------------/Repositories
        using Dapper;
        using DapperApi.Domain.Entities;
        using DapperApi.Domain.Interfaces;
        using DapperApi.Infrastructure.Data;

        namespace DapperApi.Infrastructure.Repositories
        {
        
            public class CustomerRepository : ICustomerRepository
            {
                private readonly DapperContext _context;

                public CustomerRepository(DapperContext context)
                {
                    _context = context;
                }
                public async Task<int> CreateCustomerAsync(Customer customer)
                {
                    string sql = "INSERT INTO Customer (Name, Email) VALUES (@Name, @Email); SELECT Id,Name,Email from Customer where Id= CAST(SCOPE_IDENTITY())";
                    using var connection = _context.CreateConnection();
                    var id = await connection.QueryAsync<int>(sql, customer);
                    return id.Single();
                }

        .....................
            }
        }

        ------------------------------------------------------------------------Application
        ------------------------------------------------/Services
        using DapperApi.Domain.Interfaces;
        using DapperApi.Domain.Entities;
        namespace DapperApi.Application.Services
        {
            public class CustomerService
            {
                private readonly ICustomerRepository _customerRepository;
                public CustomerService(ICustomerRepository customerRepository)
                {
                    _customerRepository = customerRepository;
                }

                public async Task<int> CreateCustomerAsync(Customer customer)
                {
                    return await _customerRepository.CreateCustomerAsync(customer);
                }

                public async Task<int> DeleteCustomerAsync(int id)
                {

                    return await _customerRepository.DeleteCustomerAsync(id);
                }

                public async Task<IEnumerable<Customer>> GetAllCustomersAsync()
                {
                    return await _customerRepository.GetAllCustomersAsync();
                }

                public async Task<Customer> GetCustomerByIdAsync(int id)
                {
                    return await _customerRepository.GetCustomerByIdAsync(id);
                }

                public async Task<int> UpdateCustomerAsync(Customer customer)
                {
                    return await _customerRepository.UpdateCustomerAsync(customer);
                }   
            }
        }

        ------------------------------------------------------------------------Controller
        public class CustomerController : ControllerBase
        {
            private readonly CustomerService _customerService;
            public CustomerController(CustomerService customerService)
            {
                _customerService = customerService;
            }

            [HttpPost]
            public async Task<IActionResult> CreateCustomer([FromBody] Customer customer)
            {
                if (customer == null)
                {
                    return BadRequest("Customer is null.");
                }
                var id = await _customerService.CreateCustomerAsync(customer);
                //return CreatedAtAction(nameof(GetCustomerById), new { id = id }, customer);
                return Ok(new {Customer="New Customer Created", Id = id });
            }
        ------------------------------------------------------------------------Appsetting.json

        "ConnectionStrings": { "DefaultConnection": "Server=IN-3LDLV64;Database=FamilyDB;User Id=sa;Password=sa;Encrypt=False;" }

        ------------------------------------------------------------------------Program.cs

        builder.Services.AddControllers();
        builder.Services.AddSingleton<DapperApi.Infrastructure.Data.DapperContext>();
        builder.Services.AddScoped<DapperApi.Domain.Interfaces.ICustomerRepository, DapperApi.Infrastructure.Repositories.CustomerRepository>();
        builder.Services.AddScoped<DapperApi.Application.Services.CustomerService>();



    `}
  </>
);
export default Dapper;
