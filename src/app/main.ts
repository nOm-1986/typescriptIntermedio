import {addProduct, products} from './products/product.service';

addProduct({
  id: 1,
  createdAt: new Date(),
  updatedAt: new Date(),
  title: 'first producto',
  stock: 50,
  size: tShirtSize.SMALL,
  category: {
    id: 1,
    name: 'Electrodomesticos',
    createdAt: new Date(),
    updatedAt: new Date()
  }
});

console.log(products);
