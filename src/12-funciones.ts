(() => {
  type Size = 'S' | 'M' | 'L';
  const createProductToJSON = (
    title: string,
    price: number,
    description: string,
    size?: Size
  ) => {
    return { title, price, description, size };
  };

  //Ambos casos si van a funcionar por qué ahora size es opcional
  const product1 = createProductToJSON('Product1', 100, 'Lorem');
  const product2 = createProductToJSON('Product2', 500, 'Lorem x2', 'M');
  console.log(product1);
  console.log(product1.size);
  console.log(product2);
  console.log(product2.size);
})();
