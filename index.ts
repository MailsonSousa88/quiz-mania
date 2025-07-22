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
        let pergunta : number = Number(prompt(`${this.textoDaPergunta}\n${this.alternativasDaPergunta.join("\n")}`)!);

        while(isNaN(pergunta) || pergunta < 1 || pergunta > 4){
            alert("Opção incorreta!");
            pergunta = Number(prompt(`${this.textoDaPergunta}\n${this.alternativasDaPergunta.join("\n")}`)!);
        }

        if(pergunta == this.respostasCorretas){
            alert(`Certa Resposta!\nAcertos: ${this.respostasCorretas}`);
            return true;
        }else{
            alert("Resposta Incorreta!");
            return false;
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
        if(perguntaTemaGeral[i].checaRespostaDoJogo()){
            pontuacao += 200;
            acertos++;
        }
    }
}
//Tema de Cartoon (Modo de jogo numero 2)
function temaCartoon(): void{
    let perguntaTemaCartoon : Array<Pergunta> = [
        new Pergunta("Qual o nome do caracol de estimação do Bob Esponja?", ["1. Larry", "2. Marry", "3. Garry", "4. Jerry"], 3),
        new Pergunta("Em 'Os Simpsons', qual o nome da mãe da família?", ["1. Lisa", "2. Marge", "3. Maggie", "4. Patty"], 2),
        new Pergunta("Como é chamado o melhor amigo de Finn em 'Hora de Aventura'?", ["1. BMO", "2. Rei Gelado", "3. Gunter", "4. Jake"], 4),
        new Pergunta("No desenho 'Tom e Jerry', quem seria o Tom?", ["1. Gato", "2. Rato", "3. Cachorro", "4. Pássaro"], 1),
        new Pergunta("Dessas personagens quem realmente faz parte das 'Meninas Superpoderosas'?", ["1. Docinho", "2. Anne", "3. Francine", "4. Jade"], 3),
    ];

    let pontuacao : number = 0;
    let acertos : number = 0;

    for(let i = 0; i < perguntaTemaCartoon.length; i++){
        if(perguntaTemaCartoon[i].checaRespostaDoJogo()){
            pontuacao += 200;
            acertos++;
        }
    }
}
function menuInicial(): number{
    let escolhaUmaOpcao : number = Number(prompt("1. Jogar\n2. Sobre\n3. Placar\n0. Sair")!);
    while(isNaN(escolhaUmaOpcao) || escolhaUmaOpcao < 0 || escolhaUmaOpcao > 3){
        alert("Opção invalida!")
        escolhaUmaOpcao = Number(prompt("1. Jogar\n2. Sobre\n3. Placar\n0. Sair")!);
    }
    return escolhaUmaOpcao;
}
function jogar(): void{
    let escolhaUmModo : number = Number(prompt("1. Tema Geral\n2. Tema Cartoon\n0. Sair")!);
    while(isNaN(escolhaUmModo) || escolhaUmModo < 0 || escolhaUmModo > 2){
        alert("Opção Invalida!")
        escolhaUmModo = Number(prompt("1. Tema Geral\n2. Tema Cartoon\n0. Sair")!);
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

    }else if(suaEscolha == 3){

    }
    else{
        alert("Obrigado por jogar!");
        iniciar = true;
    }
}
