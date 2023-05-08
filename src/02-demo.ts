//@ts-check
async () => {
  const myCart = [];
  const todos = [];
  const limit = 2;

  async function getTodos() {
    const rta = await fetch('https://jsonplaceholder.typicode.com/todos/1', {
      method: 'GET',
    });
    const data = await rta.json();
    return todos.concat(data);
  }

  function getTotal() {
    let total = 0;
    for (const element of todos) {
      total += element;
    }
    return total;
  }

  function addProduct(index) {
    if (getTotal() <= limit) {
      myCart.push(todos[index]);
    }
  }

  await getTodos();
  addProduct(1);
  addProduct(2);
};
