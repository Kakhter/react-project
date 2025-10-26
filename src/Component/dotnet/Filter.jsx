const Filter = (
  <>
    <div style={{ textAlign: "left", marginLeft: "3%" }}>
      <h2>Filter</h2>
    </div>
    {`

    ├── WebAPI/
    │    ├── Controllers/
    │    ├── Filters/
    │    ├── Middlewares/
    │    └── Program.cs


    🧠 What is a Filter in ASP.NET Core?

    A Filter in ASP.NET Core is a piece of code that runs automatically before or after certain stages in the request processing pipeline.

    You use filters to:

    Add common logic (like logging, validation, authentication, etc.)

    Modify requests or responses

    Handle cross-cutting concerns (logic that applies to multiple actions)

    ⚙️ Where Filters Fit In

    When a request comes to your API, it passes through these steps:

    HTTP Request → Middleware → Filters → Controller → Action → Filters → Middleware → HTTP Response

    🧩 Types of Filters in ASP.NET Core
    Filter Type	                  Runs When	                            Common Use
    Authorization Filter	        Before anything else	                Check user permissions (Auth)
    Resource Filter	                Before model binding	                Caching, short-circuit logic
    Action Filter	                Before and after an action executes	  Logging, validation, timing
    Exception Filter	            When an exception occurs	            Custom error handling
    Result Filter	                Before and after result execution	    Modify response or headers

    Let’s create a simple Action Filter to log every request.

    Step 1: Create a Filter Class
    using Microsoft.AspNetCore.Mvc.Filters;
    using Microsoft.Extensions.Logging;

    public class LogActionFilter : IActionFilter
    {
        private readonly ILogger<LogActionFilter> _logger;

        public LogActionFilter(ILogger<LogActionFilter> logger)
        {
            _logger = logger;
        }

        public void OnActionExecuting(ActionExecutingContext context)
        {
            _logger.LogInformation($"➡️ Action {context.ActionDescriptor.DisplayName} starting...");
        }

        public void OnActionExecuted(ActionExecutedContext context)
        {
            _logger.LogInformation($"✅ Action {context.ActionDescriptor.DisplayName} finished.");
        }
    }

    Step 2: Register in Program.cs
    builder.Services.AddControllers(options =>
    {
        options.Filters.Add<LogActionFilter>(); // Global filter
    });

    Step 3: Or Apply at Controller/Action Level
    [ServiceFilter(typeof(LogActionFilter))] // or [TypeFilter(typeof(LogActionFilter))]
    [ApiController]
    [Route("api/[controller]")]
    public class EmployeeController : ControllerBase
    {
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            return Ok(new { Id = id, Name = "Khalid Akhter" });
        }
    }


    ✅ Now, whenever Get runs, logs will appear before and after the action.

    🧩 Example 2: Exception Filter

    Custom global error handler:

    public class CustomExceptionFilter : IExceptionFilter
    {
        private readonly ILogger<CustomExceptionFilter> _logger;

        public CustomExceptionFilter(ILogger<CustomExceptionFilter> logger)
        {
            _logger = logger;
        }

        public void OnException(ExceptionContext context)
        {
            _logger.LogError(context.Exception, "Unhandled Exception Occurred!");
            context.Result = new ObjectResult(new { Error = "Something went wrong." })
            {
                StatusCode = 500
            };
            context.ExceptionHandled = true;
        }
    }


    Register globally:

    builder.Services.AddControllers(options =>
    {
        options.Filters.Add<CustomExceptionFilter>();
    });

    🔁 Filter Execution Order

    1️⃣ Authorization filters
    2️⃣ Resource filters
    3️⃣ Action filters
    4️⃣ Result filters
    5️⃣ Exception filters (on errors)

    ✅ Summary
    Type	Interface	Purpose
    Authorization	IAuthorizationFilter	Access control
    Resource	IResourceFilter	Caching, short-circuiting
    Action	IActionFilter	Before/after action execution
    Exception	IExceptionFilter	Centralized error handling
    Result	IResultFilter	Before/after response formatting
    💡 Filters vs Middleware
    Middleware	Filter
    Works outside MVC pipeline	Works inside MVC pipeline
    Affects all requests	Affects controller/action level
    Common for cross-cutting (auth, logging)	MVC-specific (model binding, result formatting)


    Explain the Role of Action Filters in ASP.NET Core Web API.

    Action Filters in ASP.NET Core Web API are attributes that can be applied to 
    controller actions to perform cross-cutting concerns such as logging, authorization, 
    caching, validation, and exception handling. Action Filters allow developers to 
    encapsulate common logic that needs to be executed before or after an action method 
    is invoked. ASP.NET Core provides several built-in action filters, such as [Authorize] 
    for authorization, [ValidateAntiForgeryToken] for preventing CSRF attacks, and [ResponseCache] 
    for caching responses.

 
    Types of filters (authorization, action, result, resource, exception):

    Authorization filters: Control access to action methods. They run before
    other filters and can short-circuit the request if authorization fails.

    Action filters: Execute code before and after an action method is executed.
    They can be used for tasks like logging, caching, and input validation.

    Result filters: Execute code before and after an action result is executed.
    They can be used for tasks like modifying the response or logging the result. 
    
    Resource filters: Execute code before and after the execution of an
    action method, including model binding and action result execution. They are
    a combination of action filters and result filters. 
    
    Exception filters: Handle exceptions that occur during the execution of an action method. 
    They can be used to log exceptions or provide custom error responses.

    -----------------------------ACTION FILTER FROM InternAPI------------------------------------

            using InternAPI.Models;
            using Microsoft.AspNetCore.Mvc;
            using Microsoft.AspNetCore.Mvc.Filters;

            namespace InternAPI.Filters
            {
                public class ActionFilter : IActionFilter
                {
                    public void OnActionExecuted(ActionExecutedContext context)
                    {
                        Console.WriteLine("Action Filter has executed...");
                    }
                
                    public void OnActionExecuting(ActionExecutingContext context)
                    {

                        if (context.ActionArguments.ContainsKey("std"))
                        {
                            var student = context.ActionArguments["std"] as Student;

                            // Perform custom validation on the employee model
                            if (student == null)
                            {
                                context.Result = new BadRequestObjectResult("Student data is missing.");
                                return;
                            }

                            if (string.IsNullOrWhiteSpace(student.StudentName))
                            {
                                context.Result = new BadRequestObjectResult("Student name is required.");
                                return;
                            }

                            if (student.Age<0)
                            {
                                context.Result = new BadRequestObjectResult("Age must be +ve.");
                                return;
                            }

                            //if (employee.DateOfBirth == default || employee.DateOfBirth > DateTime.Now)
                            //{
                            //    context.Result = new BadRequestObjectResult("A valid date of birth is required.");
                            //    return;
                            //}
                        }

                        Console.WriteLine("Action Filter is executing....... .");
                    }
                }
            }

    -----------------------------RESULT FILTER FROM InternAPI------------------------------------

        using Azure;
        using InternAPI.Models;
        using Microsoft.AspNetCore.Http;
        using Microsoft.AspNetCore.Http.HttpResults;
        using Microsoft.AspNetCore.Mvc;
        using Microsoft.AspNetCore.Mvc.Filters;
        using Microsoft.Extensions.Hosting;
        using System.Diagnostics.Metrics;
        using System;
        namespace InternAPI.Filters
        {
            public class ResultFilter: IResultFilter
            {
                public void OnResultExecuting(ResultExecutingContext context)
                {
                    Console.WriteLine("Result Filter is executing");
                    
                    if (context.Result is OkObjectResult okResult)
                    {
                        // Modify the content of the OkObjectResult (the object being returned)
                        var originalData = okResult.Value;
                        

                        // Example: Modify the data (e.g., add a custom message or manipulate data)
                        if (originalData is string strData)
                        {
                            okResult.Value = strData.ToUpper(); // Modify string data to uppercase as an example
                        }
                        else if (originalData is List<Student> myModel)
                        {
                            myModel[0].StudentName = "Modified in ResultFilter"; // Modify a property of the model
                            myModel[0].Age = 88;
                            okResult.Value = myModel; // Set the modified model back to the result
                        }

                        // You can also add custom headers if needed
                        context.HttpContext.Response.Headers.Add("X-Modified-By", "ResultFilter");
                    }
                    Console.WriteLine("Result Filter is about to execute.");
                }

                public void OnResultExecuted(ResultExecutedContext context)
                {
            
                                var result = context.Result;

                    if (result is OkObjectResult objectResult2)
                    {
                        // Modify the result if it's an ObjectResult (most common for returning objects)
                        var originalValue = objectResult2.Value;
                            
                        List<Student> mObj= new List<Student>();
                        if (originalValue is List<Student> myModel)
                        {
                            myModel[0].StudentName = "Modified in ResultFilter4"; // Modify a property of the model
                            myModel[0].Age = 44;
                            mObj = myModel; // Set the modified model back to the result
                        }


                        // Example modification: wrap the original response value in a custom response object
                        objectResult2.Value = new
                        {
                            Success = true,
                            Data = mObj,
                            Message = "Request processed successfully9"
                        };
                    }

                    Console.WriteLine("Result Filter has been executed.");
                }
            }
        }
    





    `}
  </>
);

export default Filter;
