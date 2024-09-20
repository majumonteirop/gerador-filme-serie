const filmes = {
    netflix: [
        { titulo: "Stranger Things", sinopse: "Um grupo de crianças enfrenta fenômenos sobrenaturais em sua cidade.", genero: "Ficção Científica" },
        { titulo: "The Crown", sinopse: "A história do reinado da Rainha Elizabeth II.", genero: "Drama" },
        { titulo: "O Irlandês", sinopse: "Um matador da máfia reflete sobre sua vida e suas escolhas.", genero: "Crime" },
        { titulo: "Bird Box", sinopse: "Uma mãe luta para proteger seus filhos em um mundo pós-apocalíptico.", genero: "Terror" },
        { titulo: "La Casa de Papel", sinopse: "Um grupo de criminosos planeja o maior assalto da história.", genero: "Suspense" },
        { titulo: "13 Reasons Why", sinopse: "A história de uma jovem que deixou fitas explicando seu suicídio.", genero: "Drama" },
        { titulo: "The Witcher", sinopse: "Um caçador de monstros navega por um mundo em constante mudança.", genero: "Fantasia" },
        { titulo: "Narcos", sinopse: "A ascensão e queda de Pablo Escobar e do Cartel de Medellín.", genero: "Crime" },
        { titulo: "Ozark", sinopse: "Um consultor financeiro se muda para os Ozarks após um esquema de lavagem de dinheiro dar errado.", genero: "Drama" },
        { titulo: "The Queen's Gambit", sinopse: "Uma prodígio do xadrez enfrenta desafios em sua vida e carreira.", genero: "Drama" },
        { titulo: "Bridgerton", sinopse: "Uma família aristocrática navega pelos desafios sociais da Regência britânica.", genero: "Romance" },
        { titulo: "Money Heist", sinopse: "Um grupo de assaltantes tenta executar o maior roubo da história da Espanha.", genero: "Ação" },
        { titulo: "Shadow and Bone", sinopse: "Uma jovem descobre um poder que pode unir seu mundo.", genero: "Fantasia" },
        { titulo: "BoJack Horseman", sinopse: "Um cavalo ator em recuperação lida com seus demônios pessoais.", genero: "Animação" },
        { titulo: "Sex Education", sinopse: "Um adolescente cria uma clínica de terapia sexual na escola.", genero: "Comédia" },
        { titulo: "The Umbrella Academy", sinopse: "Uma família de super-heróis desfuncionais se reúne após a morte de seu pai.", genero: "Ação" },
        { titulo: "Squid Game", sinopse: "Jogadores endividados competem em jogos mortais por um prêmio em dinheiro.", genero: "Suspense" },
        { titulo: "Lucifer", sinopse: "O Diabo se aposentou e decidiu abrir um bar em Los Angeles.", genero: "Fantasia" },
        { titulo: "The Haunting of Hill House", sinopse: "Uma família enfrenta os traumas de sua infância em uma casa assombrada.", genero: "Terror" },
        { titulo: "The Midnight Gospel", sinopse: "Um apresentador de podcast explora mundos bizarros e filosóficos.", genero: "Animação" },
        { titulo: "Dead to Me", sinopse: "Duas mulheres formam uma amizade inesperada após uma tragédia.", genero: "Comédia" },
        
    ],
    hbo: [
        { titulo: "Game of Thrones", sinopse: "Nobres famílias lutam pelo controle do Trono de Ferro.", genero: "Fantasia" },
        { titulo: "Chernobyl", sinopse: "A história do desastre nuclear em 1986.", genero: "Drama" },
        { titulo: "Succession", sinopse: "Uma poderosa família enfrenta conflitos internos em um império da mídia.", genero: "Drama" },
        { titulo: "Mare of Easttown", sinopse: "Uma detetive investiga um crime em sua cidade natal.", genero: "Mistério" },
        { titulo: "Watchmen", sinopse: "Uma reinterpretação da famosa história em quadrinhos sobre vigilantes.", genero: "Ação" },
        { titulo: "Westworld", sinopse: "Um parque temático futurista onde os robôs ganham consciência.", genero: "Ficção Científica" },
        { titulo: "Big Little Lies", sinopse: "A vida de mães de uma cidade rica é desvendada após um assassinato.", genero: "Drama" },
        { titulo: "The Sopranos", sinopse: "Um chefe da máfia enfrenta desafios em sua vida pessoal e profissional.", genero: "Crime" },
        { titulo: "True Detective", sinopse: "Detetives lidam com casos complexos em diferentes épocas.", genero: "Mistério" },
        { titulo: "The Outsider", sinopse: "Um detetive investiga um assassinato que desafia a lógica.", genero: "Suspense" },
        { titulo: "Euphoria", sinopse: "Um grupo de adolescentes lida com questões de identidade e vícios.", genero: "Drama" },
        { titulo: "Barry", sinopse: "Um assassino se torna ator em busca de uma nova vida.", genero: "Comédia" },
        { titulo: "Insecure", sinopse: "Duas amigas lidam com relacionamentos e questões de identidade.", genero: "Comédia" },
        { titulo: "Lovecraft Country", sinopse: "Uma mistura de horror e racismo nos anos 50.", genero: "Fantasia" },
        { titulo: "His Dark Materials", sinopse: "Uma jovem embarca em uma jornada em um mundo paralelo.", genero: "Fantasia" },
        { titulo: "Raised by Wolves", sinopse: "Andróides criam crianças humanas em um planeta distante.", genero: "Ficção Científica" },
        { titulo: "The Nevers", sinopse: "Um grupo de mulheres com habilidades especiais em uma era vitoriana.", genero: "Fantasia" },
        { titulo: "Hacks", sinopse: "Uma comediante veterana e uma jovem roteirista se unem.", genero: "Comédia" },
        { titulo: "The Gilded Age", sinopse: "Uma visão da Nova York da era dourada do século 19.", genero: "Drama" },
        { titulo: "Band of Brothers", sinopse: "História da 101ª divisão aerotransportada durante a Segunda Guerra Mundial.", genero: "Guerra" },
        { titulo: "The Pacific", sinopse: "A história de soldados americanos na guerra do Pacífico.", genero: "Guerra" },

    ],
    disney: [
        { titulo: "O Rei Leão", sinopse: "Um jovem leão deve reivindicar seu lugar como rei.", genero: "Animação" },
        { titulo: "Frozen: Uma Aventura Congelante", sinopse: "Duas irmãs tentam salvar seu reino do inverno eterno.", genero: "Animação" },
        { titulo: "Os Incríveis", sinopse: "Uma família de super-heróis tenta levar uma vida normal.", genero: "Animação" },
        { titulo: "Vingadores: Ultimato", sinopse: "Os heróis se reúnem para enfrentar Thanos e restaurar a ordem.", genero: "Ação" },
        { titulo: "Toy Story", sinopse: "Os brinquedos ganham vida quando os humanos não estão por perto.", genero: "Animação" },
        { titulo: "Mulan", sinopse: "Uma jovem se disfarça de homem para salvar seu pai.", genero: "Aventura" },
        { titulo: "A Pequena Sereia", sinopse: "Uma sereia troca sua voz por pernas para viver entre humanos.", genero: "Animação" },
        { titulo: "Aladdin", sinopse: "Um jovem encontra uma lâmpada mágica e se torna príncipe.", genero: "Animação" },
        { titulo: "Zootopia", sinopse: "Um coelho policial e uma raposa trapaceira resolvem um mistério.", genero: "Animação" },
        { titulo: "Moana", sinopse: "Uma jovem navegadora busca salvar seu povo e descobrir seu destino.", genero: "Animação" },
        { titulo: "Rapunzel", sinopse: "Uma princesa com cabelos mágicos tenta escapar da torre.", genero: "Animação" },
        { titulo: "A Bela e a Fera", sinopse: "Uma jovem se apaixona por uma fera amaldiçoada.", genero: "Animação" },
        { titulo: "A História do Rei Leão", sinopse: "A clássica história de Simba e sua jornada para se tornar rei.", genero: "Animação" },
        { titulo: "O Mundo dos Pequeninos", sinopse: "Uma família de pequenos humanos vive sob o chão.", genero: "Animação" },
        { titulo: "Star Wars: A Nova Esperança", sinopse: "Os rebeldes tentam derrotar o Império Galáctico.", genero: "Ação" },
        { titulo: "Star Wars: O Império Contra-Ataca", sinopse: "A luta contra o Império continua em uma nova batalha.", genero: "Ação" },
        { titulo: "Star Wars: O Retorno de Jedi", sinopse: "Os rebeldes tentam salvar Han Solo e derrotar o Imperador.", genero: "Ação" },
        { titulo: "Star Wars: A Ascensão Skywalker", sinopse: "Os Jedi enfrentam a última batalha contra o lado sombrio.", genero: "Ação" },
        { titulo: "WandaVision", sinopse: "Duas super-heroínas tentam levar uma vida normal em um sitcom.", genero: "Fantasia" },
        { titulo: "The Mandalorian", sinopse: "Um caçador de recompensas protege uma criança poderosa.", genero: "Ação" },
        { titulo: "Loki", sinopse: "O Deus da Trapaça enfrenta novos desafios em realidades alternativas.", genero: "Fantasia" },
        { titulo: "What If...?", sinopse: "Exploração de realidades alternativas do universo Marvel.", genero: "Animação" },

    ],
    prime: [
        { titulo: "The Boys", sinopse: "Super-heróis corruptos são expostos por um grupo de vigilantes.", genero: "Ação" },
        { titulo: "Jack Ryan", sinopse: "Um analista da CIA se vê em uma missão perigosa.", genero: "Ação" },
        { titulo: "Hunters", sinopse: "Um grupo de caçadores de nazistas busca vingança.", genero: "Drama" },
        { titulo: "Fleabag", sinopse: "Uma mulher lida com a vida em Londres e suas relações conturbadas.", genero: "Comédia" },
        { titulo: "Borat", sinopse: "Um jornalista do Cazaquistão faz uma viagem aos EUA.", genero: "Comédia" },
        { titulo: "Good Omens", sinopse: "Um anjo e um demônio se unem para impedir o apocalipse.", genero: "Fantasia" },
        { titulo: "The Marvelous Mrs. Maisel", sinopse: "Uma dona de casa se torna comediante de stand-up.", genero: "Comédia" },
        { titulo: "Upload", sinopse: "Um homem é carregado em uma vida após a morte virtual.", genero: "Ficção Científica" },
        { titulo: "Carnival Row", sinopse: "Criaturas mitológicas vivem em uma cidade vitoriana.", genero: "Fantasia" },
        { titulo: "Tom Clancy's Without Remorse", sinopse: "Um ex-fuzileiro naval busca vingança pela morte de sua esposa.", genero: "Ação" },
        { titulo: "The Tomorrow War", sinopse: "Soldados são enviados ao passado para lutar em uma guerra futura.", genero: "Ação" },
        { titulo: "One Night in Miami", sinopse: "Uma reunião fictícia entre ícones do ativismo e do esporte.", genero: "Drama" },
        { titulo: "Sound of Metal", sinopse: "Um baterista perde a audição e deve se adaptar a sua nova realidade.", genero: "Drama" },
        { titulo: "The Vast of Night", sinopse: "Dois jovens investigam um mistério em uma cidade do Novo México.", genero: "Ficção Científica" },
        { titulo: "The Aeronauts", sinopse: "Duas mulheres fazem uma expedição de balão no século 19.", genero: "Aventura" },
        { titulo: "The Report", sinopse: "Um funcionário do governo investiga os métodos de tortura da CIA.", genero: "Drama" },
        { titulo: "Emergency", sinopse: "Um grupo de amigos enfrenta uma noite de eventos inesperados.", genero: "Comédia" },
        { titulo: "The Map of Tiny Perfect Things", sinopse: "Dois adolescentes vivem o mesmo dia repetidamente e tentam torná-lo perfeito.", genero: "Romance" },
        { titulo: "Coming 2 America", sinopse: "Um príncipe retorna à América em busca de sua filha.", genero: "Comédia" },
        { titulo: "Invincible", sinopse: "Um adolescente descobre que seu pai é o super-herói mais poderoso do mundo.", genero: "Animação" },
        { titulo: "The Expanse", sinopse: "Um futuro onde a humanidade colonizou o sistema solar.", genero: "Ficção Científica" },

    ]
};

document.getElementById('gerar').addEventListener('click', function() {
    const plataformaSelecionada = document.getElementById('plataforma').value;
    const filmesPorPlataforma = filmes[plataformaSelecionada];
    const filmeAleatorio = filmesPorPlataforma[Math.floor(Math.random() * filmesPorPlataforma.length)];
    
    document.getElementById('filme').innerHTML = `
        <strong>Filme sugerido:</strong> ${filmeAleatorio.titulo}<br>
        <strong>Sinopse:</strong> ${filmeAleatorio.sinopse}<br>
        <strong>Gênero:</strong> ${filmeAleatorio.genero}
    `;
});
