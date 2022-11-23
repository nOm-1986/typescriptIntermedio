//Cuando necesito omitir algunos campos utilizo utility Types.
//Sobre todo a la hora de crear un articulo que yo se que existen algunos campos que se generarán automaticamente.
export interface CreateProductDts extends Omit<Product, 'id' | 'createdAt' | 'updatedAt' | 'Category'> {
  categoryId: string;
};
//As we can see, we created a nuew Instance of Product but without id.
