const Email = (
  <>
    {`
    
    🧩 Step 1: Interface

        File: Services/Email/IMailService.cs

        namespace MyApp.Services.Email
        {
            public interface IMailService
            {
                Task SendEmailAsync(string to, string subject, string body);
            }
        }

        🧩 Step 2: Configuration in appsettings.json

        Add your mail settings under "SmtpSettings":

        "SmtpSettings": {
        "Host": "smtp.gmail.com",
        "Port": 587,
        "EnableSsl": true,
        "UserName": "youraddress@gmail.com",
        "Password": "your-app-password",
        "From": "youraddress@gmail.com"
        }


        ⚠️ Note:

        For Gmail, you need to create an App Password (not your regular password) from your Google account.

        For Outlook/Office365, use "Host": "smtp.office365.com", "Port": 587.

        🧩 Step 3: Implementation

        File: Services/Email/MailService.cs

        using Microsoft.Extensions.Configuration;
        using System.Net;
        using System.Net.Mail;
        using System.Threading.Tasks;

        namespace MyApp.Services.Email
        {
            public class MailService : IMailService
            {
                private readonly IConfiguration _configuration;

                public MailService(IConfiguration configuration)
                {
                    _configuration = configuration;
                }

                public async Task SendEmailAsync(string to, string subject, string body)
                {
                    var smtpSection = _configuration.GetSection("SmtpSettings");
                    var host = smtpSection["Host"];
                    var port = int.Parse(smtpSection["Port"]);
                    var enableSsl = bool.Parse(smtpSection["EnableSsl"]);
                    var username = smtpSection["UserName"];
                    var password = smtpSection["Password"];
                    var from = smtpSection["From"];

                    using var smtp = new SmtpClient(host)
                    {
                        Port = port,
                        EnableSsl = enableSsl,
                        Credentials = new NetworkCredential(username, password)
                    };

                    using var message = new MailMessage
                    {
                        From = new MailAddress(from, "MyApp Notifications"),
                        Subject = subject,
                        Body = body,
                        IsBodyHtml = true
                    };

                    message.To.Add(to);

                    await smtp.SendMailAsync(message);
                }
            }
        }


        ✅ Key points

        Uses System.Net.Mail namespace.

        Reads SMTP settings from configuration.

        Supports HTML body (IsBodyHtml = true).

        Uses async sending (SendMailAsync).

        🧩 Step 4: Register in Program.cs
        using MyApp.Services.Email;

        var builder = WebApplication.CreateBuilder(args);

        // Register services
        builder.Services.AddScoped<IMailService, MailService>();

        builder.Services.AddControllers();

        var app = builder.Build();

        app.MapControllers();

        app.Run();

        🧩 Step 5: Create Controller for Testing

        File: Controllers/EmailController.cs

        using Microsoft.AspNetCore.Mvc;
        using MyApp.Services.Email;

        namespace MyApp.Controllers
        {
            [ApiController]
            [Route("api/[controller]")]
            public class EmailController : ControllerBase
            {
                private readonly IMailService _mailService;

                public EmailController(IMailService mailService)
                {
                    _mailService = mailService;
                }

                [HttpPost("send")]
                public async Task<IActionResult> Send([FromQuery] string to)
                {
                    string subject = "Welcome to MyApp!";
                    string body = "<h2>Hello!</h2><p>This is a test email from MyApp.</p>";

                    await _mailService.SendEmailAsync(to, subject, body);
                    return Ok($"Email sent to {to}");
                }
            }
        }


        ✅ Test endpoint:

        POST https://localhost:5001/api/email/send?to=someone@example.com
    
    
    `}
  </>
);

export default Email;
