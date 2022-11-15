let anyVar: any;
anyVar = true;
anyVar = undefined;
anyVar = 'puede se lo que sea';

//Unknow una mejor forma de evitar any.

let unknowVar: unknown;
unknowVar = undefined;
unknowVar = null;
unknowVar = 1;
unknowVar = [];
unknowVar = {'hola':'mundo'};
unknowVar = true;

//Ventajas: no me deja hacer una ejecución de algo sin por lo menos verificar el tipo.
//unknowVar.doSomething();
//unknowVar.toUpperCase();
if(typeof unknowVar === 'string'){
  unknowVar.toUpperCase();
}
//console.log(unknowVar);

if(typeof unknowVar ==='boolean'){
  unknowVar.valueOf();
  console.log(unknowVar);
}

//Tambien lo puedo utilizar en funciones.
//Pues al menos me va a forzar a utilizar una validación de tipo.
const parse = (str: string): unknown =>{
  return JSON.parse(str);
}
