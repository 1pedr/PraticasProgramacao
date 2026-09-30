/*
  Repetição: for, for...in e for...of

  1. Contar e somar (com teste de mesa)
  2. Tabuada
  3. Contagem regressiva
  4. for...in: percorrer as propriedades de um objeto
  5. for...of: percorrer um array
  6. for...of: percorrer as letras de um texto

  Usa: util.js (lerInteiro, coluna)
*/


// 1. Contar e somar (com teste de mesa)
// O mesmo exemplo do while, agora com for.
function contarComFor(fim) {
  let soma = 0; // acumuladora (aula de repetição): guarda a soma
  let numeros = "";
  let tabela = coluna("i") + "soma\n";

  // for (início; condição; passo)
  // início:   let i = 1   -> roda UMA vez, antes de tudo
  // condição: i <= fim    -> testada ANTES de cada rodada, como no while
  // passo:    i++         -> roda no FIM de cada rodada (i = i + 1)
  for (let i = 1; i <= fim; i++) {
    soma += i;                          // soma = soma + i (operador +=)
    numeros += i + " ";                 // + com texto junta (concatena)
    tabela += coluna(i) + soma + "\n";  // \n quebra a linha
  }

  // Devolve um objeto com 3 valores (mesma ideia do calcular() dos Desafios)
  return { numeros, soma, tabela };
}

function tratarContagem(evento) {
  evento.preventDefault(); // formulário não recarrega a página

  const saida = document.getElementById("resultado-contagem");
  const fim = lerInteiro(document.getElementById("campo-fim")); // util.js: número inteiro ou null

  if (fim === null || fim < 1 || fim > 50) {
    saida.textContent = "Erro: o fim precisa ser um número inteiro de 1 a 50.";
    return; // para aqui, não faz a conta
  }

  const resultado = contarComFor(fim);

  // Template string: crases ` ` e ${variável} (aula de variáveis)
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
    linhas += `${numero} x ${i} = ${numero * i}\n`; // * multiplica
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
// O for também anda para trás: começa alto, condição >= e i-- (i = i - 1).
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


// 4. for...in: percorrer as propriedades de um objeto
// Objeto = um "pacote" de informações com nome: { propriedade: valor, ... }
// O for...in passa por cada NOME de propriedade (nome, telefone, endereco).
// Para pegar o VALOR, usa colchetes: pessoa[atributo]
function listarPropriedades(pessoa) {
  let nomes = "";
  let texto = "";

  for (let atributo in pessoa) {
    nomes += atributo + "\n";                              // só o nome
    texto += atributo + " -> " + pessoa[atributo] + "\n";  // nome e valor, como na aula
  }

  return { nomes, texto };
}

function tratarPessoa(evento) {
  evento.preventDefault();

  const saida = document.getElementById("resultado-pessoa");

  // Monta o objeto com o que foi digitado (.value = texto do campo)
  const pessoa = {
    nome: document.getElementById("campo-nome").value,
    telefone: document.getElementById("campo-telefone").value,
    endereco: document.getElementById("campo-endereco").value,
  };

  const lista = listarPropriedades(pessoa);

  saida.textContent =
    `console.log(atributo):\n${lista.nomes}\n` +
    `console.log(atributo + " -> " + pessoa[atributo]):\n${lista.texto}`;
}


// 5. for...of: percorrer um array
// Array = uma lista de valores entre [ ], separados por vírgula.
// Cada valor tem uma posição (índice) que começa em 0: carros[0] é o primeiro.
// O for...of passa por cada VALOR, sem precisar de contador nem condição.
const carros = ["Gol", "Fusca", "Virtus", "Ka"];

function listarCarros() {
  let texto = "";
  let posicao = 0; // só para mostrar o índice ao lado

  for (let carro of carros) {
    texto += `carros[${posicao}] = ${carro}\n`;
    posicao++;
  }

  return texto;
}

function tratarCarros() {
  const saida = document.getElementById("resultado-carros");

  saida.textContent =
    `const carros = ["Gol", "Fusca", "Virtus", "Ka"];\n\n` +
    listarCarros() +
    `\nO primeiro: carros[0] = ${carros[0]}\n` +
    `Quantos itens: carros.length = ${carros.length}`; // length = tamanho da lista
}


// 6. for...of: percorrer as letras de um texto
// Um texto (string) também é percorrível: cada rodada pega uma letra.
function separarLetras(texto) {
  let letras = "";
  let quantidade = 0; // contadora

  for (let letra of texto) {
    letras += `"${letra}"\n`; // o espaço também conta como letra: " "
    quantidade++;
  }

  return { letras, quantidade };
}

function tratarLetras(evento) {
  evento.preventDefault();

  const saida = document.getElementById("resultado-letras");
  const texto = document.getElementById("campo-texto").value;

  if (texto === "") {
    saida.textContent = "Erro: digite algum texto.";
    return;
  }

  const resultado = separarLetras(texto);

  saida.textContent =
    `for (let letra of "${texto}")\n\n` +
    resultado.letras +
    `\nTotal: ${resultado.quantidade} caracteres (espaços contam)`;
}


// Ligando à página
// addEventListener = "quando acontecer isso, execute esta função"
document.getElementById("form-contagem").addEventListener("submit", tratarContagem);
document.getElementById("form-tabuada").addEventListener("submit", tratarTabuada);
document.getElementById("form-regressiva").addEventListener("submit", tratarRegressiva);
document.getElementById("form-pessoa").addEventListener("submit", tratarPessoa);
document.getElementById("btn-carros").addEventListener("click", tratarCarros);
document.getElementById("form-letras").addEventListener("submit", tratarLetras);
