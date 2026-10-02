/*
  Switch case
  Compara UMA variável com vários valores exatos (os "cases").

  1. Nome do mês
  2. Média e conceito (cases empilhados)
  3. Salário com e sem break
  4. Aumento por cargo (switch com texto)

  Cada parte tem duas funções:
  - uma com o switch, que recebe valores e DEVOLVE o resultado
  - uma "tratar...", que lê o formulário e mostra na página

  Usa: util.js (lerNumero, lerInteiro)
*/


// 1. Nome do mês
function obterNomeDoMes(mes) {
  let nomeMes;

  switch (mes) {
    case 1:
      nomeMes = "Janeiro";
      break;
    case 2:
      nomeMes = "Fevereiro";
      break;
    case 3:
      nomeMes = "Março";
      break;
    case 4:
      nomeMes = "Abril";
      break;
    case 5:
      nomeMes = "Maio";
      break;
    case 6:
      nomeMes = "Junho";
      break;
    case 7:
      nomeMes = "Julho";
      break;
    case 8:
      nomeMes = "Agosto";
      break;
    case 9:
      nomeMes = "Setembro";
      break;
    case 10:
      nomeMes = "Outubro";
      break;
    case 11:
      nomeMes = "Novembro";
      break;
    case 12:
      nomeMes = "Dezembro";
      break;
    default:
      nomeMes = "Mês inexistente";
  }

  return nomeMes; // um return só, fora do switch: não repete em cada case
}

function tratarMes(evento) {
  evento.preventDefault(); // não recarrega a página ao enviar

  const saida = document.getElementById("resultado-mes");
  const mes = lerInteiro(document.getElementById("campo-mes"));

  if (mes === null) {
    saida.textContent = "Erro: digite um número inteiro.";
    return;
  }

  saida.textContent = "O mês escolhido é: " + obterNomeDoMes(mes);
}


// 2. Média e conceito (cases empilhados)
// Cases seguidos sem break caem todos no mesmo bloco.
function classificarMedia(media) {
  let situacao;

  switch (media) {
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
      situacao = "Reprovado";
      break;

    case 5:
    case 6:
      situacao = "Recuperação";
      break;

    case 7:
    case 8:
    case 9:
    case 10:
      situacao = "Aprovado";
      break;

    default:
      situacao = "Nota inválida";
  }

  return situacao;
}

function notaEhValida(nota) {
  return nota !== null && nota >= 0 && nota <= 10;
}

function tratarMedia(evento) {
  evento.preventDefault();

  const saida = document.getElementById("resultado-media");

  const n1 = lerNumero(document.getElementById("nota-1"));
  const n2 = lerNumero(document.getElementById("nota-2"));
  const n3 = lerNumero(document.getElementById("nota-3"));
  const n4 = lerNumero(document.getElementById("nota-4"));

  if (!notaEhValida(n1) || !notaEhValida(n2) || !notaEhValida(n3) || !notaEhValida(n4)) {
    saida.textContent = "Erro: digite as 4 notas, entre 0 e 10.";
    return;
  }

  const media = (n1 + n2 + n3 + n4) / 4;

  // O switch só compara valores exatos: Math.floor tira os decimais (6.99 -> 6)
  const situacao = classificarMedia(Math.floor(media));

  saida.textContent = `Média ${media.toFixed(2)}: ${situacao}`;
}


// 3. Salário com e sem break
// Especialista +5%, mestre +10%, doutor +15% (o doutor é o default).
const SALARIO_BASE = 2000;

// Com break: só o case escolhido roda.
function calcularSalarioComBreak(titulacao) {
  let salario = SALARIO_BASE;

  switch (titulacao) {
    case "especialista":
      salario *= 1.05; // salario = salario * 1.05
      break;
    case "mestre":
      salario *= 1.1;
      break;
    default:
      salario *= 1.15;
      break;
  }

  return salario;
}

// Sem break: depois do case escolhido, CONTINUA rodando os de baixo.
function calcularSalarioSemBreak(titulacao) {
  let salario = SALARIO_BASE;

  switch (titulacao) {
    case "especialista":
      salario *= 1.05;
    case "mestre":
      salario *= 1.1;
    default:
      salario *= 1.15;
  }

  return salario;
}

function tratarSalario(evento) {
  evento.preventDefault();

  const saida = document.getElementById("resultado-salario");
  const titulacao = document.getElementById("campo-titulacao").value;
  const usarBreak = document.getElementById("usar-break").checked; // caixa marcada?

  const salario = usarBreak
    ? calcularSalarioComBreak(titulacao)
    : calcularSalarioSemBreak(titulacao);

  const aviso = usarBreak ? "(com break)" : "(sem break: passou por cases a mais!)";

  saida.textContent = `Titulação: ${titulacao}. Salário: ${salario.toFixed(2)} ${aviso}`;
}


// 4. Aumento por cargo (switch com texto)
// O texto precisa ser idêntico ao do case, com maiúscula e acento.
// Devolve o aumento como fração (1 = 100%), ou null se o cargo não existir.
// O default avisa com alert().
function obterAumentoPorCargo(cargo) {
  let aumento;

  switch (cargo) {
    case "Estagiário":
      aumento = 100 / 100;
      break;
    case "Analista":
      aumento = 50 / 100;
      break;
    case "Gerente":
      aumento = 30 / 100;
      break;
    case "Presidente":
      aumento = 10 / 100;
      break;
    default:
      alert("Favor escolher um cargo válido!");
      aumento = null;
  }

  return aumento;
}

function tratarAumento(evento) {
  evento.preventDefault();

  const saida = document.getElementById("resultado-aumento");
  const cargo = document.getElementById("campo-cargo").value;
  const salario = lerNumero(document.getElementById("campo-salario-base"));

  if (salario === null || salario < 0) {
    saida.textContent = "Erro: digite um salário válido.";
    return;
  }

  const aumento = obterAumentoPorCargo(cargo);

  if (aumento === null) {
    saida.textContent = ""; // caiu no default: o alert já avisou
    return;
  }

  const novoSalario = salario + salario * aumento;

  saida.textContent =
    `Cargo: ${cargo}. Aumento: ${aumento * 100}%. ` +
    `Salário: ${salario.toFixed(2)} -> ${novoSalario.toFixed(2)}`;
}


// Ligando à página
// addEventListener("submit", f) = "quando enviarem este formulário, execute f"
document.getElementById("form-mes").addEventListener("submit", tratarMes);
document.getElementById("form-media").addEventListener("submit", tratarMedia);
document.getElementById("form-salario").addEventListener("submit", tratarSalario);
document.getElementById("form-aumento").addEventListener("submit", tratarAumento);
