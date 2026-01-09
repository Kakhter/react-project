const ReturnType = (
  <>
    <div style={{ textAlign: "left", marginLeft: "3%" }}>
      <h2>Return Type</h2>
    </div>

    {`
        1. Enable XML Formatter in Program.cs

        builder.Services.AddControllers()
            .AddXmlSerializerFormatters(); // Enables XML output

             and Calling in Header: Accept: application/xml

        🧩 3. Example: Controller Method Returning XML
        using Microsoft.AspNetCore.Mvc;

        [ApiController]
        [Route("api/[controller]")]
        public class ProductsController : ControllerBase
        {
            [HttpGet("{id}")]
            [Produces("application/xml")] // Explicitly tells Swagger/clients that this returns XML
            public IActionResult GetProduct(int id)
            {
                var product = new Product
                {
                    Id = id,
                    Name = "Laptop",
                    Price = 50000
                };

                return Ok(product);
            }
        }

        public class Product
        {
            public int Id { get; set; }
            public string Name { get; set; }
            public decimal Price { get; set; }
        }

        4. How to Request XML from the Client

        curl -H "Accept: application/xml" https://localhost:5001/api/products/1

        Example using Postman

        Go to Headers tab

        Add:
        Accept → application/xml

        🧾 5. Force JSON (if both are configured)

        If you have both JSON and XML formatters configured, the response depends on the client’s Accept header.

        If you want to always return JSON, just remove the Accept header or configure like this:

        return new JsonResult(product);

        ------------------------------------------------------------------------------------------
        For both:

        🧩 In Program.cs
        var builder = WebApplication.CreateBuilder(args);

        // Add services to the container.
        builder.Services.AddControllers(options =>
        {
            // Optional: can add global filters here if needed
        })
        // Add both JSON (default) and XML support
        .AddJsonOptions(options =>
        {
            // Customize JSON behavior if needed
            options.JsonSerializerOptions.PropertyNamingPolicy = null;
        })
        .AddXmlSerializerFormatters();

        🧠 How It Works

        .AddJsonOptions() → keeps JSON as default (using System.Text.Json)

        .AddXmlSerializerFormatters() → adds XML serialization

        The API will now auto-detect which format to return based on the Accept header in the request.

        🧩 Example Controller
        using Microsoft.AspNetCore.Mvc;

        [ApiController]
        [Route("api/[controller]")]
        public class EmployeesController : ControllerBase
        {
            [HttpGet("{id}")]
            public IActionResult GetEmployee(int id)
            {
                var employee = new Employee
                {
                    Id = id,
                    Name = "Khalid Akhter",
                    Designation = "Principal Consultant",
                    Salary = 120000
                };

                return Ok(employee);
            }
        }

        public class Employee
        {
            public int Id { get; set; }
            public string Name { get; set; }
            public string Designation { get; set; }
            public decimal Salary { get; set; }
        }


        🧪 Test the Response Format
        🧾 1. JSON (default)

        If you send a normal GET request (no special headers), you get:

        curl https://localhost:5001/api/employees/1


        Response:

        {
        "Id": 1,
        "Name": "Khalid Akhter",
        "Designation": "Principal Consultant",
        "Salary": 120000
        }

        🧾 2. XML (when requested)

        Send request with:

        curl -H "Accept: application/xml" https://localhost:5001/api/employees/1


        Response:

        <Employee>
        <Id>1</Id>
        <Name>Khalid Akhter</Name>
        <Designation>Principal Consultant</Designation>
        <Salary>120000</Salary>
        </Employee>

    Note:

        fetch("https://localhost:5001/api/employees", {
        method: "POST",
        headers: {
            "Content-Type": "application/xml",  // 👈 You are sending XML
            "Accept": "application/xml"         // 👈 You want XML in response
        },
        body: xmlData
        })

        .then(response => response.text())
        .then(data => console.log("Response:", data))// her we can use setData(Response);
        .catch(err => console.error(err));

        `}
  </>
);

export default ReturnType;
