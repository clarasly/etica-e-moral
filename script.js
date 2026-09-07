/* =========================================================
   JAVASCRIPT — SITE ÉTICA E MORAL
   ========================================================= */


/* Pegamos os elementos que vamos controlar */

const menuButton = document.getElementById("menuButton");
const menu = document.getElementById("menu");


/* =========================================================
   ABRIR / FECHAR MENU
   ========================================================= */

menuButton.addEventListener("click", function () {

    menu.classList.toggle("aberto");
    menuButton.classList.toggle("aberto");

    const menuAberto = menu.classList.contains("aberto");

    /* Ajuda na acessibilidade */
    menuButton.setAttribute("aria-expanded", menuAberto);

});


/* =========================================================
   TROCAR DE SEÇÃO
   ========================================================= */

function mostrarSecao(nomeSecao) {

    /* Esconde todas as seções */

    const secoes = document.querySelectorAll(".secao");

    secoes.forEach(function (secao) {
        secao.classList.remove("ativa");
    });


    /* Mostra somente a seção escolhida */

    const secaoEscolhida = document.getElementById(nomeSecao);

    if (secaoEscolhida) {
        secaoEscolhida.classList.add("ativa");
    }


    /* Fecha o menu depois que uma opção é escolhida */

    menu.classList.remove("aberto");
    menuButton.classList.remove("aberto");
    menuButton.setAttribute("aria-expanded", "false");


    /* Volta para o topo */

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* =========================================================
   FECHAR MENU AO APERTAR ESC
   ========================================================= */

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {

        menu.classList.remove("aberto");
        menuButton.classList.remove("aberto");
        menuButton.setAttribute("aria-expanded", "false");

    }

});


// 🎮 DESAFIO ÉTICO

const perguntas = [
  {
    pergunta: "Seu colega de equipe cometeu um erro grave em um relatório e isso acabou atrasando o projeto. Porém, o chefe pensa que o erro foi seu e começa a te dar uma bronca na frente de todos. Seu colega fica em silêncio.",
    alternativas: [
      "Explicaria na hora que o erro não foi seu e diria na frente de todos que foi seu colega quem cometeu o erro.",
      "Evitaria discutir na frente de todos e conversaria com o chefe em particular para explicar o que aconteceu. Depois, conversaria com seu colega."
    ],
    correta: 1
  },

  {
    pergunta: "O estacionamento do shopping está completamente lotado e você já está há 20 minutos procurando uma vaga. Quando um carro sai, você liga a seta, mas outro motorista ignora e entra na vaga na sua frente.",
    alternativas: [
      "Desceria do carro para reclamar e exigir a vaga, já que você estava esperando por ela.",
      "Deixaria para lá e continuaria procurando outra vaga para evitar uma discussão."
    ],
    correta: 1
  },

  {
    pergunta: "Você está avaliando candidatos para uma vaga de emprego. O melhor currículo é de uma pessoa que você não conhece, mas seu melhor amigo está desempregado e pede que você indique o irmão dele, que tem qualificações medianas.",
    alternativas: [
      "Escolheria o candidato mais qualificado, levando em consideração suas habilidades para a vaga.",
      "Escolheria o irmão do seu amigo para ajudá-lo neste momento difícil."
    ],
    correta: 0
  },

  {
    pergunta: "Você foi demitido de uma empresa. Uma semana depois, durante uma entrevista em uma empresa concorrente, o entrevistador diz que pode te contratar na hora se você revelar a estratégia de vendas ou a lista de clientes do seu antigo chefe.",
    alternativas: [
      "Recusaria a proposta para manter o sigilo das informações da empresa anterior, mesmo precisando de um novo emprego.",
      "Passaria as informações para conseguir o emprego e ter uma renda novamente."
    ],
    correta: 0
  },

  {
    pergunta: "Você enviou um relatório importante e, algumas horas depois, percebeu que copiou trechos inteiros da internet sem colocar as fontes. O documento já foi elogiado pela diretoria e ninguém percebeu o erro.",
    alternativas: [
      "Avisaria sobre o erro e pediria para enviar uma versão corrigida, mesmo correndo o risco de perder os elogios.",
      "Ficaria em silêncio, já que o relatório foi aprovado e ninguém percebeu o problema."
    ],
    correta: 0
  },

  {
    pergunta: "Você está na casa de um amigo e, sem querer, esbarra em um enfeite caro da sala e o quebra enquanto ele está na cozinha. Ninguém viu o que aconteceu.",
    alternativas: [
      "Contaria ao seu amigo o que aconteceu e me ofereceria para ajudar a pagar o prejuízo.",
      "Guardaria o objeto quebrado ou tentaria esconder o estrago para que ele não soubesse."
    ],
    correta: 0
  },

  {
    pergunta: "É madrugada e você está voltando para casa. O sinal fica vermelho e a rua está completamente vazia, sem carros ou pedestres. Há apenas uma câmera de monitoramento no local.",
    alternativas: [
      "Esperaria o sinal abrir para continuar, mesmo estando com pressa para chegar em casa.",
      "Avançaria o sinal com cuidado, já que não há ninguém passando pela rua."
    ],
    correta: 0
  },

  {
    pergunta: "Você está há meses procurando emprego e encontra uma vaga que gostaria muito de conseguir. O único requisito que você não possui é o inglês avançado. Você sabe que o teste será apenas escrito e acredita que conseguiria usar um tradutor.",
    alternativas: [
      "Informaria que seu inglês é intermediário e tentaria a vaga mesmo assim.",
      "Colocaria que possui inglês avançado para passar pela primeira etapa e conseguir fazer a entrevista."
    ],
    correta: 0
  }
];

