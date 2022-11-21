//Contiene todo lo que es manipulación.
/**
 * Acá declaro lo métodos que hacen manipulación, creación, edición, etc.
 */

import { Product } from "./product.model";

const products: Product[] = [];

const addProduct = (data: Product) => {
  products.push(data);
}

export {products, addProduct}
