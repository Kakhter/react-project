import React from 'react';

const Cqrs = () => {

    return (
        <>
            <h1>CQRS</h1>
            <div className="code_css">
                <pre>
                    <code> {`
        CQRS separates Read and Write operations. In .NET Core, Commands and Queries implement IRequest<T>, 
        business logic resides in IRequestHandler, and communication between Controller and Handler is 
        done through MediatR.

        IRequest

        Represents a Command or Query message sent through MediatR. It defines what data is being requested 
        and the expected response type.

        IRequestHandler

        Contains the business logic to process an IRequest. MediatR automatically routes a request to its 
        corresponding handler and returns the response.

        Think of MediatR as a post office.

        IRequest = Letter (request/message)
        IRequestHandler = Postman who processes the letter
        Mediator.Send() = Sending the letter through the post office


        Example Flow:

                Controller
                    |
                    | _mediator.Send(new GetEmployeeQuery(10))
                    |
                    v
                GetEmployeeQuery (IRequest<EmployeeDto>)
                    |
                    v
                GetEmployeeQueryHandler
                (IRequestHandler<GetEmployeeQuery, EmployeeDto>)
                    |
                    v
                Repository
                    |
                    v
                Database
                    |
                    v
                EmployeeDto
                    |
                    v
                Controller

        Code Example:

        Register MediatR in Program.cs:
        
            builder.Services.AddMediatR(cfg =>
            {
                cfg.RegisterServicesFromAssembly(
                    typeof(Program).Assembly);
            });



        1. Create Command         

        public record CreateProductCommand(
                string Name,
                decimal Price
            ) : IRequest<int>;

        2. Create Command Handler:

            public class CreateProductHandler
                : IRequestHandler<CreateProductCommand, int>
            {
                private readonly IProductRepository _repository;

                public CreateProductHandler(IProductRepository repository)
                {
                    _repository = repository;
                }

                public async Task<int> Handle(
                    CreateProductCommand request,
                    CancellationToken cancellationToken)
                {
                    var product = new Product
                    {
                        Name = request.Name,
                        Price = request.Price
                    };

                    await _repository.AddAsync(product);

                    return product.Id;
                }
            }

            3. Call MediatR from Controller:

            [HttpPost]
            public async Task<IActionResult> Create(
                CreateProductCommand command)
            {
                var id = await _mediator.Send(command);

                return Ok(id);
            }

        -------------------------------------------------------------
        Same for Query:

        1. Create Query:

            public record GetProductByIdQuery(int Id)
            : IRequest<ProductDto>;
                
        2. Create Query Handler:                

            public class GetProductByIdHandler
                : IRequestHandler<GetProductByIdQuery, ProductDto>
            {
                private readonly IProductRepository _repository;

                public GetProductByIdHandler(
                    IProductRepository repository)
                {
                    _repository = repository;
                }

                public async Task<ProductDto> Handle(
                    GetProductByIdQuery request,
                    CancellationToken cancellationToken)
                {
                    var product =
                        await _repository.GetByIdAsync(request.Id);

                    return new ProductDto
                    {
                        Id = product.Id,
                        Name = product.Name
                    };
                }
            }

        3. Call MediatR from Controller:

                [HttpGet("{id}")]
                public async Task<IActionResult> Get(int id)
                {
                    var result = await _mediator.Send(
                        new GetProductByIdQuery(id));

                    return Ok(result);
                }
                         `}

                    </code>
                </pre>

            </div>
        </>
    )
}
export default Cqrs;




