module.exports = function(app) {
  app.dataSources.mysqlDs.automigrate('CoffeeShop', function(err) {
    if (err) throw err;

    app.models.CoffeeShop.create([
      {name: 'Bel Cafe', city: 'Vancouver'},
      {name: 'Three Bees Coffee House', city: 'San Mateo'},
      {name: 'Caffe Artigiano', city: 'Vancouver'},
    ], function(err, coffeeShops) {
      if (err) throw err;

      console.log('Models created: \n', coffeeShops);
    });
  });
};


module.exports = function(app) {
  app.dataSources.mysqlDs.automigrate('category', function(err) {
    if (err) throw err;

    app.models.category.create([
      {name: 'Bel Cafe', city: 'Vancouver'},
      {name: 'Three Bees Coffee House', city: 'San Mateo'},
      {name: 'Caffe Artigiano', city: 'Vancouver'},
    ], function(err, Categories) {
      if (err) throw err;

      console.log('Models created: \n', Categories);
    });
  });
};


module.exports = function(app) {
  app.dataSources.mysqlDs.automigrate('product', function(err) {
    if (err) throw err;

    app.models.product.create([
      {name: 'Bel Cafe', category: 'Vancouver'},
      {name: 'Three Bees Coffee House', category: 'San Mateo'},
      {name: 'Caffe Artigiano', category: 'Vancouver'},
    ], function(err, products) {
      if (err) throw err;

      console.log('Models created: \n', products);
    });
  });
};
