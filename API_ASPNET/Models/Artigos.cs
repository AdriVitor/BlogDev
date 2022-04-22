namespace Artigos.Models;

public class Artigo {
    // public Artigo(string titulo, string titleTopico1, string topico1, string titleTopico2, string topico2, string titleTopico3, string topico3)
    // {
    //     Titulo = titulo;
    //     TitleTopico1 = titleTopico1;
    //     Topico1 = topico1;
    //     TitleTopico2 = titleTopico2;
    //     Topico2 = topico2;
    //     TitleTopico3 = titleTopico3;
    //     Topico3 = topico3;
    // }

    // [Id] INT NOT NULL IDENTITY(1, 1),
    // [Titulo] NVARCHAR(25) NOT NULL,
    // [TitleTopico1] NVARCHAR(40),
    // [Topico1] TEXT,
    // [TitleTopico2] NVARCHAR(40),
    // [Topico2] TEXT,
    // [TitleTopico3] NVARCHAR(40),
    // [Topico3] TEXT

    public int Id { get; set; }
    public string Titulo { get; set; }
    public string TitleTopico1 { get; set; }
    public string Topico1 { get; set; }
    public string TitleTopico2 { get; set; }
    public string Topico2 { get; set; }
    public string TitleTopico3 { get; set; }
    public string Topico3 { get; set; }

}