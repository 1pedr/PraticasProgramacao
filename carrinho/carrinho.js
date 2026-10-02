/*
  Carrinho de compras: botões − e +, remover e subtotal automático

  1. Os dados: preços, quantidades e produtos no carrinho
  2. Formatar em reais
  3. Subtotal da compra
  4. Atualizar a tela
  5. Adicionar, diminuir e remover

  Cada produto é uma posição dos arrays: 0 = produto0, 1 = produto1, 2 = produto2.
  É o mesmo número que está nos ids do HTML (quantidade0, total0, menos0...).
*/


// 1. Os dados
const precos = [399, 210, 19.9];       // preço unitário de cada produto
const quantidades = [2, 1, 1];         // quantidade de cada produto
const noCarrinho = [true, true, true]; // false = o produto foi removido


// 2. Formatar em reais
// toLocaleString (novo): escreve o número no jeito do país. 1027.9 -> "R$ 1.027,90"
function formatarReal(valor) {
  return valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}


// 3. Subtotal da compra
// Função só de cálculo: não mexe na página (página Funções, "funções puras").
function calcularSubtotal() {
  let soma = 0; // variável acumuladora (página Repetição)
  for (let i = 0; i < precos.length; i++) {
    soma += precos[i] * quantidades[i]; // preço x quantidade de cada produto
  }
  return soma;
}


// 4. Atualizar a tela
// Chamada depois de toda mudança: reescreve quantidade, total e subtotal.
// textContent troca só o texto do elemento (página Entrada e Saída).
function atualizarTela() {
  let itens = 0;

  for (let i = 0; i < precos.length; i++) {
    document.getElementById(`quantidade${i}`).textContent = quantidades[i]; // template string (página Variáveis)
    document.getElementById(`total${i}`).textContent = formatarReal(precos[i] * quantidades[i]);
    document.getElementById(`produto${i}`).hidden = !noCarrinho[i]; // hidden: esconde a linha

    if (noCarrinho[i]) {
      itens++;
    }
  }

  document.getElementById("contador").textContent = itens;
  document.getElementById("subtotal").textContent = formatarReal(calcularSubtotal());
}


// 5. Adicionar, diminuir e remover
// "item" é a posição do produto nos arrays (0, 1 ou 2).
function adicionarItem(item) {
  quantidades[item]++; // ++ soma 1
  atualizarTela();
}

function diminuirItem(item) {
  if (quantidades[item] > 0) { // não deixa ficar negativa
    quantidades[item]--;       // -- tira 1
  }
  atualizarTela();
}

function removerProduto(item) {
  quantidades[item] = 0;
  noCarrinho[item] = false;
  atualizarTela();
}


// Ligando à página
// Um for liga os 3 botões de cada produto: ids menos0, mais0, remover0, menos1...
// O () => ... é uma arrow function: só roda quando o botão é clicado.
for (let i = 0; i < precos.length; i++) {
  document.getElementById(`menos${i}`).addEventListener("click", () => diminuirItem(i));
  document.getElementById(`mais${i}`).addEventListener("click", () => adicionarItem(i));
  document.getElementById(`remover${i}`).addEventListener("click", () => removerProduto(i));
}

atualizarTela(); // mostra os valores iniciais assim que a página abre
