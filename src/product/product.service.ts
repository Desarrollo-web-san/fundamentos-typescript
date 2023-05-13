import { Product } from './product.model';

export const listOfProducts: Product[] = [];

export const addProduct = (product: Product): void => {
  listOfProducts.push(product);
};

export const calcStock = (): number => {
  let total = 0;
  listOfProducts.forEach((product) => {
    total += product.stock;
  });
  return total;
};
