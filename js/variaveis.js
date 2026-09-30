/*
  VARIÁVEIS
  Uma variável é uma "caixinha com etiqueta" onde guardamos um valor
  para usar depois. A etiqueta é o NOME, o conteúdo é o VALOR.
*/

// ---------- 1. Como criar uma variável ----------

// let   -> valor que PODE mudar depois
let idade = 20;

// const -> valor que NÃO muda (constante). Se tentar mudar, dá erro.
const nome = "Ana";

// var   -> jeito antigo. Hoje se evita; prefira let e const.
var cidade = "Recife";

mostrar("saida-criar", "nome = " + nome);
mostrar("saida-criar", "idade = " + idade);
mostrar("saida-criar", "cidade = " + cidade);

// ---------- 2. Mudando o valor ----------
idade = 21; // pode, porque foi criada com let
// nome = "Bia"; // ERRO! nome é const. Descomente a linha para ver o erro no console (F12).

mostrar("saida-mudar", "idade agora é " + idade);

// ---------- 3. Tipos de valores ----------
const texto = "Olá, mundo"; // string  -> texto, sempre entre aspas
const numero = 42.5;          // number  -> inteiros e decimais (ponto, não vírgula)
const verdade = true;         // boolean -> só true (verdadeiro) ou false (falso)
let semValor;                 // undefined -> criada, mas sem valor ainda
const vazio = null;           // null    -> "vazio" de propósito

// typeof mostra o tipo de um valor
mostrar("saida-tipos", "texto    -> " + typeof texto);
mostrar("saida-tipos", "numero   -> " + typeof numero);
mostrar("saida-tipos", "verdade  -> " + typeof verdade);
mostrar("saida-tipos", "semValor -> " + typeof semValor);

// ---------- 4. Juntando texto com variáveis ----------

// Jeito 1: concatenação com +
mostrar("saida-juntar", "Oi, " + nome + "! Você tem " + idade + " anos.");

// Jeito 2 (melhor): template string, com crases ` ` e ${variável}
mostrar("saida-juntar", `Oi, ${nome}! Você tem ${idade} anos.`);

// ---------- 5. Regras para nomes ----------
/*
  - Pode ter letras, números, _ e $, mas NÃO pode começar com número.
  - Não pode ter espaço.
  - Maiúscula e minúscula são diferentes: idade e Idade são variáveis distintas.
  - Padrão usado por todo mundo: camelCase (primeira palavra minúscula,
    as próximas com inicial maiúscula). Ex.: nomeCompleto, precoTotal.
*/
const nomeCompleto = "Ana Souza";
mostrar("saida-nomes", "camelCase -> " + nomeCompleto);
