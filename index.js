const express = require('express');
const routerApi = require('./routes/index');
const app = express();
const port =  3000;

app.use(express.json()); // Con esto nos permite recibir inf json desde el post

app.get('/', (req, res) => {
  res.send('Hola, mi server en Express...');
});

app.get('/nueva-ruta', (req, res) => {
  res.send('Hola, soy un nuevo endpoint');
});

routerApi(app);

app.listen(port, () => {
  console.log('Servidor ejecutando en puerto: ' + port);
});


