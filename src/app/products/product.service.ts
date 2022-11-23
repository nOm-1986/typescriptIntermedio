//Contiene todo lo que es manipulación.
/**
 * Acá declaro lo métodos que hacen manipulación, creación, edición, etc.
 */

import { Product } from "./product.model";

const products: Product[] = [];

const addProduct = (data: Product) => {
  products.push(data);
}

const updateProduct = (id: string, changes: Product) => {
  //Code.
}

const deleteProduct = (id: string) => {
  //Code.
}

const readProduct = (id:string) => {
  //Code
}

export {products, addProduct}
