(() => {
  let myName = 'AlejoDev95'; // Implicitamente string
  // myName = false; // Dara un error porque la variable myName solo puede guardar strings.

  let age: number = 27;
  // age = "Mi edad es 27;"; // Dará un error por que la variable age solo puede guardar numeros.

  // Cuando usar la asignacion de tipo explicita o la implicita

  let myUserName = 'AlejoDev95'; // Se usa la forma implicita cuando se declara y asigna el valor a una variable.
  let myAge: number; // Se usa la forma explicita cuando se declara una variable pero no se le asigna ningún valor.

  // Métodos y propiedades de los tipos de datos
  let price = 10.5461231;

  // Métodos que vienen los tipos strings
  myUserName.length;
  myUserName.slice();

  // Métodos que vienen los tipos numbers
  price.toFixed();
  price.toExponential();

  const productName = 'Computer';
})();
