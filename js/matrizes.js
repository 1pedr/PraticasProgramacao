/*
  Arrays multidimensionais (array de arrays, ou matriz)
  Cada item de funcionarios é OUTRO array: [nome, idade, salário].

  1. Os dados
  2. Mostrar como tabela (como o console.table)
  3. Acessar um valor: funcionarios[linha][coluna]
  4. Percorrer tudo: for dentro de for (aninhado)
  5. Array de objetos
  6. Desafio: incluir e excluir (para você fazer)

  Usa: util.js (lerInteiro, coluna)
*/

// 1. Os dados
// Array externo = a lista de funcionários (as LINHAS).
// Cada array interno = um funcionário (as COLUNAS: 0 nome, 1 idade, 2 salário).
const funcionarios = [
  ["João", 24, 1800],
  ["Maria", 30, 3000],
  ["Pedro", 28, 4100],
  ["Letícia", 31, 2800],
  ["Lara", 29, 3500],
];

const nomesDasColunas = ["nome", "idade", "salário"]; // só para explicar na tela

// 2. Mostrar como tabela (como o console.table)
function montarTabela() {
  let tabela = coluna("(index)") + coluna("0") + coluna("1") + "2\n";

  // for...of no array externo: cada "linha" é um array [nome, idade, salário]
  let i = 0; // contadora para mostrar o índice da linha
  for (let linha of funcionarios) {
    tabela += coluna(i) + coluna(linha[0]) + coluna(linha[1]) + linha[2] + "\n";
    i++;
  }

  return tabela;
}

function tratarTabela() {
  document.getElementById("resultado-tabela").textContent =
    "console.table(funcionarios)\n\n" + montarTabela();
}

// 3. Acessar um valor: funcionarios[linha][coluna]
// 1º colchete escolhe a LINHA (o funcionário); 2º escolhe a COLUNA (o dado).
function tratarAcesso(evento) {
  evento.preventDefault(); // não recarrega a página ao enviar

  const saida = document.getElementById("resultado-acesso");
  const i = lerInteiro(document.getElementById("campo-linha"));
  const j = lerInteiro(document.getElementById("campo-coluna"));

  // length - 1 = último índice (5 linhas: de 0 a 4)
  if (i === null || i < 0 || i > funcionarios.length - 1) {
    saida.textContent = `Erro: a linha vai de 0 a ${funcionarios.length - 1}.`;
    return;
  }
  if (j === null || j < 0 || j > 2) {
    saida.textContent = "Erro: a coluna vai de 0 a 2.";
    return;
  }

  const linha = funcionarios[i]; // um array: ["João", 24, 1800]

  saida.textContent =
    `funcionarios[${i}]      = [${linha}]   (a linha inteira)\n` +
    `funcionarios[${i}][${j}]   = ${linha[j]}   (o ${nomesDasColunas[j]} de ${linha[0]})`;
}

// 4. Percorrer tudo: for dentro de for (aninhado)
// Para CADA rodada do for de fora (i = linha),
// o for de dentro roda INTEIRO (j = 0, 1, 2).
function percorrer() {
  let texto = coluna("i") + coluna("j") + "funcionarios[i][j]\n";
  let rodadas = 0; // contadora: quantas vezes o for de dentro rodou

  for (let i = 0; i < funcionarios.length; i++) {
    // linhas
    for (let j = 0; j < funcionarios[i].length; j++) {
      // colunas da linha i
      texto += coluna(i) + coluna(j) + funcionarios[i][j] + "\n";
      rodadas++;
    }
    texto += "-- fim da linha " + i + ": o for de dentro recomeça --\n";
  }

  // 5 linhas x 3 colunas = 15 valores
  document.getElementById("resultado-percorrer").textContent =
    texto +
    `\nTotal: ${funcionarios.length} linhas x 3 colunas = ${rodadas} valores`;
}

// 5. Array de objetos
// Cada item é um OBJETO { }: em vez de coluna 0, 1, 2, cada dado tem NOME.
// pessoas[2]         -> o 3º objeto da lista (índice começa em 0)
// pessoas[2].nome    -> a propriedade nome dele (ponto)
// pessoas[2]["nome"] -> a mesma coisa (colchetes com o nome entre aspas)
const pessoas = [
  { nome: "Pedroka", telefone: "(55) 99607-4321", endereco: "ABC" },
  { nome: "Maria", telefone: "(61) 98765-4566", endereco: "DEF" },
  { nome: "José", telefone: "(61) 98765-7777", endereco: "GHI" },
  { nome: "Antônio", telefone: "(61) 98765-8888", endereco: "JKL" },
];

function tratarPessoa(evento) {
  evento.preventDefault();

  const saida = document.getElementById("resultado-pessoas");
  const i = lerInteiro(document.getElementById("campo-pessoa"));
  const propriedade = document.getElementById("campo-propriedade").value; // o value do <option> escolhido

  if (i === null || i < 0 || i > pessoas.length - 1) {
    saida.textContent = `Erro: a posição vai de 0 a ${pessoas.length - 1}.`;
    return;
  }

  const pessoa = pessoas[i]; // um objeto inteiro

  // Com o nome numa variável, só os colchetes funcionam: pessoa[propriedade]
  saida.textContent =
    `pessoas[${i}] = { nome: ${pessoa.nome}, telefone: ${pessoa.telefone}, endereco: ${pessoa.endereco} }\n\n` +
    `pessoas[${i}].${propriedade}    = ${pessoa[propriedade]}\n` +
    `pessoas[${i}]["${propriedade}"] = ${pessoa[propriedade]}   (mesma coisa)`;
}

// 6. Desafio: incluir e excluir (para você fazer)
// Escreva aqui suas funções. Dicas: push, pop, shift, unshift e splice
// funcionam igual no array externo: cada item é um array inteiro.
// Depois de mudar, chame tratarTabela() para ver o resultado.

// Ligando à página
document.getElementById("btn-tabela").addEventListener("click", tratarTabela);
document.getElementById("form-acesso").addEventListener("submit", tratarAcesso);
document.getElementById("btn-percorrer").addEventListener("click", percorrer);
document.getElementById("form-pessoa").addEventListener("submit", tratarPessoa);

// Mostra a tabela assim que a página abre
tratarTabela();
