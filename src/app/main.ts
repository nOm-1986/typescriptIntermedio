import {faker} from '@faker-js/faker';
import {addProduct, products} from './products/product.service';

for(let i = 0; i < 50; i++) {
  addProduct({
    id: faker.datatype.uuid(),
    createdAt: faker.date.recent(),
    updatedAt: faker.date.recent(),
    description: faker.commerce.productDescription(),
    color: faker.color.human(),
    image: faker.image.animals(),
    isNew: faker.datatype.boolean(),
    price: parseInt(faker.commerce.price(10000, 1000000)),
    tags: faker.helpers.arrayElement(),
    title: faker.commerce.productName(),
    stock: faker.datatype.number({min: 10, max: 100}),
    size: faker.helpers.arrayElement(['16','S','M','L','XL']),
    category: {
      id: faker.datatype.uuid(),
      name: faker.commerce.department(),
      createdAt: faker.date.recent(),
      updatedAt: faker.date.recent()
    },

  });
}


console.log(products);
