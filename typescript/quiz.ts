// IMPORTAÇÕES Trazendo temas como um módulo

import {
    Pergunta,
    perguntaTemaGeral,
    perguntaTemaCartoon
} from './temas.js';

// Coletando elementos do DOM

export const perguntaTextoEl = document.getElementById('pergunta-texto') as HTMLParagraphElement;
export const alternativasContainerEl = document.getElementById('alternativas-container') as HTMLDivElement;
// const pontuacaoDisplayEl = document.getElementById('pontuacao-display');
export const resultado = document.getElementById('resultado') as HTMLParagraphElement;
export const colocacao = document.getElementById('colocacao') as HTMLParagraphElement;

// Variaveis globais

export let pontuacao: number = 0;
export let acertos: number = 0;
export let indiceDaPergunta: number = 0;
export let listaDePerguntas: Array<Pergunta> = [];

// Definição de funções 

function loadQuiz(): void {
    let themeChoice: string | null = sessionStorage.getItem('temaEscolhido');
    if (themeChoice == "geral") {
        listaDePerguntas = perguntaTemaGeral;
    }
    else if (themeChoice == "cartoon") {
        listaDePerguntas = perguntaTemaCartoon;
    }
    else {
        throw new Error("Nenhum tema capturado, pela loadQuiz");
    }
    showQuiz(listaDePerguntas);
}

function showQuiz(listaDePerguntas: Array<Pergunta>) {

    if (indiceDaPergunta >= listaDePerguntas.length) {
        resultadoFinal();
        return; // saida da função;
    }
    if (perguntaTextoEl && alternativasContainerEl) { // verificação dupla de existencia


        let textoPerguntaAtual: string | null = listaDePerguntas[indiceDaPergunta].textoDaPergunta;
        perguntaTextoEl!.textContent = textoPerguntaAtual;

        alternativasContainerEl!.innerHTML = '';

        const perguntaAtual = listaDePerguntas[indiceDaPergunta];

        perguntaAtual.alternativasDaPergunta.forEach((alternativa: string, index: number) => {
            const option = document.createElement("button");
            option.textContent = alternativa;
            option.dataset.index = (index + 1).toString();
            // Armazena o índice (1, 2, 3, 4)
            option.addEventListener('click', checkResponse);
            alternativasContainerEl!.appendChild(option);
        });
    }
    else {
        // Mensagem de erro caso os elementos não sejam encontrados
        console.error("ERRO: O elemento do texto da pergunta ou o contêiner de alternativas não foram encontrados no HTML.");
    };
}

function checkResponse(event: MouseEvent): void {
    const botaoClicado = event.target as HTMLButtonElement;

    const resposta = Number(botaoClicado.dataset.index);
    if (resposta == listaDePerguntas[indiceDaPergunta].respostasCorretas) {
        alert("Resposta Correta ✅");
        pontuacao += 100;
        acertos += 1;
    }
    else {
        alert("Resposta incorreta ❌");
    }
    indiceDaPergunta++;
    showQuiz(listaDePerguntas);
}

function resultadoFinal(): void {
    // salva os dados (coloca na mala)
    sessionStorage.setItem('acertosFinal', acertos.toString());
    sessionStorage.setItem('totalPerguntas', listaDePerguntas.length.toString());
    sessionStorage.setItem('pontuacaoFinal', pontuacao.toString());
    // redireciona p/ para próxima página html ('viaja p/ proxima pagina')
    window.location.href = 'resultados.html';
}

// Aplicaçao

loadQuiz();