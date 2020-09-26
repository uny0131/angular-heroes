const data = {
    heroes: [
        { id: 11, name: 'Dr Nice' },
        { id: 12, name: 'Narco' },
        { id: 13, name: 'Bombasto' },
        { id: 14, name: 'Celeritas' },
        { id: 15, name: 'Magneta' },
        { id: 16, name: 'RubberMan' },
        { id: 17, name: 'Dynama' },
        { id: 18, name: 'Dr IQ' },
        { id: 19, name: 'Magma' },
        { id: 20, name: 'Tornado' }
    ]
};
/*
  const getRandomInt = () => {
    const max = 1000;
    const min = 100;
    return Math.floor(Math.random() * Math.floor(max) + min);
  };

  const addProduct = (product) => {
    product.id = getRandomInt();
    data.products.push(product);
    return product;
  };

  const updateProduct = (product) => {
    const index = data.products.findIndex((v) => v.id === product.id);
    console.log(product);
    data.products.splice(index, 1, product);
    return product;
  };

  const deleteProduct = (id) => {
    const value = parseInt(id, 10);
    data.products = data.products.filter((v) => v.id !== value);
    return true;
  };
*/
const getProducts = () => {
    return data.heroes;
};

module.exports = { getProducts };
