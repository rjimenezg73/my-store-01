const express = require('express');
const productsRouter = require('./productsRouter');
const categoriesRouter = require('./categoriesRouter');
const usersRouter = require('./usersRouter');

// function routerApi(app){
//   app.use('/products', productsRouter);
//   app.use('/categories', categoriesRouter);
//   app.use('/users', usersRouter);
//   app.use('/api', apiRouter)
// }

/**
 * Si se quiere generar una nueva ruta maestra se hace lo siguiente
 */
function routerApi(app){

  const router = express.Router();

  app.use('/api/v1', router);

  router.use('/products', productsRouter);
  router.use('/categories', categoriesRouter);
  router.use('/users', usersRouter);
}

module.exports = routerApi;
