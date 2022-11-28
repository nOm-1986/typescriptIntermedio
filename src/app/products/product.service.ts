import {faker} from '@faker-js/faker';
//Contiene todo lo que es manipulación.
/**
 * Acá declaro lo métodos que hacen manipulación, creación, edición, etc.
 */

import { Product } from "./product.model";
import { CreateProductDto, UpdateProductDto } from "./product.dto";

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

const updateProduct = (id: string | number, changes: UpdateProductDto): Product => {
  const index = products.findIndex(item => item.id === id);
  const prevData = products[index];
  //Esto es más de manipulación de arrays en memoria. Con BD esto casi no se utiliza.
  products[index] = {
    ...prevData,
    ...changes
  }
  return products[index];
}

const deleteProduct = (id: string) => {
  //Code.
}

const readProduct = (id:string) => {
  //Code
}

const findProducts = (id:string) : Product[] => {
  //Filtering code.
  return products;
}

export {products, addProduct, findProducts, updateProduct}
