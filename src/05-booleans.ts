(() => {
  let isNew = false;
  console.log('isNew before', isNew);
  // isNew = 'true';
  isNew = true;
  console.log('isNew after', isNew);

  const number = Math.random();
  console.log('number', number);
  isNew = number > 0.5 ? true : false;
  console.log('isNew', isNew);
})();
