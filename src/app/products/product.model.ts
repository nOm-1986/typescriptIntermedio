import {BaseModel} from "./../base.model";
import { Category } from "../categories/category.model";

type Sizes = '16' | 'S' | 'M' | 'L' | 'XL';

interface Product extends BaseModel {
  title: string;
  stock: number,
  size?: Sizes;
  category: Category
}

export { Sizes, Product}
