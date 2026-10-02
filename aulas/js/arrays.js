/*
  Arrays: laboratório com o array carros
  Cada botão roda um método e mostra o código, o que ele devolveu
  e o array como tabela (igual ao console.table).

  1. Mostrar o array (como o console.table)
  2. Adicionar: push e unshift
  3. Remover: pop e shift
  4. splice: inserir, trocar ou excluir numa posição
  5. sort: ordenar
  6. Recomeçar

  Usa: util.js (lerInteiro, coluna)
*/


// O array de exemplo. É const, mas o CONTEÚDO pode mudar:
// const só impede trocar o array inteiro por outro (carros = [...]).
const carros = ["Gol", "Fusca", "Virtus", "Ka"];
const inicial = ["Gol", "Fusca", "Virtus", "Ka"]; // cópia para o "Recomeçar"


// 1. Mostrar o array (como o console.table)
// codigo: o comando que rodou; devolveu: o que o método retornou.
function mostrarArray(codigo, devolveu) {
  let tabela = coluna("(índice)") + "valor\n";

  // for clássico: o i é o índice (posição), carros[i] é o valor
  for (let i = 0; i < carros.length; i++) {
    tabela += coluna(i) + carros[i] + "\n";
  }

  // Ternário: só mostra "devolveu" quando o método devolve algo útil
  const linhaDevolveu = devolveu === undefined ? "" : `devolveu: ${devolveu}\n`;

  document.getElementById("resultado-array").textContent =
    `${codigo}\n` +
    linhaDevolveu +
    `\ncarros.length = ${carros.length}\n\n` + // length = quantos itens
    tabela;
}

// Lê o campo "Item" e tira os espaços das pontas
function lerItem() {
  return document.getElementById("campo-item").value.trim();
}


// 2. Adicionar: push e unshift
// push: coloca no FIM. unshift: coloca no COMEÇO.
// Os dois devolvem o novo tamanho do array.
function adicionarNoFim() {
  const item = lerItem();
  if (item === "") {
    mostrarArray("Erro: digite um item para adicionar.");
    return;
  }
  const tamanho = carros.push(item);
  mostrarArray(`carros.push("${item}")`, tamanho + " (novo tamanho)");
}

function adicionarNoComeco() {
  const item = lerItem();
  if (item === "") {
    mostrarArray("Erro: digite um item para adicionar.");
    return;
  }
  const tamanho = carros.unshift(item);
  mostrarArray(`carros.unshift("${item}")`, tamanho + " (novo tamanho)");
}


// 3. Remover: pop e shift
// pop: tira o ÚLTIMO. shift: tira o PRIMEIRO.
// Removem UM item por vez e devolvem o item removido.
function removerDoFim() {
  if (carros.length === 0) {
    mostrarArray("O array já está vazio: não há o que remover.");
    return;
  }
  const removido = carros.pop();
  mostrarArray("carros.pop()", removido + " (item removido)");
}

function removerDoComeco() {
  if (carros.length === 0) {
    mostrarArray("O array já está vazio: não há o que remover.");
    return;
  }
  const removido = carros.shift();
  mostrarArray("carros.shift()", removido + " (item removido)");
}


// 4. splice: inserir, trocar ou excluir numa posição
// carros.splice(posição, quantosRemover, novoItem)
//   splice(3, 0, "Uno") -> remove 0 e insere "Uno" na posição 3
//   splice(1, 1, "Uno") -> remove 1 na posição 1 e põe "Uno" no lugar (troca)
//   splice(2, 3)        -> remove 3 itens a partir da posição 2
// Devolve um array com os itens removidos.
function usarSplice(evento) {
  evento.preventDefault(); // formulário não recarrega a página

  const posicao = lerInteiro(document.getElementById("campo-posicao"));
  const quantos = lerInteiro(document.getElementById("campo-quantos"));
  const item = lerItem();

  if (posicao === null || posicao < 0 || posicao > carros.length) {
    mostrarArray(`Erro: a posição vai de 0 a ${carros.length}.`);
    return;
  }
  if (quantos === null || quantos < 0) {
    mostrarArray("Erro: quantos remover precisa ser 0 ou mais.");
    return;
  }

  let removidos;
  let codigo;

  // Item vazio: só remove. Com item: remove e insere.
  if (item === "") {
    removidos = carros.splice(posicao, quantos);
    codigo = `carros.splice(${posicao}, ${quantos})`;
  } else {
    removidos = carros.splice(posicao, quantos, item);
    codigo = `carros.splice(${posicao}, ${quantos}, "${item}")`;
  }

  mostrarArray(codigo, `[${removidos}] (itens removidos)`);
}


// 5. sort: ordenar
// Ordena em ordem alfabética e MUDA o próprio array.
function ordenar() {
  carros.sort();
  mostrarArray("carros.sort()");
}


// 6. Recomeçar
// splice(0, carros.length) esvazia; o for...of põe os 4 de volta.
function recomecar() {
  carros.splice(0, carros.length);
  for (let carro of inicial) {
    carros.push(carro);
  }
  mostrarArray('const carros = ["Gol", "Fusca", "Virtus", "Ka"]');
}


// Ligando à página
// addEventListener = "quando acontecer isso, execute esta função"
document.getElementById("btn-push").addEventListener("click", adicionarNoFim);
document.getElementById("btn-unshift").addEventListener("click", adicionarNoComeco);
document.getElementById("btn-pop").addEventListener("click", removerDoFim);
document.getElementById("btn-shift").addEventListener("click", removerDoComeco);
document.getElementById("form-splice").addEventListener("submit", usarSplice);
document.getElementById("btn-sort").addEventListener("click", ordenar);
document.getElementById("btn-recomecar").addEventListener("click", recomecar);

// Mostra o array assim que a página abre
recomecar();
