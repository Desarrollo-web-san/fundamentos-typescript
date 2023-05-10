(() => {
  let myDinamycVar: any;
  myDinamycVar = true;
  console.log(myDinamycVar);
  myDinamycVar = null;
  console.log(myDinamycVar);
  myDinamycVar = {};
  console.log(myDinamycVar);

  myDinamycVar = 'AlejoDev95';
  const myString = (myDinamycVar as string).toLowerCase();
  console.log(myString);

  myDinamycVar = 123;
  const myNumber = (<number>myDinamycVar).toFixed();
  console.log(myNumber);
})();
