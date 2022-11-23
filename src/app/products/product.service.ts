import {faker} from '@faker-js/faker';
//Contiene todo lo que es manipulación.
/**
 * Acá declaro lo métodos que hacen manipulación, creación, edición, etc.
 */

import { Product } from "./product.model";
import { CreateProductDto } from "./product.dto";

const products: Product[] = [];

const addProduct = (data: CreateProductDto): Product => {
  const newProduct = {
    ...data,
    id: faker.datatype.uuid(),
    createdAt: faker.date.recent(),
    updatedAt: faker.date.recent(),
    category: {
      id: data.categoryId,
      name: faker.commerce.department(),
      createdAt: faker.date.recent(),
      updatedAt: faker.date.recent()
    }
  }
  products.push(newProduct);
  return newProduct;
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
