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
    new Pergunta("Qual o maior oceano do mundo?", ["1. Oceano Pacífico", "2. Oceano Índico", "3. Oceano Ártico", "4. Oceano Atlântico"], 1),
    new Pergunta("Qual é o maior planeta do sistema solar?", ["1. Marte", "2. Terra", "3. Júpiter", "4. Saturno"], 3),
    new Pergunta("Quem foi o autor da obra 'Dom Casmurro'?", ["1. Jorge Amado", "2. Clarice Lispector", "3. Graciliano Ramos", "4. Machado de Assis"], 4),
    new Pergunta("Em que ano ocorreu a Proclamação da República no Brasil?", ["1. 1889", "2. 1822", "3. 1807", "4. 1914"], 1),
    new Pergunta("Qual o símbolo químico do Ouro?", ["1. H2O", "2. AU", "3. HO", "4. O2"], 2),
    new Pergunta("Quem pintou a obra 'A Última Ceia'?", ["1. Michelangelo", "2. Rembrandt", "3. Leonardo da Vincci", "4. Pablo Picasso"], 3)
];

let perguntaTemaCartoon : Array<Pergunta> = [
    new Pergunta("Qual o nome do caracol de estimação do Bob Esponja?", ["1. Larry", "2. Marry", "3. Garry", "4. Jerry"], 3),
    new Pergunta("Em 'Os Simpsons', qual o nome da mãe da família?", ["1. Lisa", "2. Marge", "3. Maggie", "4. Patty"], 2),
    new Pergunta("Como é chamado o melhor amigo de Finn em 'Hora de Aventura'?", ["1. BMO", "2. Rei Gelado", "3. Gunter", "4. Jake"], 4),
    new Pergunta("No desenho 'Tom e Jerry', quem seria o Tom?", ["1. Gato", "2. Rato", "3. Cachorro", "4. Pássaro"], 1),
    new Pergunta("No desenho 'As Aventuras de Tintim', como é chamado o cachorrinho de estimação do protagonista?", ["1. Milu", "2. Bilu", "3. Clover", "4. Sam"], 1),
    new Pergunta("Em 'Os Padrinhos Mágicos', quem são os padrinhos de Timmy?", ["1. Mario e Luigi", "2. Jimmy e Jenny", "3. Peter e Lois", "4. Cosmo e Wanda"], 4),
    new Pergunta("Qual é o nome do vilão que vive tentando capturar os Smurfs?", ["1. Gargamel", "2. Gárgula", "3. Grinch", "4. Gumble"], 1),
    new Pergunta("Em 'Dragon Ball Z', qual é o verdadeiro nome do Goku?", ["1. Son Goku", "2. Kakarotto", "3. Vegeta", "4. Kaio"], 2),
    new Pergunta("Qual dessas personagens é uma princesa da Disney?", ["1. Mônica", "2. Emília", "3. Dora", "4. Ariel"], 4),
    new Pergunta("Em 'Apenas um Show', quais são os nomes dos dois personagens principais?", ["1. Gumball e Darwin", "2. Rick e Morty", "3. Mordecai e Rigby ", "4. Finn e Jake"], 3)
];