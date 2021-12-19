using System.Collections.Generic;
using System.Threading.Tasks;
using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProductsController : ControllerBase
    {
        private readonly StoreContext _context;
        public ProductsController(StoreContext context)
        {
            _context = context;
        }
        [HttpGet]
        public async Task<ActionResult<List<Product>>> GetProducts() => await _context.Products.ToListAsync();


        // so that when someone makes a request from api/products/3 and 3 
        // represents the Id passed in from the root parameter
       [HttpGet("{id}")] 
       public async Task<ActionResult<Product>> GetProducts(int id) => await _context.Products.FindAsync(id);

    }
}