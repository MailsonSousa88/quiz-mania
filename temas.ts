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
        checaRespostaDoJogo(): string{
            let pergunta : number = Number(prompt(`${this.textoDaPergunta}\n0. Desistir\n${this.alternativasDaPergunta.join("\n")}`)!);

            while(isNaN(pergunta) || pergunta < 0 || pergunta > 4){
                alert("Opção incorreta!");
                pergunta = Number(prompt(`${this.textoDaPergunta}\n0. Desistir\n${this.alternativasDaPergunta.join("\n")}`)!);
            }

            if(pergunta == 0){
               return "Voltar ao menu";
            }
            else if(pergunta == this.respostasCorretas){
                alert("Certa resposta! ✅")
                return "Resposta correta";
            }
            else{
                alert(`Resposta Incorreta! ❌\n${this.alternativasDaPergunta.join("\n")}\nAlternativa Correta: ${this.respostasCorretas}`);
                return "Resposta errada"
            }
        }

    }
let perguntaTemaGeral : Array<Pergunta> = [
    new Pergunta("Qual é a capital do Brasil?", ["1. São Paulo", "2. Brasília", "3. Amapá", "4. Minas Gerais"], 2),
    new Pergunta("Em que continente fica o Egito?", ["1. Europa", "2. Ásia", "3. África", "4. América"], 3),
    new Pergunta("Quem foi o inventor do avião?", ["1. Thomas Edson", "2. Irmãos Wright", "3. Oppenheimer", "4. Santos Dumont"], 4),
    new Pergunta("Qual o maior país do mundo?", ["1. Russia", "2. China", "3. Estados Unidos", "4. Japão"], 1),
    new Pergunta("Qual o maior oceano do mundo?", ["1. Oceano Pacífico", "2. Oceano Índico", "3. Oceano Ártico", "4. Oceano Atlântico"], 1)
];

let perguntaTemaCartoon : Array<Pergunta> = [
    new Pergunta("Qual o nome do caracol de estimação do Bob Esponja?", ["1. Larry", "2. Marry", "3. Garry", "4. Jerry"], 3),
    new Pergunta("Em 'Os Simpsons', qual o nome da mãe da família?", ["1. Lisa", "2. Marge", "3. Maggie", "4. Patty"], 2),
    new Pergunta("Como é chamado o melhor amigo de Finn em 'Hora de Aventura'?", ["1. BMO", "2. Rei Gelado", "3. Gunter", "4. Jake"], 4),
    new Pergunta("No desenho 'Tom e Jerry', quem seria o Tom?", ["1. Gato", "2. Rato", "3. Cachorro", "4. Pássaro"], 1),
    new Pergunta("No desenho 'As Aventuras de Tintim', como é chamado o cachorrinho de estimação do protagonista?", ["1. Milu", "2. Bilu", "3. Clover", "4. Sam"], 1)
];
