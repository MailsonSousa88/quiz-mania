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

function sobre(): void{
  alert("Bem-vindo(a) ao Quiz Mania!\nEsse jogo foi criado pelos alunos do IFPI - campus Piripiri na disciplina de algoritimos e programação\nCriadores: F.Mailson, Carlos e Railson");
  alert("O jogo oferece 4 temas diferentes para você escolher. Cada tema contém 10 perguntas, cada uma com 4 alternativas, das quais apenas uma é correta. Boa sorte e divirta-se!");
}

function jogarTema(temaEscolhido:Array<Pergunta>){
  let pontuacao = 0; 
  let acertos = 0;
  for (let pergunta of temaEscolhido) {
    let resultado = pergunta.checaRespostaDoJogo();

    if (resultado == "Voltar ao menu") {
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

//Area dos botoes (TEMAS)
let btnTemaGeral: HTMLButtonElement;
btnTemaGeral = document.getElementById("btnTemaGeral") as HTMLButtonElement;
btnTemaGeral.onclick = () => jogarTema(perguntaTemaGeral);//botao tema 1

let btnTemaCartoon : HTMLButtonElement;
btnTemaCartoon = document.getElementById("btnTemaCartoon") as HTMLButtonElement;
btnTemaCartoon.onclick = () => jogarTema(perguntaTemaCartoon);//botao tema 2

let btnTemaHerois: HTMLButtonElement;
btnTemaHerois = document.getElementById("btnTemaHerois") as HTMLButtonElement;
btnTemaHerois.onclick = () => jogarTema(perguntaTemaHerois); //botão tema 3

let btnTemaPaises: HTMLButtonElement;
btnTemaPaises = document.getElementById("btnTemaPaises") as HTMLButtonElement;
btnTemaPaises.onclick = () => jogarTema(perguntaTemaPaises); //botão tema 4