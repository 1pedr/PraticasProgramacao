/*
  Condicionais: if / else x ternário
  As duas formas chegam ao mesmo resultado (média de n1 a n4).

  1. Com if / else
  2. Com ternário
  3. Ler o formulário e mostrar
  4. Pode votar? (if / else if com &&)

  Usa: util.js (lerNumero, lerInteiro)
*/


// 1. Com if / else
function mensagemComIf(media) {
  let mensagem = "";

  if (media >= 7) {
    mensagem = "Aprovado";
  } else {
    mensagem = "Reprovado";
  }

  return mensagem;
}


// 2. Com ternário
// condição ? valor se verdadeira : valor se falsa
// Faz o mesmo que o if / else acima, em uma linha.
function mensagemComTernario(media) {
  return media >= 7 ? "Aprovado" : "Reprovado";
}


// 3. Ler o formulário e mostrar
function notaEhValida(nota) {
  return nota !== null && nota >= 0 && nota <= 10;
}

function tratarTernario(evento) {
  evento.preventDefault(); // não recarrega a página ao enviar

  const saida = document.getElementById("resultado-ternario");

  const n1 = lerNumero(document.getElementById("nota-1"));
  const n2 = lerNumero(document.getElementById("nota-2"));
  const n3 = lerNumero(document.getElementById("nota-3"));
  const n4 = lerNumero(document.getElementById("nota-4"));

  if (!notaEhValida(n1) || !notaEhValida(n2) || !notaEhValida(n3) || !notaEhValida(n4)) {
    saida.textContent = "Erro: digite as 4 notas, entre 0 e 10.";
    return;
  }

  const media = (n1 + n2 + n3 + n4) / 4;

  saida.textContent =
    `A média é ${media.toFixed(2)}\n` +
    `if / else -> ${mensagemComIf(media)}\n` +
    `ternário  -> ${mensagemComTernario(media)}`;
}


// 4. Pode votar? (if / else if com &&)
// Testa de cima para baixo e para no PRIMEIRO bloco verdadeiro.
// Devolve a mensagem e qual condição foi verdadeira (para estudar).
function classificarEleitor(idade) {
  let mensagem = "";
  let regra = "";

  if (idade < 16) {
    mensagem = "Você não tem idade mínima para votar.";
    regra = "idade < 16";
  } else if (idade >= 16 && idade < 18) {   // && = E: as duas precisam ser verdadeiras
    mensagem = "Você pode ou não votar, é facultativo!";
    regra = "idade >= 16 && idade < 18";
  } else if (idade >= 18 && idade < 70) {
    mensagem = "Voto obrigatório.";
    regra = "idade >= 18 && idade < 70";
  } else {                                  // sobrou: 70 ou mais
    mensagem = "Facultativo de novo (70 anos ou mais).";
    regra = "else (nenhuma acima foi verdadeira)";
  }

  return { mensagem, regra }; // objeto com 2 valores (página For, for...in)
}

function tratarEleitor(evento) {
  evento.preventDefault(); // não recarrega a página ao enviar

  const saida = document.getElementById("resultado-eleitor");

  // lerInteiro (util.js): número inteiro digitado, ou null se vazio/inválido
  const anoVotacao = lerInteiro(document.getElementById("ano-eleicao"));
  const anoNascimento = lerInteiro(document.getElementById("ano-nascimento"));

  // || = OU: basta um estar vazio para dar erro
  if (anoVotacao === null || anoNascimento === null) {
    saida.textContent = "Erro: digite os dois anos.";
    return; // para aqui
  }
  if (anoNascimento > anoVotacao) {
    saida.textContent = "Erro: o nascimento não pode ser depois da eleição.";
    return;
  }

  const idade = anoVotacao - anoNascimento; // operador - (subtração)
  const resultado = classificarEleitor(idade);

  // Template string: crases e ${variável} (página Variáveis)
  saida.textContent =
    `idade = ${anoVotacao} - ${anoNascimento} = ${idade} anos\n\n` +
    `Condição verdadeira: ${resultado.regra}\n` +
    `${resultado.mensagem} Idade: ${idade} anos`;
}


// Ligando à página
document.getElementById("form-ternario").addEventListener("submit", tratarTernario);
document.getElementById("form-eleitor").addEventListener("submit", tratarEleitor);
