//CoffeeShop
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

//category
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

//product
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

//user
module.exports = function(app) {
  app.dataSources.mysqlDs.automigrate('User', function(err) {
    if (err) throw err;

    var User = app.models.User;
    User.create({username:'dinesh',email: 'dinesh@sphererays.net', password: '123456'}, function(err, user) {
      if (err) throw err;

      console.log(user);
    });
  });
};

//AccessToken
module.exports = function(app) {
  app.dataSources.mysqlDs.automigrate('AccessToken', function(err) {
    if (err) throw err;

  });
};

//RoleMapping
module.exports = function(app) {
  app.dataSources.mysqlDs.automigrate('RoleMapping', function(err) {
    if (err) throw err;
        
  });
};

//Role
module.exports = function(app) {
  app.dataSources.mysqlDs.automigrate('Role', function(err) {
    if (err) throw err;
        
  });
};

//Role
module.exports = function(app) {
  app.dataSources.mysqlDs.automigrate('Role', function(err) {
    if (err) throw err;
        
  });
};