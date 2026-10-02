/*
  util.js
  Funções ajudantes usadas por várias páginas.
  Precisa ser carregado ANTES dos outros scripts no HTML.

  1. mostrar
  2. converterParaNumero e converterParaInteiro
  3. lerNumero e lerInteiro
  4. coluna (para montar o teste de mesa)
*/


// 1. mostrar
// Escreve um texto dentro do elemento com esse id (uma linha por chamada).
function mostrar(id, texto) {
  const caixa = document.getElementById(id);
  caixa.textContent += texto + "\n"; // += acrescenta, \n quebra a linha
}


// 2. converterParaNumero e converterParaInteiro
// Tudo que o usuário digita chega como TEXTO.
// Devolvem o número, ou null se for vazio, cancelado ou inválido.
function converterParaNumero(texto) {
  if (texto === null || texto.trim() === "") {
    return null; // prompt devolve null quando clicam em Cancelar
  }

  const numero = Number(texto.replace(",", ".")); // aceita vírgula: "8,5" -> 8.5
  return Number.isFinite(numero) ? numero : null; // recusa NaN ("abc")
}

function converterParaInteiro(texto) {
  const numero = converterParaNumero(texto);
  return Number.isInteger(numero) ? numero : null; // recusa decimais
}


// 3. lerNumero e lerInteiro
// Recebem um <input> e devolvem o número digitado (ou null).
function lerNumero(campo) {
  return converterParaNumero(campo.value);
}

function lerInteiro(campo) {
  return converterParaInteiro(campo.value);
}


// 4. coluna
// Deixa cada coluna do teste de mesa com a mesma largura.
// padEnd(10) completa o texto com espaços até ter 10 caracteres.
function coluna(valor) {
  return String(valor).padEnd(10);
}
