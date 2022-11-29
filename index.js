const express = require('express');
const routerApi = require('./routes/index');
const app = express();
const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/error.handler');
const port =  3000;

app.use(express.json()); // Con esto nos permite recibir inf json desde el post

app.get('/', (req, res) => {
  res.send('Hola, mi server en Express...');
});

app.get('/nueva-ruta', (req, res) => {
  res.send('Hola, soy un nuevo endpoint');
});

routerApi(app);

// Los middlewares de tipo error se deben llamar después de definir el routing.
// También es muy importante ver el orden en que éstos se ejecutan
app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log('Servidor ejecutando en puerto: ' + port );
});


