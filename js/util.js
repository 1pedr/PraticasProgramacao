/*
  util.js
  Funções ajudantes usadas por várias páginas.
  Precisa ser carregado ANTES dos outros scripts no HTML.

  1. mostrar
  2. converterParaNumero
  3. lerNumero e lerInteiro
*/


// 1. mostrar
// Escreve um texto dentro do elemento com esse id (uma linha por chamada).
function mostrar(id, texto) {
  const caixa = document.getElementById(id);
  caixa.textContent += texto + "\n"; // += acrescenta, \n quebra a linha
}


// 2. converterParaNumero
// Tudo que o usuário digita chega como TEXTO.
// Devolve o número, ou null se for vazio, cancelado ou inválido.
function converterParaNumero(texto) {
  if (texto === null || texto.trim() === "") {
    return null; // prompt devolve null quando clicam em Cancelar
  }

  const numero = Number(texto);
  return Number.isFinite(numero) ? numero : null; // recusa NaN ("abc")
}


// 3. lerNumero e lerInteiro
// Recebem um <input> e devolvem o número digitado (ou null).
function lerNumero(campo) {
  return converterParaNumero(campo.value);
}

function lerInteiro(campo) {
  const numero = lerNumero(campo);
  return Number.isInteger(numero) ? numero : null; // recusa decimais
}
