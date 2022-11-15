/**
 * Never
 * Funciones que nunca terminan. Para tipar funciones que nunca va a finalizar o sencillamente
 * que pueda terminar el proces en caso de lanzar una excepción.
 */

const withoutEnd = () => {
  while(true){
    console.log('Nunca pares de aprender');
  }
}

//Al lanzar este tipo de error ya sabemos que el programa se va a cancelar, por ende typescript sabe que es de tipo never.
const fail = (message: string)=>{
  throw new Error(message);
}

const example = (input: unknown) => {
  if(typeof input == 'string'){
    return 'Es un string';
  }
  //Para detectar una array
  if(Array.isArray(input)){
    return 'Esto es un array';
  }
  return fail('Not match');
}

console.log(example('Hola'));
console.log(example(['hola',1,2,3]));
console.log(example(true));

