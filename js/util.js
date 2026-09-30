/*
  util.js = funções "ajudantes" usadas pelas outras páginas.
  Ficam num arquivo só para não repetir o mesmo código em todo lugar.
*/

// Escreve um texto dentro de um elemento da página (uma linha nova a cada chamada).
//   id    -> o id do elemento no HTML (ex.: "saida")
//   texto -> o que queremos mostrar
function mostrar(id, texto) {
  // document.getElementById procura no HTML o elemento que tem aquele id
  const caixa = document.getElementById(id);

  // textContent é o texto que aparece dentro do elemento
  // "+=" significa: pegue o que já tem e ACRESCENTE o novo texto
  // "\n" é uma quebra de linha
  caixa.textContent += texto + "\n";
}