let perguntaAtual = 0;
let pontuacao = 0;

function iniciarDesafio() {
  perguntaAtual = 0;
  pontuacao = 0;

  document.querySelector('#desafio > h2').style.display = 'none';
  document.querySelector('#desafio > p:nth-of-type(1)').style.display = 'none';
  document.querySelector('#desafio > p:nth-of-type(2)').style.display = 'none';
  document.querySelector('.botao-desafio').style.display = 'none';

  document.getElementById('jogo').style.display = 'block';

  mostrarPergunta();
}

function mostrarPergunta() {
  const pergunta = perguntas[perguntaAtual];

  document.getElementById('numero-pergunta').textContent =
    `Pergunta ${perguntaAtual + 1} de ${perguntas.length}`;

  document.getElementById('pergunta').textContent =
    pergunta.pergunta;

  const alternativas = document.getElementById('alternativas');

  alternativas.innerHTML = '';

  pergunta.alternativas.forEach((alternativa, indice) => {
    const botao = document.createElement('button');

    botao.textContent = alternativa;
    botao.classList.add('botao-alternativa');

    botao.onclick = () => escolherAlternativa(indice);

    alternativas.appendChild(botao);
  });
}

function escolherAlternativa(indiceEscolhido) {

  const pergunta = perguntas[perguntaAtual];

  if (indiceEscolhido === pergunta.correta) {
    pontuacao++;
  }

  perguntaAtual++;

  if (perguntaAtual < perguntas.length) {
    mostrarPergunta();
  } else {
    mostrarResultado();
  }
}


function mostrarResultado() {

  const porcentagem = Math.round((pontuacao / perguntas.length) * 100);

  let mensagem = "";

  if (porcentagem <= 20) {
    mensagem = "Talvez seja uma boa oportunidade para refletir um pouco mais sobre suas escolhas. Algumas situações do dia a dia podem ser mais complicadas do que parecem, e pensar sobre elas ajuda a entender melhor a importância da ética.";
  } 
  else if (porcentagem <= 40) {
    mensagem = "Você já demonstra algumas atitudes éticas, mas algumas situações ainda podem gerar dúvidas. Vale a pena continuar refletindo sobre como nossas escolhas podem afetar outras pessoas.";
  } 
  else if (porcentagem <= 60) {
    mensagem = "Você teve um resultado equilibrado! Algumas de suas escolhas mostram uma boa preocupação com a ética, enquanto outras podem gerar diferentes pontos de vista. Continue refletindo sobre essas situações.";
  } 
  else if (porcentagem <= 80) {
    mensagem = "Muito bom! A maioria das suas escolhas levou em consideração atitudes éticas e responsáveis. Ainda assim, cada situação pode trazer novos desafios e oportunidades para refletir.";
  } 
  else {
    mensagem = "Excelente resultado! Suas escolhas mostraram uma boa preocupação com responsabilidade, respeito e honestidade. Continue levando esses valores em consideração nas situações do dia a dia.";
  }

  document.getElementById('jogo').innerHTML = `
    <div class="resultado">
      <h3>Seu resultado</h3>

      <p>
        Você escolheu alternativas consideradas éticas em
        <strong>${pontuacao} de ${perguntas.length}</strong> situações,
        alcançando <strong>${porcentagem}%</strong> no desafio.
      </p>

      <p>${mensagem}</p>

      <p>
        Lembre-se: o objetivo deste desafio não é definir se uma pessoa é ética
        ou não, mas incentivar a reflexão sobre nossas escolhas e atitudes.
      </p>
    </div>
  `;
}
