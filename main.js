const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual foi a primeira brasileira a ganhar uma medalha de ouro olímpica no atletismo",
        alternativas: [
            {
                texto: "Maurren Maggi ",
                afirmacao: "Correto! Maurren Maggi foi a primeira brasileira a conquistar uma medalha de ouro olímpica no atletismo. Ela venceu no salto em distância nos Jogos Olímpicos de Pequim, em 2008, marcando um momento histórico para o esporte brasileiro."
            },
            {
                texto: "Ana Moser",
                afirmacao: "Ana Moser é uma renomada ex-jogadora brasileira de vôlei, conhecida por sua habilidade e contribuição ao esporte. Embora não seja a primeira brasileira a ganhar uma medalha de ouro olímpica no atletismo, Ana Moser deixou seu legado marcado na história do voleibol nacional e internacional."
            }
        ]
    },
    {
        enunciado: "Qual esporte feminino conquistou mais medalhas olímpicas para o Brasil até hoje?",
        alternativas: [
            {
                texto: "judo",
                afirmacao: "O judô brasileiro tem uma longa tradição de sucesso olímpico, com várias medalhas conquistadas tanto no masculino quanto no feminino. No entanto, é o vôlei feminino que lidera as conquistas olímpicas para as mulheres brasileiras, destacando-se como um dos esportes mais bem-sucedidos em termos de medalhas olímpicas."
            },
            {
                texto: "volei",
                afirmacao: " Correto! O vôlei feminino é o esporte que conquistou mais medalhas olímpicas para o Brasil até hoje. Com um histórico de sucesso, as jogadoras brasileiras se destacaram em várias edições dos Jogos Olímpicos."
            }
        ]
    },
    {
        enunciado: "Quem é a jogadora brasileira de futebol mais reconhecida internacionalmente?",
        alternativas: [
            {
                texto: "Marta",
                afirmacao: "Correto! Marta é amplamente reconhecida como a jogadora brasileira de futebol mais renomada internacionalmente. Com uma carreira brilhante, ela é uma das maiores artilheiras e ícones do esporte mundial."
            },
            {
                texto: "Formiga",
                afirmacao: "Formiga é uma das jogadoras de futebol mais respeitadas e longevas da história do esporte brasileiro. Sua carreira de destaque inclui múltiplas participações em Copas do Mundo e Jogos Olímpicos, mas Marta é reconhecida internacionalmente como a maior jogadora brasileira de todos os tempos, com seu talento e conquistas contribuindo significativamente para o reconhecimento do futebol feminino."
            }
        ]
    },
    {
        enunciado: "Qual esporte coletivo feminino tem mais títulos mundiais para o Brasil?",
        alternativas: [
            {
                texto: "futebol",
                afirmacao: " Correto! O futebol feminino é o esporte coletivo que possui mais títulos mundiais para o Brasil. As jogadoras brasileiras conquistaram vários títulos importantes ao longo dos anos, consolidando-se como potência no cenário mundial."
            },
            {
                texto: "basquete",
                afirmacao: "O basquete feminino brasileiro teve momentos de destaque em competições internacionais, mas é o futebol feminino que possui o maior número de títulos mundiais para o Brasil. Ao longo dos anos, as jogadoras brasileiras de futebol conquistaram vários campeonatos mundiais, consolidando-se como uma força dominante no cenário global do esporte."
            }
        ]
    },
    {
        enunciado: "Qual é a principal modalidade em que o Brasil ganhou medalhas nos Jogos Olímpicos de Tóquio 2020?",
        alternativas: [
            {
                texto: "volei de praia",
                afirmacao: " Correto! O vôlei de praia foi a modalidade em que o Brasil conquistou medalhas nos Jogos Olímpicos de Tóquio 2020. A dupla brasileira formada por Ana Patrícia e Rebecca garantiu a medalha de bronze, destacando-se no cenário internacional do esporte."
            },
            {
                texto: " Ginástica Artística",
                afirmacao: "A natação é uma das modalidades tradicionais em que o Brasil tem presença nos Jogos Olímpicos, mas não foi a principal em termos de conquistas de medalhas para o país em Tóquio 2020."
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2024...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();