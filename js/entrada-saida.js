/*
  Entrada e saída
  Saída: o programa MOSTRA algo. Entrada: o usuário ENVIA algo.

  1. console.log
  2. alert
  3. Escrever na página
  4. prompt
  5. confirm
  6. Campo de formulário
  7. Texto vira número

  Usa: util.js (mostrar)
*/


// 1. console.log: mensagem no console (F12 > Console). Ótimo para testar.
function mostrarNoConsole() {
  console.log("Olá! Esta mensagem aparece no console (F12).");
}


// 2. alert: janelinha de aviso. A página espera o OK.
function mostrarAlert() {
  alert("Este é um alert!");
}


// 3. Escrever na página: o jeito usado em sites de verdade
function escreverNaPagina() {
  mostrar("saida-pagina", "Este texto foi escrito na página pelo JavaScript.");
}


// 4. prompt: pergunta numa janelinha. Cancelar devolve null.
function perguntarNome() {
  const resposta = prompt("Qual é o seu nome?");

  if (resposta) {
    mostrar("saida-prompt", `Prazer, ${resposta}!`);
  } else {
    mostrar("saida-prompt", "Você cancelou ou não digitou nada.");
  }
}


// 5. confirm: pergunta sim ou não. OK = true, Cancelar = false.
function fazerPergunta() {
  const aceitou = confirm("Você gosta de programar?");
  mostrar("saida-confirm", "Resposta: " + aceitou);
}


// 6. Campo de formulário: .value é o que está escrito no campo
function lerCampoNome() {
  const campo = document.getElementById("campo-nome");
  mostrar("saida-campo", `Você digitou: ${campo.value}`);
}


// 7. Texto vira número
// Tudo que vem de prompt e de campos é TEXTO. Para fazer conta: Number("5") -> 5
function somarCampos() {
  const a = Number(document.getElementById("num-a").value);
  const b = Number(document.getElementById("num-b").value);

  mostrar("saida-soma", `${a} + ${b} = ${a + b}`);
}


// Ligando à página
// Estes dois rodam assim que a página abre:
mostrarNoConsole();
escreverNaPagina();

// Os outros rodam no clique. addEventListener = "quando clicar, execute esta função".
document.getElementById("btn-alert").addEventListener("click", mostrarAlert);
document.getElementById("btn-prompt").addEventListener("click", perguntarNome);
document.getElementById("btn-confirm").addEventListener("click", fazerPergunta);
document.getElementById("btn-campo").addEventListener("click", lerCampoNome);
document.getElementById("btn-soma").addEventListener("click", somarCampos);
