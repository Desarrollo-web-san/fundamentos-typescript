(() => {
  const listOfValues = [1, 2, 3, true, 'Value'];
  console.log(listOfValues);

  const listOfSomething: (string | number)[] = ['Name', 1, 2, 3, 'Coty'];
  console.log(listOfSomething);

  const listOfTypes: (string | number | boolean)[] = [true, 1, 2, 3];
  console.log(listOfTypes);
  listOfTypes.push('Value');
  console.log(listOfTypes);

  const listOfPrice: number[] = [100, 150, 200, 300];
  const newListOfPrice = listOfPrice.map((price) => price * 0.2);
  console.log(newListOfPrice);
})();
