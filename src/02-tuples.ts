/*Tuplas - Un array fuertemente tipado. Definir un array fuetemente tipado,
tanto la posición de cada elemento, como el límite que voy a poder ingresar.
*/

//No importa en que posicion puede ser número o string, hasta el infinito.
const prices: (number | string)[] = [1,2,3,5,4,8,6];

//La tupla - Quiero definir fuertemente el tipado. Que la posición 1 sea string y la 2 un number

let user: [string, number, boolean];
user = ['faBelMe', 15, true]

//Un vez definidas yo puedo hacer destructuración
const [username, age] = user;
console.log(`Usuario: ${username}, edad: ${age}`);

