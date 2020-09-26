const herodata = require('../shared/hero-data');

// tslint:disable-next-line: only-arrow-functions
module.exports = async function(context, req) {
  try {
    const products = herodata.getProducts();
    context.res.status(200).json(products);
  } catch (error) {
    context.res.status(500).send(error);
  }
};
