export const createProduct = (
  id: string | number,
  isNew: boolean,
  stock?: number
) => {
  return {
    id, stock, isNew
  }
}

//Parámetros opcionales siempre deben ir al final.
// const p1 = createProduct('producto 1',true,20);
// const p2 = createProduct('producto 2',false);
// const p3 = createProduct('producto 3',true, 234);
// console.log(p1);
// console.log(p2);
// console.log(p3);

const porDefecto = (id: string | number, stock: number = 10, otro: string = 'otro' ) => {
  return {id, stock, otro};
}

console.log(porDefecto('uno'));
console.log(porDefecto('uno',50));
console.log(porDefecto('uno',70,'cambio'));


