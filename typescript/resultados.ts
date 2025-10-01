// IMPORTAÇÕES Trazendo temas como um módulo

import {
    alternativasContainerEl,
    perguntaTextoEl,
    listaDePerguntas,
    resultado,
    colocacao
} from './quiz.js';

const acertos: number = Number(sessionStorage.getItem('acertos'));
const pontuacaoMaxima: number = Number(sessionStorage.getItem('totalPerguntas')) * 100;
const pontuacaoFinal: number = Number(sessionStorage.getItem('pontuacaoFinal'));


if (resultado && colocacao) {
    resultado.textContent = `${acertos} acertos de ${listaDePerguntas.length}`;


    switch (true) {
        case (pontuacaoFinal == pontuacaoMaxima): {
            colocacao.textContent = '1000 pontos 🥇, Parabéns!';
        }
            break;
        case (pontuacaoFinal >= Math.floor(pontuacaoMaxima * 0.8) && pontuacaoFinal < pontuacaoMaxima): {
            colocacao.textContent = `${pontuacaoFinal} pontos 🥈`;
        }
            break;
        case (pontuacaoFinal >= Math.floor(pontuacaoMaxima * 0.6) && pontuacaoFinal > Math.floor(pontuacaoFinal * 0.8)): {
            colocacao.textContent = `${pontuacaoFinal} pontos 🥉`;
        }
            break;
        default:
            colocacao.textContent = `${pontuacaoFinal} pontos. \n Faça ainda melhor da próxima vez!`;
            break;
    }
}
