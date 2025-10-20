const Test = (
  <>
    <span style={{ color: "red", fontWeight: "bold" }}>How to decorate </span>
    <span style={{ textDecoration: "underline", color: "green" }}>
      the text
    </span>
    i.e. Bold Underline color etc
    <br />
    <img src="/dotnet/Repository.jpg" width="100%"></img>
    <br />
    {`Register All Customer in program.cs
            builder.Services.AddSingleton<ICustomer GoldCustomer>();
            builder.Services.AddSingleton<ICustomer SilverCustomer>();
            builder.Services.AddSingleton<CustomerResolver>();
    4. Create CustomerResolver using DI
    private readonly IEnumeriable<ICustomer> _customers;
    5. In Controller
        private readonly CustomerResolver _customerResolver;

    --------------------------IMPLEMENTATION---------------------------

    public interface ICustomer{
        string Name {get;}
        decimal GetDiscount(decimal amount);
    }

    public class GoldCustomer: ICustomer
    {
        public string Name=> "Gold";
        public string Name {
        get{ return("Gold");};
    } `}
  </>
);
export default Test;
