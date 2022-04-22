using AppDataContext;
using Artigos.Models;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddControllers();
builder.Services.AddDbContext<AppDbContext>();
builder.Services.AddCors();


var app = builder.Build();
app.MapControllers();

app.UseCors(c => {
    c.AllowAnyHeader();
    c.AllowAnyMethod();
    c.AllowAnyOrigin();
});

// app.MapGet("/", () => "Hello World!");

// app.MapGet("/{id:int}", (int id, DataContext context) => 
//             return context.Artigo
//             "JavaScript",
//             "O que é",
//             "Javascript, ou simplesmente JS, é uma linguagem de programação de uso geral, aplicada principalmente para desenvolvimento web e desenvolvimento de software. Especificando mais, o Javascript atua na programação front-end, a parte “visual” de uma aplicação (geralmente um site ou um app). Neste caso, o Javascript é usado junto com outras duas linguagens iniciais, o HTML e CSS.",
//             "Como Funciona",
//             "O JavaScript é geralmente um código simplesmente agregado em uma página ou um arquivo .js externo que é inserido em um domínio através de um upload de arquivo. JS é uma linguagem criada para servir ao usuário, o que significa que o script dela é baixado na máquina dos visitantes e processado lá mesmo.",
//             "Como surgiu",
//             "A linguagem de programação JavaScript foi criada em 1995 por Brandan Eich, um especialista em sistemas para computadores da Netscape. No início, a ferramenta era chamada de Mocha, recebendo também nomes como Mona e LiveScript antes de ter a nomenclatura atual. As primeiras versões do JavaScript eram de uso exclusivo da Netscape, e com funções bastante limitadas. Ainda assim, ela continuou crescendo por conta de trabalhos independentes de uma comunidade de desenvolvedores"
            

            
// );

app.Run();
