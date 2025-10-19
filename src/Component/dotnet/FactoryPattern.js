
const FactoryPattern = `
    ------------------------FACTORY PATTERN---------------------

1. Create interface ICustomer;
2. Implement different Customer inherits from ICustomer;

   get Customer Class as per customer name input.
3. Register All Customer in program.cs
        builder.Services.AddSingleton<ICustomer GoldCustomer>();
        builder.Services.AddSingleton<ICustomer SilverCustomer>();
        builder.Services.AddSingleton<CustomerResolver>();
4. Create CustomerResolver using DI
   private readonly IEnumeriable<ICustomer> _customers;
5. In Controller
   private readonly CustomerResolver _customerResolver;

    public interface ICustomer{
        string Name {get;}
        decimal GetDiscount(decimal amount);
    }

    public class GoldCustomer: ICustomer
    {
        public string Name=> "Gold";
        public string Name {
        get{ return("Gold");};
    }

    public class GetDiscount(decimal amount)
    {
        return (amount * 10 /100);
    }

    public class SilverCustomer: ICustomer
    {

        public string Name=> "Silver";
        public string Name {
        get{ return("Silver");};
    }

    public class GetDiscount(decimal amount)
    {
        return (amount * 5 /100);
    }

    In program.cs
    -------------

        builder.Services.AddSingleton<ICustomer GoldCustomer>();
        builder.Services.AddSingleton<ICustomer SilverCustomer>();
        builder.Services.AddSingleton<CustomerResolver>();

    public class CustomerResolver
    {
      private readonly IEnumeriable<ICustomer> _customers;
      public CustomerResolver (IEnumeriable<ICustomer> customers)
      {
        _customers = customers;
        }

        public ICustomer GetCustomer(string customerName)
        {
          foreach(ICustomer customer in _customers)
          {
            if (customer.Name== customerName)
                return customer;
          }
          
            through new ArgumentException($"Customer : '{customerName}' not found");
        }
    }

    In Controller
    --------------

    public class CustomerController: ControllerBase
    {

      private readonly CustomerResolver _customerResolver;

      public CustomerController(CustomerResolver customerResolver)

    {
        _customerResolver= customerResolver;
    }

    [HttpGet]
    public IActionResult GetCustomerDetails(string customerName, decimal totalAmount)
    {
        try(
            var customer = _customerResolver(customerName);
            decimal discountAmount = customer.GetDiscount(totalAmount);
            return ok(
                      new {CustomerDiscount = discountAmount, CustomerName=customer.Name };
                    )
            )
        catch(ArgumentException ae)
          {
            return BadRequest("Error: " + ae);
          }
        catch( Exception ex)
        {
            return BadRequest("Error: " + ex);
        }
    }
}
`;
export default FactoryPattern;
