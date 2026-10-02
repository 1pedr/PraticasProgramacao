/*
  Funções
  Bloco de código com nome: escrito UMA vez, chamado quantas vezes quiser.

  1. Anatomia: parâmetro, argumento e return
  2. Três jeitos de escrever (declaração, expressão, arrow)
  3. Escopo: o que nasce dentro da função fica lá dentro
  4. Calculadora (como se faz nas empresas)
  5. Geradora: a função que pausa

  Usa: util.js (lerNumero, mostrar)
*/


// 1. Anatomia: parâmetro, argumento e return
// n1 e n2 são PARÂMETROS. Quem chama passa os ARGUMENTOS: calcular(2, 5).
// Parâmetro sem argumento vale undefined (não dá erro).
function calcular(n1, n2) {
  mostrar("resultado-anatomia", `calcular(${n1}, ${n2})  ->  n1 = ${n1}, n2 = ${n2}`);
}


// 2. Três jeitos de escrever (declaração, expressão, arrow)
// Mesma conta, três sintaxes. O resultado é idêntico.
function somarDeclaracao(x, y) {          // declaração: pode ser chamada antes (hoisting)
  return x + y;
}

const somarExpressao = function (x, y) {  // expressão: guardada numa variável
  return x + y;
};

const somarFlecha = (x, y) => x + y;      // arrow: uma linha, sem { } e sem return

function tratarFormas(evento) {
  evento.preventDefault(); // não recarrega a página ao enviar

  const saida = document.getElementById("resultado-formas");
  const x = lerNumero(document.getElementById("campo-x")); // util.js: número ou null
  const y = lerNumero(document.getElementById("campo-y"));

  if (x === null || y === null) {
    saida.textContent = "Erro: digite os dois números.";
    return;
  }

  saida.textContent =
    `somarDeclaracao(${x}, ${y}) = ${somarDeclaracao(x, y)}\n` +
    `somarExpressao(${x}, ${y})  = ${somarExpressao(x, y)}\n` +
    `somarFlecha(${x}, ${y})     = ${somarFlecha(x, y)}`;
}


// 3. Escopo: o que nasce dentro da função fica lá dentro
// quadrado() só existe dentro de addQuadrado().
function addQuadrado(a, b) {
  function quadrado(x) {
    return x * x;
  }

  return quadrado(a) + quadrado(b);
}

function tratarQuadrado(evento) {
  evento.preventDefault();

  const saida = document.getElementById("resultado-quadrado");
  const a = lerNumero(document.getElementById("campo-a"));
  const b = lerNumero(document.getElementById("campo-b"));

  if (a === null || b === null) {
    saida.textContent = "Erro: digite os dois números.";
    return;
  }

  saida.textContent = `addQuadrado(${a}, ${b}) = ${a * a} + ${b * b} = ${addQuadrado(a, b)}`;
}


// 4. Calculadora (como se faz nas empresas)
// a) As contas: funções pequenas e "puras" (só recebem e devolvem, não mexem na página).
const somar = (a, b) => a + b;
const subtrair = (a, b) => a - b;
const multiplicar = (a, b) => a * b;
const dividir = (a, b) => a / b;

// b) UMA função cuida da tela: lê os campos, valida e mostra.
//    conta é uma FUNÇÃO recebida como argumento (somar, subtrair...).
function mostrarConta(conta, simbolo) {
  const saida = document.getElementById("resultado-calc");
  const n1 = lerNumero(document.getElementById("calc-n1"));
  const n2 = lerNumero(document.getElementById("calc-n2"));

  if (n1 === null || n2 === null) {
    saida.textContent = "Erro: digite os dois números.";
    return;
  }
  if (conta === dividir && n2 === 0) {
    saida.textContent = "Não dá para dividir por zero.";
    return;
  }

  saida.textContent = `${n1} ${simbolo} ${n2} = ${conta(n1, n2)}`;
}


// 5. Geradora: a função que pausa
// function* marca a geradora; cada yield pausa e entrega um valor.
// next() continua até o próximo yield e devolve { value, done }.
function* testandoGeradora() {
  yield 1;
  yield 2;
  yield 3;
}

let funcaoGeradora = testandoGeradora();

function proximo() {
  const passo = funcaoGeradora.next();
  const fim = passo.done ? "   acabou" : "";
  mostrar("resultado-geradora", `next() -> { value: ${passo.value}, done: ${passo.done} }${fim}`);
}

function recomecarGeradora() {
  funcaoGeradora = testandoGeradora(); // chamar de novo cria uma geradora nova
  document.getElementById("resultado-geradora").textContent = "";
}


// Ligando à página
// Sem parênteses: entregamos a função para o navegador chamar no clique.
// Com valores, embrulhamos numa arrow: () => calcular(2, 5).
document.getElementById("btn-calcular-2-5").addEventListener("click", () => calcular(2, 5));
document.getElementById("btn-calcular-vazio").addEventListener("click", () => calcular());
document.getElementById("form-formas").addEventListener("submit", tratarFormas);
document.getElementById("form-quadrado").addEventListener("submit", tratarQuadrado);
document.getElementById("btn-somar").addEventListener("click", () => mostrarConta(somar, "+"));
document.getElementById("btn-subtrair").addEventListener("click", () => mostrarConta(subtrair, "-"));
document.getElementById("btn-multiplicar").addEventListener("click", () => mostrarConta(multiplicar, "x"));
document.getElementById("btn-dividir").addEventListener("click", () => mostrarConta(dividir, "/"));
document.getElementById("btn-next").addEventListener("click", proximo);
document.getElementById("btn-recomecar").addEventListener("click", recomecarGeradora);
