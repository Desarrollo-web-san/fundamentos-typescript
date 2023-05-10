(() => {
  let myId: string | number;

  myId = '123';
  console.log(myId);
  myId = 123;
  console.log(myId);

  const generateValue = (value: string | number) => {
    if (typeof value === 'string') {
      console.log(value.toLowerCase());
    } else {
      console.log(value.toFixed());
    }
  };

  generateValue('AlejoDev95');
  generateValue(32.2145);
  // generateValue(true); // Error por qué no acepta booleans
})();
