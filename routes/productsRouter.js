const express = require('express');
const faker = require('faker');

const ProductsService = require('../services/product.service');

const router = express.Router();

const service = new ProductsService();


 router.get('/', (req, res) => {
  const products = service.find();
  res.json(products);
});



/**
 * En éste caso, si se pone éste endpoit despues de /products/:id chocarían y noma filter como si fuera una valiable.
 * Por tanto, si los endpoints son similares primero se deben poner los endpoints específicos y después los dinámicos
 * Éste endpoint se llama en el browser así:
 * http://localhost:3000/api/v1/products/filter
 */
 router.get('/filter', (req, res) => {
  res.send('Yo soy un filter');
});


/**
 * Éste endpoint se llama en el browser así:
 * http://localhost:3000/api/v1/products/5
 * http://localhost:3000/api/v1/products/numeroX
 * http://localhost:3000/api/v1/products/variable
 */
router.get('/:id', (req, res) => {
  const { id } = req.params;
  const product = service.findOne(id);

  res.json(product);
});

/**
 * http://localhost:3000/api/v1/products/
 * Se envia:
 *
 *  {
  "name": "Sushi Supremo",
	"price": 666,
	"image": "https://assets.unileversolutions.com/recipes-v2/237341.jpg?imwidth=1600"
}

Se recive:

{
	"message": "created",
	"data": {
		"name": "Sushi Supremo",
		"price": 666,
		"image": "https://assets.unileversolutions.com/recipes-v2/237341.jpg?imwidth=1600"
	}
}
 */
router.post('/', (req, res) => {
  const body = req.body;
  //
  res.status(201).json({
    message: 'created',
    data: body
  });
});

/**
 * Es muy parecido al post, la única diferencia es que se recibe el id del producto que quiero editar
 *
 * El put, en vez de patch debería funcionar también, solo que por convención usamos el patch
 *
 * http://localhost:3000/api/v1/products/1212
 *
 * Se envia:
 * {
	"name": "Change Product"
}

Se recive:

{
	"message": "update",
	"data": {
		"name": "Change Product"
	},
	"id": "1212"
}
 */
router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  res.json({
    message: 'update',
    data: body,
    id: id
  });
});


/**
 * El delete recibe un parámetro pero no va a tener un cuerpo, solamente se manda un identificador para ser eliminado
 */
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    message: 'delete',
    id: id
  });
});


module.exports = router;
