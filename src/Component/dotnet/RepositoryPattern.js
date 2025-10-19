
    const RepositoryPattern =`
    ------------------------REPOSITORY PATTERN----------------------

    A. Under Domain Folder 
    1. Create class/entity: Customer (Under Enity Folder)
    2. Interface for Repository ICustomerReposity (Under Interface Folder)

    B. Under Application Folder
    3. Create Service Class using DI ICustomerReposity.

    C. Under Infrastructure Folder
    4. Implement ICustomerRepositoy as CustomerRepository

    D. Scaffol-DbContext 
    5. Cut the connection String and update the Appsetting.json

    E. Register 
    6. <ICustomerRepositoy CustomerRepository>();
        AddDBContext

    1. Create Customer Class:
    -------------------------
    public class Customer
    {
    public string FirstName;
    public string LastName;
    public string AadharNumber;
    }

    2. Create ICustomerRepository Interface:
    ----------------------------------------
    public interface ICustomerRepository
    {
    IEnumeriable<Customer> GetAll();
    Customer GetByID(int id)
    void AddCustomer(Customer customer)
    void DeleteCustomer(int id);
    void UpdateCustomer(Customer customer)
    }

    3. Create Customer Service
    public class CustomerService{

    private readonly ICustomerRepository _customerRepository;

    public CustomerService(ICustomerRepository customerRepository)
    {
        _customerRepository=customerRepository
    }

    public IEnumeriable<Customer> GetAllCustomer()
    {
        return(_customerRepository.GetAll());
    }
    
    public Customer GetCustomer(id int)
    {
        return _customerRepository.GetByID(id);
    }
    public void DeleteCustomer(id)
    {
        _customerRepository.DeleteCustomer(id);
    }

    public void UpdateCustomer(Customer customer)
    {
        _customerRepository.UpdateCustomer(customer); 
    }

    public void AddCustomer(Customer customer)
     {
        _customerRepository.AddCustomer(customer)
     }


    }

    4. Infrstructure
    public class CustomerRepository:ICustomerRepository
    {
        private readonly DBContext _db;
        public CustomerRepository(DBContext db)
        {
        _db=db;
        }
    
        public IEnumeriable<Customer>GetAll()
        {
            return _db.tblCustomer;
        }
    
        public Customer GetByID(int id)
        {
            return _db.tblCustomer.Find(id);
        }

        public void AddCustomer(Customer customer)
        {
            _db.tblCustomer.Add(customer);
            _db.SaveChanges();
        }

        public void DeleteCustomer(int id)
        {
            _db.tblCustomer.Remove(id);
            _db.SaveChanges();
        }

        public void UpdateCustomer(Customer customer)
        {
            _db.tblCustomer.Update(customer);
            _db.SaveChanges();
        }
    }

    Controller using CustomerService DI
    -----------

    public class CustomerController: ControllerBase
    {
    
    private readonly CustomerService _cs;

    public CustomerController(CustomerService cs)
    {
        _cs = cs;
    }
    
    [HttpGet]
    public IActionResult GetAllCustomer()
    {
        return Ok(_cs.GetAll);
    }
    
    [HttpGet{(id)}]

    public IActionResult GetById(int id)
    {
        return Ok(_cs.GetCustomerByID(id))
    }
    [HttpPost]

    public IActionResult AddCustomer(Customer customer)
    {
        _cs.AddCustomer(customer);
        return Ok("Customer Added Successfully);
    }

    [HttpDelete]
    public IActionResult DeleteCustomer(int id)
    {
       _cs.DeleteCustomer(id);
       return Ok("Customer Deleted");
    }

    [HttpPut]
    public IActionResult UpdateCustomer(Customer customer)
    {
        _cs.UpdateCustomer(customer);
        return Ok("Customer Updated");
    }
    
    }

    In progrgram.cs
    ----------------
    Register IOC:
    builder.Services.AddScoped<ICustomerRepository CustomerRepository>();
    builder.Services.AddScoped<CustomerService>();
    builder.Services.AddDBContext<MyDBContext>(option=> option.UserSqlServer(builder.Configuration.GetConnectionStrin("conn")));

   In AppSetting.json
   ------------------
     "ConnectionStrings": { "conn": "Server=IN-3LDLV64;Database=FamilyDB;User Id=sa; Password=sa;Encrypt=False" }






    `;

    export default RepositoryPattern;