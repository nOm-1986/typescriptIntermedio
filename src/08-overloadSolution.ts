/**
 * Esta es la sobrecarga de funciones donde le digo mira si me das un string
 * te retorno un array, y vuelvo a escribir la funcion pero ahora con
 * describiendo mira si me das un array retorname un string.
 */

export function parseStr(input:string):string[];
export function parseStr(input:string[]):string;
export function parseStr(input:number):boolean;


// export function parseStr(input: string | string[]): string | string[] {
//   if(Array.isArray(input)){
//     return input.join(''); //Retorna un String
//   } else {
//     return input.split('');//string[] returna un array
//   }
// }

//Esta es una forma mucho más generica por si quiero agregar más sobrecarga.
export function parseStr(input: unknown): unknown {
  if(Array.isArray(input)){
    return input.join(''); //Retorna un String
  } else if(typeof input == 'string') {
    return input.split('');//string[] returna un array
  } else if(typeof input == 'number') {
    return true;//string[] returna un array
  }
}


//De esta forma ya me evita la assertion de tipo.
let rtaString = parseStr(['F','a','b','i','a','n']);
rtaString = rtaString.toUpperCase();
console.log(rtaString);

const rtaArray = parseStr('Fabian');
console.log(rtaArray, rtaArray.length);


/*BUENAS PRACTICAS*
//Si tengo un unknown para sobrecarga lo mejor es dejarlo al final.
declare function fn(x: HTMLDivElement): string;
declare function fn(x: HTMLElement): number;
declare function fn(x: unknown): unknown; //Siempre dejarlo al final.
let myElem: HTMLDivElement;
let x = fn(myElem);

 WRONG
 Si tengo un método que siempre retorna number y lo único que cambia son
 los parámetros.

 Lo convierto a
diff(one: string): number;
* diff(one: string, two: string):number;
* diff(one: string, two: string, three: boolean):number;

interface Example {
  diff(one: string, two?: string, three?: boolean): number
}

//Problemas
interface Moment {
  utcOffset(): number;
  utcOffset(b: number): Moment;
  utcOffset(b: string): Moment;
}

//Solución
interface Moment {
  utcOffset():number;
  utcOffset(b: number | string): Moment;
}
*/
