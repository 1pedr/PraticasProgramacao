/*
  Variáveis
  Uma variável é uma caixinha com etiqueta: o NOME é a etiqueta,
  o VALOR é o que está guardado dentro.

  1. Criar variáveis
  2. Mudar o valor
  3. Tipos de valores
  4. Juntar texto com variáveis
  5. Regras para nomes

  Roda de cima para baixo: cada parte usa variáveis da anterior.
  Usa: util.js (mostrar)
*/


// 1. Criar variáveis
let idade = 20;        // let: o valor PODE mudar
const nome = "Ana";    // const: o valor NÃO muda
var cidade = "Recife"; // var: jeito antigo, evite

mostrar("saida-criar", "nome = " + nome);
mostrar("saida-criar", "idade = " + idade);
mostrar("saida-criar", "cidade = " + cidade);


// 2. Mudar o valor
idade = 21; // pode, porque idade é let
// nome = "Bia"; // ERRO: nome é const. Tire o // e veja o erro no console (F12).

mostrar("saida-mudar", "idade agora é " + idade);


// 3. Tipos de valores
const texto = "Olá, mundo"; // string: texto, sempre entre aspas
const numero = 42.5;        // number: decimal usa ponto, não vírgula
const verdade = true;       // boolean: true ou false
let semValor;               // undefined: criada, mas sem valor
const vazio = null;         // null: vazio de propósito

// typeof diz o tipo de um valor
mostrar("saida-tipos", "texto    -> " + typeof texto);
mostrar("saida-tipos", "numero   -> " + typeof numero);
mostrar("saida-tipos", "verdade  -> " + typeof verdade);
mostrar("saida-tipos", "semValor -> " + typeof semValor);


// 4. Juntar texto com variáveis
mostrar("saida-juntar", "Oi, " + nome + "! Você tem " + idade + " anos."); // com +
mostrar("saida-juntar", `Oi, ${nome}! Você tem ${idade} anos.`);           // template string (melhor)


// 5. Regras para nomes
// - letras, números, _ e $; não pode começar com número nem ter espaço
// - maiúscula importa: idade e Idade são diferentes
// - padrão: camelCase (nomeCompleto, precoTotal)
const nomeCompleto = "Ana Souza";

mostrar("saida-nomes", "camelCase -> " + nomeCompleto);
