import {addProduct, products} from './products/product.service';

addProduct({
  id: 1,
  title: 'first producto',
  createdAt: new Date(),
  stock: 50,
  size: tShirtSize.SMALL,
  category: {
    id: 1,
    name: 'Electrodomesticos'
  }
});

console.log(products);
