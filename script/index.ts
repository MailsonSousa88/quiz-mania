function comecarJogo(): void {
  const telaInicial = document.querySelector(".telaInicial") as HTMLElement;
  const telaQuiz = document.getElementById("telaQuiz") as HTMLElement;

  if (telaInicial && telaQuiz) {
    telaInicial.style.display = "none";
    telaQuiz.style.display = "block";
  }
}

function voltarAoMenu(): void {
  const telaInicial = document.querySelector(".telaInicial") as HTMLElement;
  const telaQuiz = document.getElementById("telaQuiz") as HTMLElement;

  if (telaInicial && telaQuiz) {
    telaQuiz.style.display = "none";
    telaInicial.style.display = "block";
  }
}


function jogarTema (temaEscolhido:Array<Pergunta>){
  let pontuacao = 0; 
  let acertos = 0;
  for (let pergunta of temaEscolhido) {
    let resultado = pergunta.checaRespostaDoJogo();

    if (resultado === "Voltar ao menu") {
      alert("Obrigado, até mais!");
      break;
    }else if(resultado == "Resposta correta"){
      pontuacao += 200;
      acertos++;
      alert(`Acertou ${acertos}/10`);
    }
  }

  alert(`Quantidade de acertos: ${acertos}/10\nPontuação total: ${pontuacao}`);
}
let btnTemaGeral: HTMLButtonElement;
btnTemaGeral = document.getElementById("btnTemaGeral") as HTMLButtonElement;

btnTemaGeral.onclick = () => jogarTema(perguntaTemaGeral);//botao tema 1

let btnTemaCartoon : HTMLButtonElement;
btnTemaCartoon = document.getElementById("btnTemaCartoon") as HTMLButtonElement;

btnTemaCartoon.onclick = () => jogarTema(perguntaTemaCartoon);//botao tema 2