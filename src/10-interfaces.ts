/** INTERFACES
 * Sirven igual que el type pero lo mejor es que las puedo extender.
 */
type Sizes = '16' | 'S' | 'M' | 'L' | 'XL';

enum tShirtSize {
  SMALL = '16',
  TEENAGER = 'S',
  YOUNGMAN = 'M',
  ADULTI = 'L',
  ADUTLII = 'XL'
}

type Product = {
  id: string | number,
  title: string,
  createAt: Date,
  stock: number,
  size?: tShirtSize
}

const product1: Product[] = [];

product1.push({
  id: 1,
  title: 'first producto',
  createAt: new Date(),
  stock: 50,
  size: tShirtSize.SMALL
});


