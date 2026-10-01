/*
  Glossário: busca
  Esconde as linhas cuja 1ª coluna não tem o texto digitado.
  Usado no Glossário e no Guia do Claude Code (mesmos ids).

  1. Filtrar as linhas
*/


// 1. Filtrar as linhas
function filtrar() {
  // toLowerCase: deixa minúsculo, assim "UL" acha "ul"
  const busca = document.getElementById("campo-busca").value.trim().toLowerCase();

  // querySelectorAll: pega TODAS as linhas de dados das tabelas (parecido com um array)
  const linhas = document.querySelectorAll("tbody tr");
  let encontradas = 0; // contadora

  // for...of: passa por cada linha (página For)
  for (let linha of linhas) {
    // querySelector("td"): a 1ª célula da linha, a coluna "Termo"
    const termo = linha.querySelector("td").textContent.toLowerCase();
    const achou = termo.includes(busca); // includes: o termo contém a busca?
    linha.hidden = !achou; // hidden = true esconde a linha
    if (achou) {
      encontradas++;
    }
  }

  // Ternário: campo vazio não mostra nada (página Condicionais)
  document.getElementById("resultado-busca").textContent =
    busca === "" ? "" : `${encontradas} resultado(s) para "${busca}"`;
}


// Ligando à página
// "input" = a cada letra digitada
document.getElementById("campo-busca").addEventListener("input", filtrar);
