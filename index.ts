    //Novo jogo de perguntas e respostas do completo 0
    class Pergunta {
        textoDaPergunta : string;
        alternativasDaPergunta : Array<string>;
        respostasCorretas : number;

        constructor (texto:string, alternativas:Array<string>, resposta:number){
            this.textoDaPergunta = texto;
            this.alternativasDaPergunta = alternativas;
            this.respostasCorretas = resposta;
        }  
    //Metodo para checar as respostas dos modos
        checaRespostaDoJogo(): boolean{
            let pergunta : number = Number(prompt(`${this.textoDaPergunta}\n0. Voltar\n${this.alternativasDaPergunta.join("\n")}`)!);

            while(isNaN(pergunta) || pergunta < 0 || pergunta > 4){
                alert("Opção incorreta!");
                pergunta = Number(prompt(`${this.textoDaPergunta}\n${this.alternativasDaPergunta.join("\n")}`)!);
            }

            if(pergunta == this.respostasCorretas){
                alert(`Certa Resposta!`);
                return true;
            }else if(pergunta == 0){
                return false;//voltar ao menu
            }
            else{
                alert(`Resposta Incorreta!\n${this.alternativasDaPergunta.join("\n")}\nAlternativa Correta: ${this.respostasCorretas}`);
                return true;
            }
        }

    }

    //Tema Variado (Modo de jogo numero 1)
    function temaGeral(): void{
        let perguntaTemaGeral : Array<Pergunta> = [
            new Pergunta("Qual é a capital do Brasil?", ["1. São Paulo", "2. Brasília", "3. Amapá", "4. Minas Gerais"], 2),
            new Pergunta("Em que continente fica o Egito?", ["1. Europa", "2. Ásia", "3. África", "4. América"], 3),
            new Pergunta("Quem foi o inventor do avião?", ["1. Thomas Edson", "2. Irmãos Wright", "3. Oppenheimer", "4. Santos Dumont"], 4),
            new Pergunta("Qual o maior país do mundo?", ["1. Russia", "2. China", "3. Estados Unidos", "4. Japão"], 1),
            new Pergunta("Qual o maior oceano do mundo?", ["1. Oceano Pacífico", "2. Oceano Índico", "3. Oceano Ártico", "4. Oceano Atlântico"], 1)
        ];

        let pontuacao : number = 0;
        let acertos : number = 0;

        for(let i = 0;i < perguntaTemaGeral.length; i++){
            let resultadoTemaGeral : boolean = perguntaTemaGeral[i].checaRespostaDoJogo();
            if(resultadoTemaGeral == false){
                break;
            }else{
                pontuacao += 200;
                acertos++;
            }
        }
        alert(`Você acertou: ${acertos}/5\nSua pontuação final foi de ${pontuacao} pontos`);
    }
    //Tema de Cartoon (Modo de jogo numero 2)
    function temaCartoon(): void{
        let perguntaTemaCartoon : Array<Pergunta> = [
            new Pergunta("Qual o nome do caracol de estimação do Bob Esponja?", ["1. Larry", "2. Marry", "3. Garry", "4. Jerry"], 3),
            new Pergunta("Em 'Os Simpsons', qual o nome da mãe da família?", ["1. Lisa", "2. Marge", "3. Maggie", "4. Patty"], 2),
            new Pergunta("Como é chamado o melhor amigo de Finn em 'Hora de Aventura'?", ["1. BMO", "2. Rei Gelado", "3. Gunter", "4. Jake"], 4),
            new Pergunta("No desenho 'Tom e Jerry', quem seria o Tom?", ["1. Gato", "2. Rato", "3. Cachorro", "4. Pássaro"], 1),
            new Pergunta("No desenho 'As Aventuras de Tintim', como é chamado o cachorrinho de estimação do protagonista?", ["1. Milu", "2. Bilu", "3. Clover", "4. Sam"], 1),
        ];

        let pontuacao : number = 0;
        let acertos : number = 0;

        for(let i = 0; i < perguntaTemaCartoon.length; i++){
            let resultadoTemaCartoon : boolean = perguntaTemaCartoon[i].checaRespostaDoJogo();
            if(resultadoTemaCartoon == false){
                break;
            }else{
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
            temaGeral();
        }else if(escolhaUmModo == 2){
            temaCartoon();
        }
    }

    let iniciar : boolean = false;
    while(!iniciar){
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
