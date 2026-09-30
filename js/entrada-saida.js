/*
  ENTRADA E SAÍDA
  Saída   = o programa MOSTRA algo para o usuário.
  Entrada = o usuário ENVIA algo para o programa.
*/

// ===================== SAÍDA =====================

// ---------- 1. console.log: mostra no console do navegador ----------
// Abra o console com F12 (aba "Console"). Serve muito para testar seu código.
console.log("Olá! Esta mensagem aparece no console (F12).");

// ---------- 2. alert: abre uma janelinha com um aviso ----------
// A página só continua depois que o usuário clica em OK.
document.getElementById("btn-alert").addEventListener("click", function () {
  alert("Este é um alert!");
});
/*
  addEventListener("click", função) = "quando clicarem neste elemento,
  execute esta função". O botão foi achado pelo id (btn-alert) no HTML.
*/

// ---------- 3. Escrever dentro da página ----------
// É o jeito mais usado em sites de verdade.
mostrar("saida-pagina", "Este texto foi escrito na página pelo JavaScript.");

// ===================== ENTRADA =====================

// ---------- 4. prompt: pergunta algo numa janelinha ----------
document.getElementById("btn-prompt").addEventListener("click", function () {
  // O que o usuário digitar fica guardado na variável "resposta".
  // Se ele clicar em Cancelar, o valor é null.
  const resposta = prompt("Qual é o seu nome?");

  if (resposta) {
    mostrar("saida-prompt", `Prazer, ${resposta}!`);
  } else {
    mostrar("saida-prompt", "Você cancelou ou não digitou nada.");
  }
});

// ---------- 5. confirm: pergunta sim ou não ----------
document.getElementById("btn-confirm").addEventListener("click", function () {
  const aceitou = confirm("Você gosta de programar?"); // true (OK) ou false (Cancelar)
  mostrar("saida-confirm", "Resposta: " + aceitou);
});

// ---------- 6. Campo de formulário (o mais usado na prática) ----------
document.getElementById("btn-campo").addEventListener("click", function () {
  // .value é o que está escrito dentro do campo
  const campo = document.getElementById("campo-nome");
  const valor = campo.value;

  mostrar("saida-campo", `Você digitou: ${valor}`);
});

/*
  ATENÇÃO: tudo que vem de prompt e de campos é TEXTO (string),
  mesmo que o usuário digite um número. Para fazer conta, converta:
    Number("5")  -> 5
*/
document.getElementById("btn-soma").addEventListener("click", function () {
  const a = Number(document.getElementById("num-a").value);
  const b = Number(document.getElementById("num-b").value);

  mostrar("saida-soma", `${a} + ${b} = ${a + b}`);
});
