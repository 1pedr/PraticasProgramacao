/*
  Operadores
  Símbolos que fazem uma operação com valores.
  Em 2 + 3, o + é o operador; 2 e 3 são os valores.

  1. Aritméticos
  2. Atribuição
  3. Comparação
  4. Lógicos
  5. O + com texto
  6. Precedência

  Roda de cima para baixo, usando a e b abaixo.
  Usa: util.js (mostrar)
*/

const a = 10;
const b = 3;


// 1. Aritméticos: contas
mostrar("saida-aritmeticos", `${a} + ${b}  = ${a + b}   (soma)`);
mostrar("saida-aritmeticos", `${a} - ${b}  = ${a - b}   (subtração)`);
mostrar("saida-aritmeticos", `${a} * ${b}  = ${a * b}  (multiplicação)`);
mostrar("saida-aritmeticos", `${a} / ${b}  = ${a / b}  (divisão)`);
mostrar("saida-aritmeticos", `${a} % ${b}  = ${a % b}    (resto da divisão)`);
mostrar("saida-aritmeticos", `${a} ** ${b} = ${a ** b} (potência)`);
// Dica: numero % 2 === 0 diz se um número é par


// 2. Atribuição: guardar valores
let pontos = 5; // = guarda o valor da direita na variável da esquerda

pontos += 2; // pontos = pontos + 2
mostrar("saida-atribuicao", `pontos += 2 -> ${pontos}`);

pontos -= 1; // pontos = pontos - 1
mostrar("saida-atribuicao", `pontos -= 1 -> ${pontos}`);

pontos *= 3; // pontos = pontos * 3
mostrar("saida-atribuicao", `pontos *= 3 -> ${pontos}`);

pontos++; // soma 1
mostrar("saida-atribuicao", `pontos++    -> ${pontos}`);

pontos--; // subtrai 1
mostrar("saida-atribuicao", `pontos--    -> ${pontos}`);


// 3. Comparação: o resultado é sempre true ou false
mostrar("saida-comparacao", `${a} > ${b}   -> ${a > b}    (maior)`);
mostrar("saida-comparacao", `${a} < ${b}   -> ${a < b}   (menor)`);
mostrar("saida-comparacao", `${a} >= 10  -> ${a >= 10}    (maior ou igual)`);
mostrar("saida-comparacao", `${a} <= 5   -> ${a <= 5}   (menor ou igual)`);
mostrar("saida-comparacao", `${a} === 10 -> ${a === 10}    (igual)`);
mostrar("saida-comparacao", `${a} !== ${b}  -> ${a !== b}    (diferente)`);

// === compara valor E tipo; == só o valor (e converte de forma estranha)
mostrar("saida-comparacao", `"5" == 5   -> ${"5" == 5}    (só valor)`);
mostrar("saida-comparacao", `"5" === 5  -> ${"5" === 5}   (valor e tipo)`);
// Regra: use sempre === e !==


// 4. Lógicos: combinam condições
const temIngresso = true;
const maiorDeIdade = false;

// && (E): true só se as DUAS forem true
mostrar("saida-logicos", `temIngresso && maiorDeIdade -> ${temIngresso && maiorDeIdade}`);

// || (OU): true se PELO MENOS UMA for true
mostrar("saida-logicos", `temIngresso || maiorDeIdade -> ${temIngresso || maiorDeIdade}`);

// ! (NÃO): inverte
mostrar("saida-logicos", `!temIngresso -> ${!temIngresso}`);


// 5. O + com texto: com números soma, com texto junta
mostrar("saida-texto", `2 + 3       -> ${2 + 3}`);
mostrar("saida-texto", `"2" + "3"   -> ${"2" + "3"}   (juntou os textos!)`);
mostrar("saida-texto", `"Oi, " + "Ana" -> ${"Oi, " + "Ana"}`);


// 6. Precedência: * e / antes de + e -; parênteses primeiro
mostrar("saida-precedencia", `2 + 3 * 4   -> ${2 + 3 * 4}`);
mostrar("saida-precedencia", `(2 + 3) * 4 -> ${(2 + 3) * 4}`);
