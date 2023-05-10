(() => {
  let myDinamycVar: any;
  myDinamycVar = true;
  myDinamycVar = null;
  myDinamycVar = {};

  myDinamycVar = 'AlejoDev95';
  const myString = (myDinamycVar as string).toLowerCase();
  console.log(myString);

  myDinamycVar = 123;
  const myNumber = (<number>myDinamycVar).toFixed();
  console.log(myNumber);
})();
