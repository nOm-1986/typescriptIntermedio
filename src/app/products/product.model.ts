import { Category } from "../categories/category.model";

type Sizes = '16' | 'S' | 'M' | 'L' | 'XL';

interface Product {
  id: string | number,
  title: string;
  createdAt: Date,
  stock: number,
  size?: Sizes;
  category: Category
}

export { Sizes, Product}
