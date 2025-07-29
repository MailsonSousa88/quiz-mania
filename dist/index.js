"use strict";
class Pergunta {
    constructor(texto, alternativas, respostaCerta) {
        this.texto = texto;
        this.alternativas = alternativas;
        this.respostaCerta = respostaCerta;
    }
}
let perguntasGeral = [
    new Pergunta("Qual é a capital do Brasil?", ["São Paulo", "Brasília", "Amapá", "Minas Gerais"], 1),
    new Pergunta("Em que continente fica o Egito?", ["Europa", "Ásia", "África", "América"], 2),
    new Pergunta("Quem foi o inventor do avião?", ["Thomas Edison", "Irmãos Wright", "Oppenheimer", "Santos Dumont"], 1),
    new Pergunta("Qual o maior país do mundo?", ["Rússia", "China", "EUA", "Japão"], 0),
    new Pergunta("Qual o maior oceano do mundo?", ["Pacífico", "Índico", "Ártico", "Atlântico"], 0),
];
let perguntasCartoon = [
    new Pergunta("Qual o nome do caracol do Bob Esponja?", ["Larry", "Marry", "Garry", "Jerry"], 2),
    new Pergunta("Quem é a mãe dos Simpsons?", ["Lisa", "Marge", "Maggie", "Patty"], 1),
    new Pergunta("Melhor amigo do Finn?", ["BMO", "Rei Gelado", "Gunter", "Jake"], 3),
    new Pergunta("Quem é o Tom em 'Tom e Jerry'?", ["Gato", "Rato", "Cachorro", "Pássaro"], 0),
    new Pergunta("Nome do cachorro do Tintim?", ["Milu", "Bilu", "Clover", "Sam"], 0),
];
let indicePergunta = 0;
let pontuacao = 0;
let acertos = 0;
let perguntasAtuais = [];
function mostrarTela(id) {
    document.querySelectorAll(".tela").forEach(tela => tela.classList.remove("ativa"));
    document.getElementById(id).classList.add("ativa");
}
function sairJogo() {
    alert("Obrigado por jogar!");
    mostrarTela("tela-inicial");
}
function iniciarJogo(modo) {
    perguntasAtuais = modo === "geral" ? perguntasGeral : perguntasCartoon;
    indicePergunta = 0;
    pontuacao = 0;
    acertos = 0;
    mostrarProximaPergunta();
}
function mostrarProximaPergunta() {
    if (indicePergunta >= perguntasAtuais.length) {
        mostrarResultado();
        return;
    }
    let pergunta = perguntasAtuais[indicePergunta];
    document.getElementById("texto-pergunta").textContent = pergunta.texto;
    let opcoes = document.getElementById("opcoes-resposta");
    opcoes.innerHTML = "";
    pergunta.alternativas.forEach((alternativa, index) => {
        let btn = document.createElement("button");
        btn.textContent = `${index + 1}. ${alternativa}`;
        btn.onclick = () => verificarResposta(index);
        opcoes.appendChild(btn);
    });
    mostrarTela("tela-pergunta");
}
function verificarResposta(escolhida) {
    let pergunta = perguntasAtuais[indicePergunta];
    if (escolhida === pergunta.respostaCerta) {
        acertos++;
        pontuacao += 200;
    }
    indicePergunta++;
    mostrarProximaPergunta();
}
function mostrarResultado() {
    let texto = `Você acertou ${acertos}/${perguntasAtuais.length} perguntas.\nPontuação final: ${pontuacao} pontos.`;
    document.getElementById("texto-resultado").textContent = texto;
    mostrarTela("tela-resultado");
}
