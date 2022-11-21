type Sizes = '16' | 'S' | 'M' | 'L' | 'XL';

interface Product {
  id: string | number,
  title: string;
  createdAt: Date,
  stock: number,
  size?: Sizes;
}

export { Sizes, Product}
