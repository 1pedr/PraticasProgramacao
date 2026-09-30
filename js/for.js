/*
  Repetição: for
  Junta as três partes do laço numa linha só:
  for (início; condição; passo) { ... }

  1. Contar e somar (com teste de mesa)
  2. Tabuada
  3. Contagem regressiva

  Usa: util.js (lerInteiro, coluna)
*/


// 1. Contar e somar (com teste de mesa)
// Mesmo exemplo do while, agora com for.
function contarComFor(fim) {
  let soma = 0; // acumuladora
  let numeros = "";
  let tabela = coluna("i") + "soma\n";

  // i começa em 1; roda enquanto i <= fim; no fim de cada rodada, i++
  for (let i = 1; i <= fim; i++) {
    soma += i;
    numeros += i + " ";
    tabela += coluna(i) + soma + "\n";
  }

  return { numeros, soma, tabela };
}

function tratarContagem(evento) {
  evento.preventDefault(); // não recarrega a página ao enviar

  const saida = document.getElementById("resultado-contagem");
  const fim = lerInteiro(document.getElementById("campo-fim"));

  if (fim === null || fim < 1 || fim > 50) {
    saida.textContent = "Erro: o fim precisa ser um número inteiro de 1 a 50.";
    return;
  }

  const resultado = contarComFor(fim);

  saida.textContent =
    `for (let i = 1; i <= ${fim}; i++)\n\n` +
    `Números: ${resultado.numeros}\n` +
    `O somatório é: ${resultado.soma}\n\n` +
    `Teste de mesa:\n${resultado.tabela}`;
}


// 2. Tabuada
// O i vai de 1 a 10 e cada rodada monta uma linha.
function montarTabuada(numero) {
  let linhas = "";

  for (let i = 1; i <= 10; i++) {
    linhas += `${numero} x ${i} = ${numero * i}\n`;
  }

  return linhas;
}

function tratarTabuada(evento) {
  evento.preventDefault();

  const saida = document.getElementById("resultado-tabuada");
  const numero = lerInteiro(document.getElementById("campo-tabuada"));

  if (numero === null || numero < 1 || numero > 100) {
    saida.textContent = "Erro: digite um número inteiro de 1 a 100.";
    return;
  }

  saida.textContent = montarTabuada(numero);
}


// 3. Contagem regressiva
// O for também anda para trás: começa alto, condição >= e i--.
function contarRegressivo(inicio) {
  let texto = "";

  for (let i = inicio; i >= 1; i--) {
    texto += i + "... ";
  }

  return texto + "Fogo!";
}

function tratarRegressiva(evento) {
  evento.preventDefault();

  const saida = document.getElementById("resultado-regressiva");
  const inicio = lerInteiro(document.getElementById("campo-regressiva"));

  if (inicio === null || inicio < 1 || inicio > 50) {
    saida.textContent = "Erro: digite um número inteiro de 1 a 50.";
    return;
  }

  saida.textContent = contarRegressivo(inicio);
}


// Ligando à página
document.getElementById("form-contagem").addEventListener("submit", tratarContagem);
document.getElementById("form-tabuada").addEventListener("submit", tratarTabuada);
document.getElementById("form-regressiva").addEventListener("submit", tratarRegressiva);
