// elementos do DOM

const btnJogar = document.getElementById('btn-jogar');
const btnSobre = document.getElementById('btn-sobre');
const btnPontuacao = document.getElementById('btn-pontuacao');

// VARIAVEIS GLOBAIS

let iniciar: boolean = false;


// DEFINIÇÕES DE FUNÇÕES

if (btnJogar) { // teste de existência do botão. Motivo: evitar  "Cannot read property 'addEventListener' of null".
    btnJogar.addEventListener('click', () => {
        // Redireciona para a página de seleção de temas.
        iniciar = true;
        window.location.href = 'temas.html';
    });
}

if (btnSobre) {
    btnSobre.addEventListener('click', () => {
        alert("Bem-vindo ao QuizMania!\nEsse jogo foi criado pelos alunos de Análise e Desenvolvimento de Sistemas do IFPI, Campus Piripiri-Pi.");
    });
}

if (btnPontuacao) {
    btnPontuacao.addEventListener('click', () => {
        alert("Esses são os placares de Jogo:\n1° Lugar: 1000 pontos 🥇\n2° Lugar: 800 pontos 🥈\n3° Lugar: 600 pontos 🥉");
    });
}


// APLICAÇÃO
