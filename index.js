const express = require('express');
const cors = require('cors');
const routerApi = require('./routes/index');
const app = express();
const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/error.handler');
const port =  3000;

app.use(express.json()); // Con esto nos permite recibir inf json desde el post
// app.use(cors()); // Utilizandolo de esta manera habilita a cualquier dominio

// Si se quiere controlar el acceso a solo algunas aplicaciones se hace de la siguiente manera
const whiteList = ['http://localhost:8080', 'https://myapp.com'];
const options = {
  origin: (origin, callback) => {
    if(whiteList.includes(origin)){
      callback(null, true);
    }else{
      callback(new Error('No permitido!'));
    }
  }
}
app.use(cors(options));

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


