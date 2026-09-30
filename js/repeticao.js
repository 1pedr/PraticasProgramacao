/*
  Repetição: while e do...while
  Repete um bloco de código enquanto a condição for verdadeira.

  1. Contar com while
  2. Contar com do...while
  3. Mostrar o resultado e o teste de mesa
  4. A diferença: condição falsa desde o começo

  Usa: util.js (lerInteiro)
*/


// Deixa cada coluna do teste de mesa com a mesma largura.
// padEnd(10) completa o texto com espaços até ter 10 caracteres.
function coluna(valor) {
  return String(valor).padEnd(10);
}


// 1. Contar com while
// Testa a condição ANTES de cada rodada.
function contarComWhile(fim, passo) {
  let contador = 1; // contadora: anda de passo em passo
  let soma = 0;     // acumuladora: soma = soma + contador
  let rodada = 0;
  let numeros = "";
  let tabela = coluna("rodada") + coluna("contador") + "soma\n";

  while (contador <= fim) {
    soma += contador;
    rodada++;
    numeros += contador + " ";
    tabela += coluna(rodada) + coluna(contador) + soma + "\n";
    contador += passo; // sem isso, o contador nunca passa do fim: loop infinito!
  }

  return { numeros, soma, tabela };
}


// 2. Contar com do...while
// Mesma lógica, mas a condição fica no FIM (e termina com ;).
function contarComDoWhile(fim, passo) {
  let contador = 1;
  let soma = 0;
  let rodada = 0;
  let numeros = "";
  let tabela = coluna("rodada") + coluna("contador") + "soma\n";

  do {
    soma += contador;
    rodada++;
    numeros += contador + " ";
    tabela += coluna(rodada) + coluna(contador) + soma + "\n";
    contador += passo;
  } while (contador <= fim);

  return { numeros, soma, tabela };
}


// 3. Mostrar o resultado e o teste de mesa
function tratarContagem(evento) {
  evento.preventDefault(); // não recarrega a página ao enviar

  const saida = document.getElementById("resultado-contagem");
  const fim = lerInteiro(document.getElementById("campo-fim"));
  const passo = lerInteiro(document.getElementById("campo-passo"));

  if (fim === null || fim < 1 || fim > 100) {
    saida.textContent = "Erro: o fim precisa ser um número inteiro de 1 a 100.";
    return;
  }
  if (passo === null || passo < 1 || passo > 10) {
    saida.textContent = "Erro: o passo precisa ser um número inteiro de 1 a 10.";
    return;
  }

  // submitter = o botão clicado; data-estrutura diz qual laço usar
  const estrutura = evento.submitter.dataset.estrutura;
  const resultado = estrutura === "while"
    ? contarComWhile(fim, passo)
    : contarComDoWhile(fim, passo);

  saida.textContent =
    `Com ${estrutura}:\n` +
    `Números: ${resultado.numeros}\n` +
    `O somatório é: ${resultado.soma}\n\n` +
    `Teste de mesa:\n${resultado.tabela}`;
}


// 4. A diferença: condição falsa desde o começo
// Conta quantas vezes cada laço executa o bloco.
function rodadasComWhile(inicio, fim) {
  let contador = inicio;
  let vezes = 0;

  while (contador <= fim) {
    vezes++;
    contador++;
  }

  return vezes;
}

function rodadasComDoWhile(inicio, fim) {
  let contador = inicio;
  let vezes = 0;

  do {
    vezes++; // roda pelo menos uma vez, antes de testar
    contador++;
  } while (contador <= fim);

  return vezes;
}

function tratarDiferenca(evento) {
  evento.preventDefault();

  const saida = document.getElementById("resultado-diferenca");
  const inicio = lerInteiro(document.getElementById("campo-inicio"));
  const fim = 10;

  if (inicio === null || inicio < 0 || inicio > 100) {
    saida.textContent = "Erro: digite um número inteiro de 0 a 100.";
    return;
  }

  saida.textContent =
    `Condição: contador <= ${fim}, começando em ${inicio}\n` +
    `while     executou ${rodadasComWhile(inicio, fim)} vez(es)\n` +
    `do...while executou ${rodadasComDoWhile(inicio, fim)} vez(es)`;
}


// Ligando à página
document.getElementById("form-contagem").addEventListener("submit", tratarContagem);
document.getElementById("form-diferenca").addEventListener("submit", tratarDiferenca);
