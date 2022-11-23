import {BaseModel} from "./../base.model";
import { Category } from "../categories/category.model";

type Sizes = '16' | 'S' | 'M' | 'L' | 'XL';

interface Product extends BaseModel {
  description: string,
  category: Category
  color: string,
  image: string,
  isNew: boolean,
  price: number,
  stock: number,
  size?: Sizes;
  tags: string[],
  title: string;
}


export { Sizes, Product}
