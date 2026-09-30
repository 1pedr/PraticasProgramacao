/*
  Verificador de notas
  Lê 3 notas, calcula a média e classifica com if / else if / else.

  1. Classificar a média
  2. Ler o formulário e mostrar

  Usa: util.js (lerNumero)
*/


// 1. Classificar a média
// Testa de cima para baixo e executa o PRIMEIRO bloco verdadeiro.
function classificarMedia(media) {
  if (media >= 7) {
    return "Aprovado";
  } else if (media >= 5) {
    return "Recuperação";
  } else {
    return "Reprovado";
  }
}

function notaEhValida(nota) {
  return nota !== null && nota >= 0 && nota <= 10;
}


// 2. Ler o formulário e mostrar
function tratarNotas(evento) {
  evento.preventDefault(); // não recarrega a página ao enviar

  const resultadoNota = document.getElementById("resultado-nota");
  const resultadoTernario = document.getElementById("resultado-ternario");

  const nota1 = lerNumero(document.getElementById("nota-1"));
  const nota2 = lerNumero(document.getElementById("nota-2"));
  const nota3 = lerNumero(document.getElementById("nota-3"));

  if (!notaEhValida(nota1) || !notaEhValida(nota2) || !notaEhValida(nota3)) {
    resultadoNota.textContent = "Erro: digite três notas válidas entre 0 e 10.";
    resultadoTernario.textContent = "";
    return;
  }

  const media = (nota1 + nota2 + nota3) / 3;

  // Ternário: condição ? se verdadeira : se falsa
  const passou = media >= 7 ? "Sim" : "Não";

  resultadoNota.textContent =
    `Notas: ${nota1}, ${nota2} e ${nota3}. ` +
    `Média: ${media.toFixed(2)}. Resultado: ${classificarMedia(media)}.`;
  resultadoTernario.textContent = `Ternário: passou na média? ${passou}.`;
}


// Ligando à página
document.getElementById("form-nota").addEventListener("submit", tratarNotas);
