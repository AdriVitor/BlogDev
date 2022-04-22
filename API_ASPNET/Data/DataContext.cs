using Artigos.Models;
using Microsoft.EntityFrameworkCore;

namespace AppDataContext;

public class AppDbContext : DbContext {
    public DbSet<Artigo> Artigos { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder options){
        options.UseSqlServer(@"Server=DESKTOP-H7797U1\SQLEXPRESS;
                             Database=DevBlog;
                             Integrated Security=True;
                             Encrypt=False");
    }
}