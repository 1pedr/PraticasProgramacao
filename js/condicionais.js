/*
  Condicionais: if / else x ternário
  As duas formas chegam ao mesmo resultado. Igual à aula (n1 a n4).

  1. Com if / else
  2. Com ternário
  3. Ler o formulário e mostrar

  Usa: util.js (lerNumero)
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


// Ligando à página
document.getElementById("form-ternario").addEventListener("submit", tratarTernario);
