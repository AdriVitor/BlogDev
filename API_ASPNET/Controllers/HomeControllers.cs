using AppDataContext;
using Artigos.Models;
using Microsoft.AspNetCore.Mvc;

namespace Todo.Controllers;

    [ApiController]
    public class HomeController : ControllerBase{

        [HttpGet("/{id:int}")]
        public List<Artigo> GetById([FromRoute] int id, [FromServices] AppDbContext context){
            // return context.Artigos.FirstOrDefault(x=>x.Id == id);
            var artigoId = context.Artigos.FirstOrDefault(x=>x.Id == id);
            List<Artigo> ListArtigosId = new List<Artigo>();
            ListArtigosId.Add(artigoId);
            return ListArtigosId;
            
        }
    }
