/*
  Glossário: busca
  Esconde as linhas cuja coluna "Termo" não tem o texto digitado.

  1. Filtrar as linhas
*/


// 1. Filtrar as linhas
function filtrar() {
  // toLowerCase: deixa minúsculo, assim "UL" acha "ul"
  const busca = document.getElementById("campo-busca").value.trim().toLowerCase();

  // querySelectorAll: pega TODAS as linhas de dados das tabelas (parecido com um array)
  const linhas = document.querySelectorAll("tbody tr");
  let encontradas = 0; // contadora

  // for...of: passa por cada linha (aula de for)
  for (let linha of linhas) {
    // querySelector("td"): a 1ª célula da linha, a coluna "Termo"
    const termo = linha.querySelector("td").textContent.toLowerCase();
    const achou = termo.includes(busca); // includes: o termo contém a busca?
    linha.hidden = !achou; // hidden = true esconde a linha
    if (achou) {
      encontradas++;
    }
  }

  // Ternário: campo vazio não mostra nada (aula de condicionais)
  document.getElementById("resultado-busca").textContent =
    busca === "" ? "" : `${encontradas} resultado(s) para "${busca}"`;
}


// Ligando à página
// "input" = a cada letra digitada
document.getElementById("campo-busca").addEventListener("input", filtrar);
