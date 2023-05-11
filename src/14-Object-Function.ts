(() => {
  type Size = 'S' | 'M' | 'L';
  const listOfProducts: any[] = [];

  const addProduct = (product: {
    title: string;
    price: number;
    description: string;
    size?: Size;
  }) => {
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
