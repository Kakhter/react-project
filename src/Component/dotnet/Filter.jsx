const Filter = (
  <>
    {`
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
