/** INTERFACES
 * Sirven igual que el type pero lo mejor es que las puedo extender.
 * Mientra el type puede ser sencillo con union types, las interfaces si
 * necesitan todo un cuerpo.
 * La utilización es para un conjunto de atributos de valores.
 */
type Sizes = '16' | 'S' | 'M' | 'L' | 'XL';

enum tShirtSize {
  SMALL = '16',
  TEENAGER = 'S',
  YOUNGMAN = 'M',
  ADULTI = 'L',
  ADUTLII = 'XL'
}

// type Product = {
//   id: string | number,
//   title: string,
//   createAt: Date,
//   stock: number,
//   size?: tShirtSize
// }

interface Product {
  id: string | number,
  title: string,
  createAt: Date,
  stock: number,
  size?: tShirtSize
}

const product1: Product[] = [];

product1.push({
  id: 1,
  title: 'first producto',
  createAt: new Date(),
  stock: 50,
  size: tShirtSize.SMALL
});


const addProduct = (data: Product) => {
  product1.push(data);
}


