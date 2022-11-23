import {Product} from './product.model';
//Cuando necesito omitir algunos campos utilizo utility Types.
//Sobre todo a la hora de crear un articulo que yo se que existen algunos campos que se generarán automaticamente.
export interface CreateProductDto extends Omit<Product, 'id' | 'createdAt' | 'updatedAt' | 'category'> {
  categoryId: string;
};
//As we can see, we created a nuew Instance of Product but without id.

//Con pick en vez de omitir yo los escojo.
type example = Pick<Product, 'color' | 'description'>;
