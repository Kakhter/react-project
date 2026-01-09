const Caching = (
  <>
    {`
   -------------------- Caching/Refresh Caching ------------------------------


    🚀 1️⃣ What is Caching?

    Caching means temporarily storing data (in memory or on disk) so that future requests for the same data can be served faster without re-fetching from the database or external source.
    In short:
    “Don’t hit the database if you already have the same data in memory.”

    ⚙️ 2️⃣ Why Caching is Needed

    Improves performance (faster response time).
    Reduces database load.
    Reduces latency.
    Improves scalability.

    🧠 3️⃣ Types of Caching in .NET Core API
    Type	Description	Example
    In-Memory Caching	Stores data in memory (RAM) of the current server instance.	IMemoryCache
    Distributed Caching	Stores data in an external cache store (shared across multiple servers).	IDistributedCache (e.g., Redis, SQL Server)
    Response Caching	Caches full HTTP responses for GET requests.	[ResponseCache] attribute
    Output Caching (ASP.NET Core 7+)	More advanced version of Response Caching with more control.	[OutputCache] attribute


    Caching: 
    Caching means temporarily storing data (in memory or on disk) so that future 
    requests for the same data can be served faster without re-fetching from the 
    database or external source.
  
    In short:
    “Don’t hit the database if you already have the same data in memory.”
  
    Improves performance (faster response time).
    Reduces database load.
    Reduces latency.
    Improves scalability.

    Example: In-Memory Caching

    builder.Services.AddMemoryCache();

    using Microsoft.Extensions.Caching.Memory;
    using Microsoft.AspNetCore.Mvc;

    [ApiController]
    [Route("api/[controller]")]
    public class ProductController : ControllerBase
    {
        private readonly IMemoryCache _cache;
        public ProductController(IMemoryCache cache)
        {
            _cache = cache;
        }

        [HttpGet("{id}")]
        public IActionResult GetProduct(int id)
        {

        `}

    <span className="highlightText">
      string cacheKey = $"product_5id6"; 5-open curly, 6 for close curly <br />
    </span>
    <span className="highlightText">
      if (!_cache.TryGetValue(cacheKey, out string product))
    </span>
    {`

            {
                // Simulate fetching from database
                product = $"Product details for ID: {id}";

                // Set cache with expiration
                var cacheOptions = new MemoryCacheEntryOptions()
                    .SetSlidingExpiration(TimeSpan.FromMinutes(2))
                    .SetAbsoluteExpiration(TimeSpan.FromMinutes(5));

                _cache.Set(cacheKey, product, cacheOptions);
            }

            return Ok(product);
        }
    }
    `}
    🧩 Explanation: <br/><br/>

    <div style={{marginLeft: "10%", background:"black", color:"white", width: "60%" , padding:"3%" }}>
<br/>
      private readonly IMemoryCache _cache; <br/><br/>

     _cache.TryGetValue() → checks if data exists in cache. <br/><br/>

      _cache.Set() → stores data with expiration policy. <br/><br/>

      SlidingExpiration → resets the timer each time it’s accessed. <br/><br/>
      AbsoluteExpiration → removes after fixed duration no matter what.<br/> <br/>
      
      _cache.Remove(cacheKey);<br/><br/>
    </div>

  

   {`
--------------------------------------------------------------------------
    🧠 Example: Manual Cache Refresh
    [HttpPost("update/{id}")]
    public IActionResult UpdateProduct(int id, [FromBody] string newData)
    {
        // Update in database (simulated)
        string updatedData = $"Updated product {id}: {newData}";

        // Remove old cache entry
        string cacheKey = $"product_{id}";
        _cache.Remove(cacheKey);

        // Optionally refresh cache immediately
        _cache.Set(cacheKey, updatedData, TimeSpan.FromMinutes(5));

        return Ok("Cache refreshed successfully!");
    }


    ✅ This ensures that whenever data changes, your cache is refreshed.

    1️⃣ SetSlidingExpiration(TimeSpan.FromMinutes(2))
    👉 Meaning:

    The cached item will expire if it has not been accessed for 2 minutes.

    🧠 Think of it like:

    “As long as someone keeps using me, I’ll stay alive. But if no one uses me for 2 minutes, remove me.”

    Example:

    Cache item added at 10:00 AM
    Someone accesses it at 10:01 AM, so the timer resets.
    Another access at 10:02:30 AM, timer resets again.
    If no one accesses it by 10:04:30 AM, the item expires and is removed.
    So the expiration time “slides” forward every time the data is used — hence the name sliding expiration.

  
  `}
  </>
);

export default Caching;
