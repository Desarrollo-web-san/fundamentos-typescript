(() => {
  // Por inferencia ambos son any
  let myVariable1 = undefined;
  let myVariable2 = null;
  // Explicitamente se les puede indicar el tipo
  let myVariable3: number; // El valor actual es undefined
  let myVariable4: string | null; // El valor actual es undefined;

  const Greet = (name: string | null) => {
    let hello = 'Hello' + `${name ? name : '...'}`;
    if (name) {
      hello = `${hello} ${name}`;
    } else {
      hello = `${hello}....`;
    }

    return hello;
  };

  const GreetV2 = (name: string | null) => {
    let hello = 'Hello ';
    hello += name ? name : '...';
    return hello;
  };

  const GreetV3 = (name: string | null) => {
    const hello = `Hello ${name}` ?? `Hello....`;
    return hello;
  };

  const GreetV4 = (name: string | null) => {
    const hello = `Hello ${name}` || `Hello....`;
    return hello;
  };

  const GreetV5 = (name: string | null) => {
    let hello = 'Hello ';
    hello += name?.toLowerCase() || '...';
    return hello;
  };

  console.log(Greet('AlejoDev95'));
  console.log(Greet(null));

  console.log(GreetV2('AlejoDev95'));
  console.log(GreetV2(null));

  console.log(GreetV3('AlejoDev95'));
  console.log(GreetV3(null));

  console.log(GreetV4('AlejoDev95'));
  console.log(GreetV4(null));

  console.log(GreetV5('AlejoDev95'));
  console.log(GreetV5(null));
})();
