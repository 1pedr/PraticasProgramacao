/*
  OPERADORES
  Operadores são símbolos que fazem uma operação com valores.
  Exemplo: em 2 + 3, o "+" é o operador e 2 e 3 são os valores.
*/

const a = 10;
const b = 3;

// ---------- 1. Aritméticos (contas) ----------
mostrar("saida-aritmeticos", `${a} + ${b}  = ${a + b}   (soma)`);
mostrar("saida-aritmeticos", `${a} - ${b}  = ${a - b}   (subtração)`);
mostrar("saida-aritmeticos", `${a} * ${b}  = ${a * b}  (multiplicação)`);
mostrar("saida-aritmeticos", `${a} / ${b}  = ${a / b}  (divisão)`);
mostrar("saida-aritmeticos", `${a} % ${b}  = ${a % b}    (resto da divisão)`);
mostrar("saida-aritmeticos", `${a} ** ${b} = ${a ** b} (potência)`);
// O % é muito usado para saber se um número é par: numero % 2 === 0

// ---------- 2. Atribuição (guardar valores) ----------
let pontos = 5;   // "=" GUARDA o valor da direita na variável da esquerda
pontos += 2;      // o mesmo que: pontos = pontos + 2
mostrar("saida-atribuicao", `pontos += 2 -> ${pontos}`);

pontos -= 1;      // pontos = pontos - 1
mostrar("saida-atribuicao", `pontos -= 1 -> ${pontos}`);

pontos *= 3;      // pontos = pontos * 3
mostrar("saida-atribuicao", `pontos *= 3 -> ${pontos}`);

pontos++;         // soma 1 (incremento)
mostrar("saida-atribuicao", `pontos++    -> ${pontos}`);

pontos--;         // subtrai 1 (decremento)
mostrar("saida-atribuicao", `pontos--    -> ${pontos}`);

// ---------- 3. Comparação (o resultado é sempre true ou false) ----------
mostrar("saida-comparacao", `${a} > ${b}   -> ${a > b}    (maior)`);
mostrar("saida-comparacao", `${a} < ${b}   -> ${a < b}   (menor)`);
mostrar("saida-comparacao", `${a} >= 10  -> ${a >= 10}    (maior ou igual)`);
mostrar("saida-comparacao", `${a} <= 5   -> ${a <= 5}   (menor ou igual)`);
mostrar("saida-comparacao", `${a} === 10 -> ${a === 10}    (igual)`);
mostrar("saida-comparacao", `${a} !== ${b}  -> ${a !== b}    (diferente)`);

/*
  CUIDADO: === compara o valor E o tipo. == compara só o valor e faz
  conversões estranhas. Veja a diferença:
*/
mostrar("saida-comparacao", `"5" == 5   -> ${"5" == 5}    (só valor)`);
mostrar("saida-comparacao", `"5" === 5  -> ${"5" === 5}   (valor e tipo)`);
// Regra de ouro: use sempre === e !==

// ---------- 4. Lógicos (combinam condições) ----------
const temIngresso = true;
const maiorDeIdade = false;

// && (E)   -> verdadeiro só se AS DUAS forem verdadeiras
mostrar("saida-logicos", `temIngresso && maiorDeIdade -> ${temIngresso && maiorDeIdade}`);

// || (OU)  -> verdadeiro se PELO MENOS UMA for verdadeira
mostrar("saida-logicos", `temIngresso || maiorDeIdade -> ${temIngresso || maiorDeIdade}`);

// !  (NÃO)  -> inverte: true vira false e false vira true
mostrar("saida-logicos", `!temIngresso -> ${!temIngresso}`);

// ---------- 5. O operador + com texto ----------
// Com números, + soma. Com texto, + junta (concatena).
mostrar("saida-texto", `2 + 3       -> ${2 + 3}`);
mostrar("saida-texto", `"2" + "3"   -> ${"2" + "3"}   (juntou os textos!)`);
mostrar("saida-texto", `"Oi, " + "Ana" -> ${"Oi, " + "Ana"}`);

// ---------- 6. Precedência (quem é feito primeiro) ----------
// Igual na matemática: * e / vêm antes de + e -. Parênteses mandam em tudo.
mostrar("saida-precedencia", `2 + 3 * 4   -> ${2 + 3 * 4}`);
mostrar("saida-precedencia", `(2 + 3) * 4 -> ${(2 + 3) * 4}`);
