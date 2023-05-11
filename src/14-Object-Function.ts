(() => {
  type Size = 'S' | 'M' | 'L';
  type Product = {
    title: string;
    price: number;
    description: string;
    size?: Size;
  };

  const listOfProducts: Product[] = [];

  const addProduct = (product: Product): void => {
    listOfProducts.push(product);
  };

  addProduct({
    title: 'Product1',
    price: 100,
    description: 'Lorem',
  });

  addProduct({
    title: 'Product2',
    price: 500,
    description: 'Lorem x2',
    size: 'M',
  });

  console.log('listOfProducts', listOfProducts);
})();
