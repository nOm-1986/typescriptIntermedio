/**
 * Sobrecarga de funciones - El problema
 *
 * La sobrecarga de funciones sobre esta disponible en POO y con la palabra reservada
 * function, no esta disponible con const mifun = () => {}
 *
 * Fabian => [F,a,b,i,a,n] => String => string[]
 * [F,a,b,i,a,n] => Fabian => string[] => string
 */

function parseStr(input: string | string[]): string | string[] {
  if(Array.isArray(input)){
    return input.join(''); //String
  } else {
    return input.split('');//string[]
  }
}

const rtaArray = parseStr('Fabian');
console.log(rtaArray);

const rtaString = parseStr(['F','a','b','i','a','n']);
console.log(rtaString);

/**Qué problemas podemos tener con esto?
 * En este caso nosotros sabemos que puede haber un string o un array.
 * pero en rtaArray no puedo ingresar directamente a las funciones de array.
 * rtaArray.pop(), por ende debo hacer un if para validar
 *
 * Lo mismo me va a pasar con mi string.
 * rtaString.toUpperCase().
 * Debo hacer una assertion de tipo.
 * if(typeof rtaString == 'string'){
 *  rtaString.toLower();
 * }
 *
 * SOLUCIÓN -- SOBRECARGA DE FUNCIONES
 *
 */

