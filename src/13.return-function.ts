(() => {
  const calcValue = (prices: number[]): number => {
    let total = 0;
    prices.forEach((price) => (total += price));
    return total;
  };

  const showTotal = (): void => {
    const totalPrice = calcValue([100, 200, 300]);
    console.log('The total price is:', totalPrice);
  };

  showTotal();
})();
