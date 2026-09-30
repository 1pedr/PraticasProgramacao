/*
  Repetição: while e do...while
  Repete um bloco de código enquanto a condição for verdadeira.

  1. Contar com while
  2. Contar com do...while
  3. Mostrar o resultado e o teste de mesa
  4. A diferença: condição falsa desde o começo
  5. Média de N notas (exemplo da aula, com prompt)

  Usa: util.js (lerInteiro, converterParaNumero, converterParaInteiro, coluna)
*/


// 1. Contar com while
// Testa a condição ANTES de cada rodada.
function contarComWhile(inicio, fim, passo) {
  let contador = inicio; // contadora: anda de passo em passo
  let soma = 0;          // acumuladora: soma = soma + contador
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

  return { numeros, soma, tabela, rodada };
}


// 2. Contar com do...while
// Mesma lógica, mas a condição fica no FIM (e termina com ;).
function contarComDoWhile(inicio, fim, passo) {
  let contador = inicio;
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

  return { numeros, soma, tabela, rodada };
}


// 3. Mostrar o resultado e o teste de mesa
function tratarContagem(evento) {
  evento.preventDefault(); // não recarrega a página ao enviar

  const saida = document.getElementById("resultado-contagem");
  const inicio = lerInteiro(document.getElementById("campo-inicio-contagem"));
  const fim = lerInteiro(document.getElementById("campo-fim"));
  const passo = lerInteiro(document.getElementById("campo-passo"));

  if (inicio === null || inicio < 0 || inicio > 100) {
    saida.textContent = "Erro: o início precisa ser um número inteiro de 0 a 100.";
    return;
  }
  if (fim === null || fim < 1 || fim > 50) {
    saida.textContent = "Erro: o fim precisa ser um número inteiro de 1 a 50.";
    return;
  }
  if (passo === null || passo < 1 || passo > 10) {
    saida.textContent = "Erro: o passo precisa ser um número inteiro de 1 a 10.";
    return;
  }

  // submitter = o botão clicado; data-estrutura diz qual laço usar.
  // Navegador antigo não tem submitter: usa o while.
  const estrutura = evento.submitter ? evento.submitter.dataset.estrutura : "while";
  const resultado = estrutura === "while"
    ? contarComWhile(inicio, fim, passo)
    : contarComDoWhile(inicio, fim, passo);

  // O código que acabou de rodar, com os valores digitados
  const codigo = estrutura === "while"
    ? `let contador = ${inicio};\n` +
      `while (contador <= ${fim}) {   // testa ANTES\n` +
      `  ...\n` +
      `  contador += ${passo};\n` +
      `}`
    : `let contador = ${inicio};\n` +
      `do {\n` +
      `  ...\n` +
      `  contador += ${passo};\n` +
      `} while (contador <= ${fim});   // testa DEPOIS`;

  // Nenhuma rodada: só acontece no while, quando a condição já começa falsa
  if (resultado.rodada === 0) {
    saida.textContent =
      `${codigo}\n\n` +
      `O laço rodou 0 vezes: ${inicio} <= ${fim} já era falso,\n` +
      `então o while nem entrou no bloco.`;
    return;
  }

  saida.textContent =
    `${codigo}\n\n` +
    `O laço rodou ${resultado.rodada} vez(es).\n` +
    `Números: ${resultado.numeros}\n` +
    `O somatório é: ${resultado.soma}\n\n` +
    `Teste de mesa:\n${resultado.tabela}`;
}


// 4. A diferença: condição falsa desde o começo
// Reaproveita as funções 1 e 2 e compara quantas rodadas cada uma deu.
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
    `while     executou ${contarComWhile(inicio, fim, 1).rodada} vez(es)\n` +
    `do...while executou ${contarComDoWhile(inicio, fim, 1).rodada} vez(es)`;
}


// 5. Média de N notas (exemplo da aula, com prompt)
// Pergunta quantas notas, lê uma por rodada e acumula na soma.

// toFixed(2) deixa 2 casas; Number() tira os zeros do fim.
// Evita mostrar 7.1 + 8.2 = 15.299999999999999
function arredondar(numero) {
  return Number(numero.toFixed(2));
}

function mediaDasNotas() {
  const saida = document.getElementById("resultado-notas");

  const resposta = prompt("Quantas notas?");

  if (resposta === null) {
    saida.textContent = "Cancelado.";
    return;
  }

  const qtd = converterParaInteiro(resposta);

  if (qtd === null || qtd < 1 || qtd > 20) {
    saida.textContent = "Erro: a quantidade precisa ser um número inteiro de 1 a 20.";
    return;
  }

  let contador = 1; // contadora: qual nota estamos pedindo
  let soma = 0;     // acumuladora: soma das notas
  let nota = 0;
  let tabela = coluna("contador") + coluna("qtd") + coluna("nota") + "soma\n";
  tabela += coluna(contador) + coluna(qtd) + coluna("-") + soma + "   (valor inicial)\n";

  while (contador <= qtd) {
    const texto = prompt(`Digite a nota ${contador} (0 a 10)`);

    if (texto === null) {
      saida.textContent = "Cancelado: nenhuma média foi calculada.";
      return;
    }

    // converterParaNumero usa Number() por dentro.
    // Sem converter, "7" + "8" vira "78" (junta os textos).
    nota = converterParaNumero(texto);

    if (nota === null || nota < 0 || nota > 10) {
      alert("Nota inválida: digite um número de 0 a 10.");
      continue; // volta ao começo SEM contador++: pede a mesma nota de novo
    }

    soma += nota;
    tabela += coluna(contador) + coluna(qtd) + coluna(nota) + arredondar(soma) + "\n";
    contador++;
  }

  const media = soma / qtd;

  saida.textContent =
    `Teste de mesa (como a tabela do Excel da aula):\n${tabela}\n` +
    `Condição final: ${contador} <= ${qtd} é false, o laço para.\n\n` +
    `Soma: ${arredondar(soma)}\n` +
    `Média: ${arredondar(soma)} / ${qtd} = ${media.toFixed(2)}`;
}


// Ligando à página
document.getElementById("form-contagem").addEventListener("submit", tratarContagem);
document.getElementById("form-diferenca").addEventListener("submit", tratarDiferenca);
document.getElementById("btn-notas").addEventListener("click", mediaDasNotas);
