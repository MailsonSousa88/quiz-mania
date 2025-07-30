
//Tema Variado (Modo de jogo numero 1)
function jogarTema(perguntas:Array<Pergunta>): void{
    
    let pontuacao : number = 0;
    let acertos : number = 0;

    for(let i = 0;i < perguntas.length; i++){
        let resultadoTema : string = perguntas[i].checaRespostaDoJogo();
        if(resultadoTema == "Voltar ao menu"){
            break;
        }else if(resultadoTema == "Resposta correta"){
            pontuacao += 200;
            acertos++;
        }
    }
    alert(`Você acertou: ${acertos}/5\nSua pontuação final foi de ${pontuacao} pontos`);
}

function menuInicial(): number{
    let escolhaUmaOpcao : number = Number(prompt("1. Jogar\n2. Sobre\n3. Pontuação\n0. Sair")!);
    while(isNaN(escolhaUmaOpcao) || escolhaUmaOpcao < 0 || escolhaUmaOpcao > 3){
        alert("Opção invalida!")
        escolhaUmaOpcao = Number(prompt("1. Jogar\n2. Sobre\n3. Placar\n0. Sair")!);
    }
    return escolhaUmaOpcao;
}
function jogar(): void{
    let escolhaUmModo : number = Number(prompt("1. Tema Geral\n2. Tema Cartoon\n0. Voltar")!);
    while(isNaN(escolhaUmModo) || escolhaUmModo < 0 || escolhaUmModo > 2){
        alert("Opção Invalida!")
        escolhaUmModo = Number(prompt("1. Tema Geral\n2. Tema Cartoon\n0. Voltar")!);
    }
    if(escolhaUmModo == 1){
        jogarTema(perguntaTemaGeral)
    }else if(escolhaUmModo == 2){
        jogarTema(perguntaTemaCartoon);
    }
}

let iniciar : boolean = false;while(!iniciar){
    let suaEscolha : number = menuInicial();
    if(suaEscolha == 1){
        jogar();
    }
    else if(suaEscolha == 2){
        alert("Bem-vindo ao QuizMania!\nEsse jogo foi criado pelos alunos de Análise e Desenvolvimento de Sistemas do IFPI, Campus Piripri-Pi\nEscolha um dos modos de jogo e divirta-se!");
    }else if(suaEscolha == 3){
        alert("Esses são os placares de Jogo:\n1° Lugar: 1000 pontos 🥇\n2° Lugar: 800 pontos 🥈\n3° Lugar: 600 pontos 🥉");
    }
    else{
        alert("Obrigado por jogar!");
        iniciar = true;
    }
}
