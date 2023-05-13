import { addProduct, calcStock } from './product.service';

addProduct({
  title: 'Product 1',
  price: 100,
  description: 'Loren',
  stock: 10,
  size: 'M',
});

addProduct({
  title: 'Product 2',
  price: 150,
  description: 'Loren',
  stock: 5,
  size: 'S',
});

const totalStock = calcStock();
console.log('Total de stock:', totalStock);
