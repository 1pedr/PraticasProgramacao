/*
  Recursividade: a função que chama a si mesma
  Toda função recursiva tem duas partes:
  CASO BASE (quando parar) e PASSO RECURSIVO (chamar de novo com um problema menor).

  1. Fatorial recursivo (mostrando as chamadas)
  2. Contagem regressiva: for x recursão
  3. Desafio: fatorial sem recursão (para você fazer)

  Usa: util.js (lerInteiro)
*/


// 1. Fatorial recursivo (mostrando as chamadas)
// 5! = 5 x 4 x 3 x 2 x 1 = 120  ->  fatorial(5) = 5 * fatorial(4)
function fatorial(x) {
  if (x <= 1) {
    return 1;                  // caso base: aqui as chamadas param
  }
  return x * fatorial(x - 1);  // passo recursivo: o mesmo problema, um número menor
}

// Mesma função, anotando cada chamada para enxergar a "pilha".
// nivel = quantas chamadas estão abertas (vira recuo no texto).
function fatorialComPassos(x, nivel, passos) {
  const recuo = "  ".repeat(nivel); // repeat: repete o texto n vezes

  if (x <= 1) {
    passos.push(`${recuo}fatorial(${x}) = 1   <- caso base, começa a voltar`);
    return 1;
  }

  passos.push(`${recuo}fatorial(${x}) = ${x} * fatorial(${x - 1})`);
  const anterior = fatorialComPassos(x - 1, nivel + 1, passos); // espera a chamada de baixo
  const resultado = x * anterior;
  passos.push(`${recuo}fatorial(${x}) = ${x} * ${anterior} = ${resultado}`);

  return resultado;
}

function tratarFatorial(evento) {
  evento.preventDefault(); // não recarrega a página ao enviar

  const saida = document.getElementById("resultado-fatorial");
  const n = lerInteiro(document.getElementById("campo-fatorial")); // util.js: inteiro ou null

  if (n === null || n < 0 || n > 15) {
    saida.textContent = "Erro: digite um número inteiro de 0 a 15.";
    return;
  }

  const passos = []; // array que guarda cada linha (página Arrays)
  const resultado = fatorialComPassos(n, 0, passos);

  saida.textContent =
    "Descendo (abre chamadas) e subindo (devolve resultados):\n\n" +
    passos.join("\n") + // join: junta o array num texto, separando por \n
    `\n\nFatorial de ${n} é ${resultado}`;
}


// 2. Contagem regressiva: for x recursão
// Com for: o laço controla a repetição.
function regressivaComFor(inicio) {
  let texto = "";
  for (let cont = inicio; cont >= 1; cont--) {
    texto += cont + " ";
  }
  return texto;
}

// Com recursão: a própria função se chama com cont - 1.
// cont - 1 não muda a variável: é mais seguro que --cont.
function regressivaRecursiva(cont, num) {
  let texto = cont + " ";
  if (num < cont) {
    texto += regressivaRecursiva(cont - 1, num); // caso base: quando num < cont for falso
  }
  return texto;
}

function tratarRegressiva(evento) {
  evento.preventDefault();

  const saida = document.getElementById("resultado-regressiva");
  const inicio = lerInteiro(document.getElementById("campo-regressiva"));

  if (inicio === null || inicio < 1 || inicio > 50) {
    saida.textContent = "Erro: digite um número inteiro de 1 a 50.";
    return;
  }

  saida.textContent =
    `for:      ${regressivaComFor(inicio)}\n` +
    `recursão: ${regressivaRecursiva(inicio, 1)}\n\n` +
    "Mesmo resultado, caminhos diferentes.";
}


// 3. Desafio: fatorial sem recursão (para você fazer)
// Escreva aqui uma função fatorialComFor(x) usando um laço for.
// Dica: comece com resultado = 1 e multiplique (acumuladora, página Repetição).




// Ligando à página
document.getElementById("form-fatorial").addEventListener("submit", tratarFatorial);
document.getElementById("form-regressiva").addEventListener("submit", tratarRegressiva);
