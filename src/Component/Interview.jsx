import React from "react";

const Interview = () => {
  return (
    <>
      <h2>React Interview Question</h2>
      <ol>
        <li>Custome Hook</li>
        <li>Passing value from parent to child without prop drilling</li>
      </ol>

      <h2>.Net Interview Question</h2>
      <ol>
        <li>Anti Forgery Token CSRF</li>
        <li>jwt Implementation</li>
        <li>CORS</li>
        <li>Dapper</li>
        <li>EF</li>
        <li>Cashing</li>
        <li>Refresh Caching</li>
        <li>Return XML format from Action Method</li>
        <li> Throttling </li>
        <li>Scenario based</li>
        There are two customer say "Gold" and "Silver" and having discount 10%
        and 5%.
        <br />
        We have some rule for each customer. Write C# programe in such a way
        that we can <br />
        add new customer say "Platinum" without modifing the existing code.
        <br />
        <br />
        Solution: <br />
        This is a classic Open/Closed Principle (OCP) question from SOLID design
        principles
        <pre>
          <code>
            {`
✅ ASP.NET Core Web API with DI and Open/Closed Principle
    1️⃣ Create the Interface and Implementations
    // ICustomer.cs
    public interface ICustomer
    {
        string Name { get; }
        decimal GetDiscount(decimal totalAmount);
    }

    // GoldCustomer.cs
    public class GoldCustomer : ICustomer
    {
        public string Name => "Gold";
        public decimal GetDiscount(decimal totalAmount)
            => totalAmount - (totalAmount * 0.10m);
    }

    // SilverCustomer.cs
    public class SilverCustomer : ICustomer
    {
        public string Name => "Silver";
        public decimal GetDiscount(decimal totalAmount)
            => totalAmount - (totalAmount * 0.05m);
    }

    // PlatinumCustomer.cs (added later without modifying existing code)
    public class PlatinumCustomer : ICustomer
    {
        public string Name => "Platinum";
        public decimal GetDiscount(decimal totalAmount)
            => totalAmount - (totalAmount * 0.15m);
    }

    2️⃣ Create a Resolver Service
    public class CustomerResolver
    {
        private readonly IEnumerable<ICustomer> _customers;

        public CustomerResolver(IEnumerable<ICustomer> customers)
        {
            _customers = customers;
        }

        public ICustomer GetCustomer(string name)
        {
            foreach (var customer in _customers)
            {
                if (customer.Name.Equals(name, StringComparison.OrdinalIgnoreCase))
                    return customer;
            }
            throw new ArgumentException($"Customer type '{name}' not found.");
        }
    }

    3️⃣ Register Services in Program.cs
    var builder = WebApplication.CreateBuilder(args);

    ✅ Register customer types with DI

    builder.Services.AddSingleton<ICustomer, GoldCustomer>();
    builder.Services.AddSingleton<ICustomer, SilverCustomer>();
    builder.Services.AddSingleton<ICustomer, PlatinumCustomer>();
    builder.Services.AddSingleton<CustomerResolver>();

    builder.Services.AddControllers();

    var app = builder.Build();

    app.MapControllers();

    app.Run();

    4️⃣ Create a Controller
    using Microsoft.AspNetCore.Mvc;

    [ApiController]
    [Route("api/[controller]")]
    public class DiscountController : ControllerBase
    {
        private readonly CustomerResolver _resolver;

        public DiscountController(CustomerResolver resolver)
        {
            _resolver = resolver;
        }

        [HttpGet]
        public IActionResult GetDiscount([FromQuery] string customerType, [FromQuery] decimal amount)
        {
            try
            {
                var customer = _resolver.GetCustomer(customerType);
                var finalAmount = customer.GetDiscount(amount);

                return Ok(new
                {
                    Customer = customer.Name,
                    FinalAmount = finalAmount
                });
            }
            catch (ArgumentException ex)
            {
                return BadRequest(new { Error = ex.Message });
            }
        }
    }

    5️⃣ Test with Swagger or Postman

    Once you run the API (dotnet run), you can test:

    GET https://localhost:5001/api/discount?customerType=Gold&amount=1000


    ✅ Sample Response

    {
    "customer": "Gold",
    "finalAmount": 900
    }


Try with Silver, Platinum, or even add a new class (e.g. DiamondCustomer) 
—just implement ICustomer, register it in Program.cs, and no other code needs to change!

Note: -

1️⃣ What is IEnumerable<ICustomer>?

ICustomer is your interface (contract).

IEnumerable<ICustomer> means "a collection of objects that implement ICustomer."

Instead of injecting just one ICustomer, we are asking DI container to give us 
all registered ICustomer implementations.

2️⃣ How Does ASP.NET Core DI Handle This?



When you register services like this in Program.cs:

builder.Services.AddSingleton<ICustomer, GoldCustomer>();
builder.Services.AddSingleton<ICustomer, SilverCustomer>();
builder.Services.AddSingleton<ICustomer, PlatinumCustomer>();


ASP.NET Core’s built-in DI container stores three different registrations for the same interface ICustomer.
When you later request IEnumerable<ICustomer>:

DI resolves all three instances

Builds a collection (list) containing:

1️⃣ GoldCustomer instance

2️⃣ SilverCustomer instance

3️⃣ PlatinumCustomer instance

Passes this list into the CustomerResolver constructor.

So, _customers becomes a list of all registered customer classes.

                
                `}
          </code>
        </pre>
      </ol>
    </>
  );
};

export default Interview;
