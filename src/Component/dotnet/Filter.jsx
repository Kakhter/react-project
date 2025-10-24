const Filter = (
  <>
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
    Resource Filter	              Before model binding	                Caching, short-circuit logic
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
    `}
  </>
);

export default Filter;
