/*
  DESAFIO: SOMA
  Peça dois números com prompt() e mostre a soma com alert().

  Teste com 2 e 3. O resultado certo é 5.
*/

// Este código roda quando você clica no botão "Testar desafio".
document.getElementById("btn-desafio").addEventListener("click", function () {
  // ===== Escreva sua solução aqui =====
  const primeiroValor = prompt("Digite o primeiro número:");
  const segundoValor = prompt("Digite o segundo número:");

  if (
    primeiroValor === null ||
    primeiroValor.trim() === "" ||
    !Number.isFinite(Number(primeiroValor)) ||
    segundoValor === null ||
    segundoValor.trim() === "" ||
    !Number.isFinite(Number(segundoValor))
  ) {
    alert("Erro: digite dois números válidos.");
    return;
  }

  const primeiroNumero = Number(primeiroValor);
  const segundoNumero = Number(segundoValor);
  const soma = primeiroNumero + segundoNumero;

  alert("Resultado: " + soma);
});
