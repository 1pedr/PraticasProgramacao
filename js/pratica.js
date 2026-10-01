/*
  Prática: juntando arrays, matrizes, funções e recursividade

  1. Jogo da velha: o estado do jogo
  2. Começar: criar a matriz 3x3
  3. Exibir o tabuleiro
  4. Jogar: validar, marcar e passar a vez
  5. Checar o vencedor (somas de linhas, colunas e diagonais)
  6. Fibonacci: recursivo x com for
  7. Desafio: placar (para você fazer)

  Usa: util.js (lerInteiro)
*/


// 1. Jogo da velha: o estado do jogo
// Matriz 3x3 de números: 0 = vazio, 1 = X, -1 = O.
// Com 1 e -1, uma linha completa soma 3 (X ganhou) ou -3 (O ganhou).
let tabuleiro = [];
let vez = 1;          // de quem é a vez: 1 (X) ou -1 (O)
let jogadas = 0;      // contadora: com 9 jogadas sem vencedor, deu velha
let fimDeJogo = false;

const simbolo = (valor) => (valor === 1 ? "X" : valor === -1 ? "O" : "—"); // arrow + ternário


// 2. Começar: criar a matriz 3x3
// for aninhado (página Matrizes): 3 linhas, cada uma com 3 zeros.
function iniciar() {
  tabuleiro = [];
  for (let i = 0; i < 3; i++) {
    tabuleiro.push([0, 0, 0]); // push (página Arrays): adiciona uma linha
  }

  vez = 1;
  jogadas = 0;
  fimDeJogo = false;

  exibir();
  avisar(`Vez do X`);
}

function avisar(texto) {
  document.getElementById("aviso").textContent = texto;
}


// 3. Exibir o tabuleiro
// Monta uma <table> como texto e entrega ao innerHTML.
// Aqui o innerHTML é seguro: o conteúdo é nosso (X, O, —), não digitado.
function exibir() {
  let html = '<table class="tabuleiro">';

  for (let i = 0; i < 3; i++) {
    html += "<tr>";
    for (let j = 0; j < 3; j++) {
      html += `<td>${simbolo(tabuleiro[i][j])}</td>`;
    }
    html += "</tr>";
  }

  html += "</table>";
  document.getElementById("board").innerHTML = html;
}


// 4. Jogar: validar, marcar e passar a vez
function jogar(evento) {
  evento.preventDefault(); // não recarrega a página ao enviar

  if (fimDeJogo) {
    avisar("O jogo acabou. Clique em Novo jogo.");
    return;
  }

  // A pessoa digita 1 a 3; o índice vai de 0 a 2: por isso o - 1
  const linha = lerInteiro(document.getElementById("campo-linha"));
  const coluna = lerInteiro(document.getElementById("campo-coluna"));

  if (linha === null || coluna === null || linha < 1 || linha > 3 || coluna < 1 || coluna > 3) {
    avisar("Digite linha e coluna de 1 a 3.");
    return;
  }

  const i = linha - 1;
  const j = coluna - 1;

  if (tabuleiro[i][j] !== 0) {
    avisar(`Campo já marcado! Ainda é a vez do ${simbolo(vez)}.`);
    return;
  }

  tabuleiro[i][j] = vez;
  jogadas++;
  exibir();

  const vitoria = checar();

  if (vitoria !== "") {
    avisar(`${simbolo(vez)} ganhou! ${vitoria} preenchida.`);
    fimDeJogo = true;
  } else if (jogadas === 9) {
    avisar("Deu velha! Ninguém ganhou.");
    fimDeJogo = true;
  } else {
    vez = -vez; // troca 1 por -1 e vice-versa
    avisar(`Vez do ${simbolo(vez)}`);
  }
}


// 5. Checar o vencedor (somas de linhas, colunas e diagonais)
// Devolve onde houve vitória ("Linha 2", "Diagonal"...) ou "" se ninguém ganhou.
function checar() {
  const t = tabuleiro; // nome curto só para as contas caberem na linha

  for (let k = 0; k < 3; k++) {
    const somaLinha = t[k][0] + t[k][1] + t[k][2];
    const somaColuna = t[0][k] + t[1][k] + t[2][k];

    if (somaLinha === 3 || somaLinha === -3) return `Linha ${k + 1}`;
    if (somaColuna === 3 || somaColuna === -3) return `Coluna ${k + 1}`;
  }

  const diagonal1 = t[0][0] + t[1][1] + t[2][2]; // \
  const diagonal2 = t[0][2] + t[1][1] + t[2][0]; // /

  if (diagonal1 === 3 || diagonal1 === -3 || diagonal2 === 3 || diagonal2 === -3) {
    return "Diagonal";
  }

  return "";
}


// 6. Fibonacci: recursivo x com for
// Cada número é a soma dos dois anteriores: 0, 1, 1, 2, 3, 5, 8...
let chamadas = 0; // contadora: quantas vezes a recursiva foi chamada

function fibonacci(n) {
  chamadas++;
  if (n === 0) return 0;                       // caso base
  if (n === 1) return 1;                       // caso base
  return fibonacci(n - 1) + fibonacci(n - 2);  // dois passos recursivos
}

// Com for: guarda os dois últimos e anda para frente. Uma volta por número.
function fibonacciComFor(n) {
  let anterior = 0;
  let atual = 1;
  if (n === 0) return 0;

  for (let i = 2; i <= n; i++) {
    const proximo = anterior + atual;
    anterior = atual;
    atual = proximo;
  }

  return atual;
}

function tratarFibonacci(evento) {
  evento.preventDefault();

  const saida = document.getElementById("resultado-fibonacci");
  const n = lerInteiro(document.getElementById("campo-fibonacci"));

  if (n === null || n < 1 || n > 30) {
    saida.textContent = "Erro: digite um número inteiro de 1 a 30.";
    return;
  }

  // Os n primeiros números, como no for + console.log
  const sequencia = [];
  for (let k = 0; k < n; k++) {
    sequencia.push(fibonacciComFor(k));
  }

  const ultimo = n - 1;
  chamadas = 0;
  const recursivo = fibonacci(ultimo);

  saida.textContent =
    `Os ${n} primeiros: ${sequencia.join(", ")}\n\n` +
    `fibonacci(${ultimo}) recursivo = ${recursivo}   (${chamadas} chamadas)\n` +
    `fibonacciComFor(${ultimo})      = ${fibonacciComFor(ultimo)}   (${Math.max(ultimo - 1, 0)} voltas no for)`;
}


// 7. Desafio: placar (para você fazer)
// Guarde quantas vitórias X e O já tiveram e mostre depois de cada jogo.
// Dica: duas variáveis contadoras fora das funções; some na vitória (seção 4).




// Ligando à página
document.getElementById("form-jogada").addEventListener("submit", jogar);
document.getElementById("btn-novo-jogo").addEventListener("click", iniciar);
document.getElementById("form-fibonacci").addEventListener("submit", tratarFibonacci);

iniciar(); // monta o tabuleiro assim que a página abre (no lugar do onload)
