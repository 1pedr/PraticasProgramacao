/*
  Desafios
  Praticar entrada, saída e operadores.

  1. Soma com prompt e alert
  2. Calculadora de operações

  Usa: util.js (converterParaNumero, lerNumero)
*/


// 1. Soma com prompt e alert
// Teste com 2 e 3: o certo é 5.
function somarComPrompt() {
  const primeiro = converterParaNumero(prompt("Digite o primeiro número:"));
  const segundo = converterParaNumero(prompt("Digite o segundo número:"));

  if (primeiro === null || segundo === null) {
    alert("Erro: digite dois números válidos.");
    return;
  }

  alert("Resultado: " + (primeiro + segundo));
}


// 2. Calculadora de operações
// Devolve { simbolo, resultado }, ou { erro } quando a conta não é possível.
function calcular(operacao, a, b) {
  if (operacao === "somar") {
    return { simbolo: "+", resultado: a + b };
  } else if (operacao === "subtrair") {
    return { simbolo: "-", resultado: a - b };
  } else if (operacao === "multiplicar") {
    return { simbolo: "×", resultado: a * b };
  } else if (operacao === "dividir") {
    if (b === 0) return { erro: "Erro: não é possível dividir por zero." };
    return { simbolo: "÷", resultado: a / b };
  } else if (operacao === "resto") {
    if (b === 0) return { erro: "Erro: não é possível calcular resto com zero." };
    return { simbolo: "%", resultado: a % b };
  } else if (operacao === "potencia") {
    return { simbolo: "elevado a", resultado: a ** b };
  }

  return { erro: "Erro: operação desconhecida." };
}

function tratarOperacao(evento) {
  evento.preventDefault();

  const saida = document.getElementById("resultado-operacao");
  const a = lerNumero(document.getElementById("numero-a"));
  const b = lerNumero(document.getElementById("numero-b"));

  if (a === null || b === null) {
    saida.textContent = "Erro: digite dois números válidos.";
    return;
  }

  // submitter = o botão clicado; dataset.operacao lê o data-operacao dele
  const operacao = evento.submitter.dataset.operacao;
  const conta = calcular(operacao, a, b);

  if (conta.erro) {
    saida.textContent = conta.erro;
    return;
  }

  saida.textContent = `${a} ${conta.simbolo} ${b} = ${conta.resultado}`;
}


// Ligando à página
document.getElementById("btn-desafio").addEventListener("click", somarComPrompt);
document.getElementById("form-operacoes").addEventListener("submit", tratarOperacao);
