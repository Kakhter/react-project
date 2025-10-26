const EF = (
  <>
    <div style={{ textAlign: "left", marginLeft: "3%" }}>
      <h2>Entity Framework EF</h2>
    </div>
    {`
    Step 1:

    Required to install:
    Microsoft.EntityFrameCore.SqlServer
    Microsoft.EnityFrameCore.Design 
    Microsoft.EntityFrameCore.Tool
    
    Step2: run the command using Package Manager Console.

    PM> Scaffold-DBContext "Server=IN-3LDLV64;Database=FamilyDB;User Id=sa;
    Password=sa;Encrypt=False" Microsoft.EntityFrameworkCore.SqlServer
    -OutputDir Models -Context FamilyDbContext -Force
  
    Step 3: Update AppSetting.json (Cut from DBContext Class from OnConfigure Method)

    "ConnectionStrings": {
      "dbcs": "Server=IN-3LDLV64;Database=Test;User Id=sa; Password=sa;Encrypt=False;"
    },

    Step 4: Register the DBContext in program.cs

     builder.Services.AddDbContext<FamilyDbContext>(item => item.UseSqlServer(builder.Configuration.GetConnectionString("dbcs")));
    
    Step 5: Use in Controller using DI
     
    private readonly FamilyDbContext _db
    Do the custructor DI

    Step 6:
      In IActionResult (Async)

      var data = await _db.Member.ToList()
      [HttpDelete]
      public async Task<IActionResult> Delete(int id)
      {
          var data = await unitOfWork.Products.DeleteAsync(id);
          return Ok(data);
      }


    `}
  </>
);

export default EF;
