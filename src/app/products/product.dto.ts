import {Product} from './product.model';
//Cuando necesito omitir algunos campos utilizo utility Types.
//Sobre todo a la hora de crear un articulo que yo se que existen algunos campos que se generarán automaticamente.
export interface CreateProductDto extends Omit<Product, 'id' | 'createdAt' | 'updatedAt' | 'category'> {
  categoryId: string;
};
//As we can see, we created a nuew Instance of Product but without id.

//Con pick en vez de omitir yo los escojo.
type example = Pick<Product, 'color' | 'description'>;

/*El Partial lo que hace es dejarme todos los campos como opcionales, stock?:
export interface UpdateProductDto extends Partial<Product> {}*/

//Pero que pasa si yo no deseo editar todos los campos, por ejemplo una vez creado el createdAt no se debería dejar modificar.
//I can extend my interfaces from another dto, in this case we're going to extend from CreateProductDto.
export interface UpdateProductDto extends Partial<CreateProductDto> {}

//The oposite of Partial is Required who do that all information will be required.
type example2 = Required<Product>
