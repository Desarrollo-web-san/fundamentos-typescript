(() => {
  type MyID = string | number;
  let myId: MyID;

  myId = '123';
  console.log(myId);
  myId = 123;
  console.log(myId);

  const generateValue = (id: MyID) => {
    if (typeof id === 'string') {
      console.log(id.toLowerCase());
    } else {
      console.log(id.toFixed());
    }
  };

  generateValue('AlejoDev95');
  generateValue(32.2145);
  // generateValue(true); // Error por qué no acepta booleans

  type ShirtSize = 'S' | 'M' | 'L';
  let shirt: ShirtSize;
  shirt = 'S';
  console.log(shirt);
  shirt = 'M';
  console.log(shirt);
  shirt = 'L';
  console.log(shirt);
  // shirt = 'XS';

  type NumberValue = 1 | 2 | 3;
  let numberValue: NumberValue = 1;
  numberValue = 2;
  console.log(numberValue);
  numberValue = 3;
  console.log(numberValue);
  // numberValue = 4; // Error por qué no es un valor permitido
})();
