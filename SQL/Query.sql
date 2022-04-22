CREATE TABLE Artigos (
    [Id] INT NOT NULL IDENTITY(1, 1),
    [Titulo] NVARCHAR(25) NOT NULL,
    [TitleTopico1] NVARCHAR(40),
    [Topico1] TEXT,
    [TitleTopico2] NVARCHAR(40),
    [Topico2] TEXT,
    [TitleTopico3] NVARCHAR(40),
    [Topico3] TEXT
);

INSERT INTO [Artigos](Titulo, TitleTopico1,Topico1,TitleTopico2,Topico2,TitleTopico3,Topico3) 
VALUES('JavaScript',
'O que é',
'Javascript, ou simplesmente JS,é uma linguagem de programação de uso geral, aplicada principalmente para desenvolvimento web e desenvolvimento de software. Especificando mais, o Javascript atua na programação front-end, a parte “visual” de uma aplicação (geralmente um site ou um app). Neste caso, o Javascript é usado junto com outras duas linguagens iniciais, o HTML e CSS',
'Como Funciona',
'O JavaScript é geralmente um código simplesmente agregado em uma página ou um arquivo .js externo que é inserido em um domínio através de um upload de arquivo. JS é uma linguagem criada para servir ao usuário, o que significa que o script dela é baixado na máquina dos visitantes e processado lá mesmo.',
'Como surgiu',
'A linguagem de programação JavaScript foi criada em 1995 por Brandan Eich, um especialista em sistemas para computadores da Netscape. No início, a ferramenta era chamada de Mocha, recebendo também nomes como Mona e LiveScript antes de ter a nomenclatura atual. As primeiras versões do JavaScript eram de uso exclusivo da Netscape, e com funções bastante limitadas. Ainda assim, ela continuou crescendo por conta de trabalhos independentes de uma comunidade de desenvolvedores'
);

INSERT INTO [Artigos](Titulo, TitleTopico1,Topico1,TitleTopico2,Topico2,TitleTopico3,Topico3) 
VALUES(
    'React',
    'O que é',
    'O React é uma biblioteca JavaScript de código aberto com foco em criar interfaces de usuário em páginas web. É mantido pelo Facebook, Instagram, outras empresas e uma comunidade de desenvolvedores individuais. É utilizado nos sites da Netflix, Imgur, Feedly, Airbnb, SeatGeek, HelloSign, Walmart e outros.',
    'Como Funciona',
    'O React é uma biblioteca front-end e tem como um de seus objetivos facilitar a conexão entre diferentes partes de uma página, portanto seu funcionamento acontece através do que chamamos de componentes.
    Em outras palavras, podemos imaginar que o React divide uma tela em diversos componentes para, então, trabalhar sobre eles de maneira individual.
    Os componentes são utilizados para reaproveitamento de código e padronização de interface.',
    'Como surgiu',
    'Em 2012 Mark Zuckerberg comentou, “O maior erro que cometemos como empresa foi apostar demais em HTML5 em oposição ao nativo“. Ele prometeu que o Facebook logo entregaria uma melhor experiência móvel.
    Dentro do Facebook, Jordan Walke encontrou uma maneira de gerar elementos de interface do usuário para iOS a partir de um thread JavaScript em segundo plano.
    Eles decidiram organizar um Hackathon interno para aperfeiçoar esse protótipo para poder criar aplicativos nativos com essa tecnologia.
    Após meses de desenvolvimento, o Facebook lançou a primeira versão do React em 2015. Durante uma palestra técnica, Christopher Chedeau explicou que o Facebook já estava usando o React Native em produção.'
);

INSERT INTO [Artigos](Titulo, TitleTopico1,Topico1,TitleTopico2,Topico2,TitleTopico3,Topico3) 
VALUES(
    'Angular',
    'O que é',
    'Angular é uma plataforma de aplicações web de código-fonte aberto e front-end baseado em TypeScript liderado pela Equipe Angular do Google e por uma comunidade de indivíduos e corporações. Angular é uma reescrita completa do AngularJS, feito pela mesma equipe que o construiu.',
    'Como Funciona',
    'O Angular é um framework utilizado para a criação de Single-Page Applications (SPA), que é uma aplicação web consumida em uma única página. Umaforma de explicar como a SPA funciona é comparando o seu processamento com o de uma aplicação web comum.
    Quando uma página comum é carregada e a pessoa usuária faz qualquer solicitação de atualização de dados, como uma busca por produto, o navegador faz uma requisição ao servidor para processar essa busca e retornar os dados solicitados. Nesse momento, então, é feito o recarregamento de toda a página. Em uma página SPA toda essa comunicação é feita de uma forma mais dinâmica.',
    'Como surgiu',
    'No ano de 2009 o cientista da computação, Misko Hevery, que é parte dos desenvolvedores da Google, procurava ajudar a empresa superar os problemas enfrentados e então, criou o AngularJs. A primeira versão framework da ferramenta foi construída sob o padrão model-view-view-model (MVVM), quer dizer todo aproveitamento de dados para facilitar o desenvolvimento e testes de aplicativos. Em 2016 criada a segunda versão, reescrita pela equipe Google, o Angular 2 adota a linguagem TypeScript, o que permite projetos melhores estruturados e mais fáceis de manter.'
);

INSERT INTO [Artigos](Titulo, TitleTopico1,Topico1,TitleTopico2,Topico2,TitleTopico3,Topico3) 
VALUES(
    'Vue.js',
    'O que é',
    'Vue é um framework progressivo para a construção de interfaces de usuário. Ao contrário de outros frameworks monolíticos, Vue foi projetado desde sua concepção para ser adotável incrementalmente. A biblioteca principal é focada exclusivamente na camada visual (view layer), sendo fácil adotar e integrar com outras bibliotecas ou projetos existentes. Por outro lado, Vue também é perfeitamente capaz de dar poder a sofisticadas Single-Page Applications quando usado em conjunto com ferramentas modernas e bibliotecas de apoio.',
    'Como Funciona',
    'Aplicações que utilizam Vue são constituídas de componentes criados com a sintaxe HTML, CSS e Javascript em um único arquivo .vue, que facilitam o isolamento e a manutenção de funcionalidades. 
    Cada componente constitui um escopo isolado dos demais, tanto em lógica quantos nos estilos.
    A renderização dos dados é feita baseada em uma virtual DOM que é atualizada apenas quando os dados de um componentes são alterados, aumentando o desempenho e descartando atualizações desnecessárias.',
    'Como surgiu',
    'Oficialmente a biblioteca foi lançada em 2014, foi criado por Evan You enquanto ele trabalhava no Google. Depois de trabalhar com AngularJS (a primeira versão do Angular) em vários projetos dentro do Google ele decidiu pegar os conceitos do que ele mais gostava do Angular, e criar uma versão mais leve e sem muita coisa extra que o Angular tinha.'
);