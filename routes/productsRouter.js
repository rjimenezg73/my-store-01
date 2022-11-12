const express = require('express');
const faker = require('faker');

const router = express.Router();


/**
 * En éste endpoint implementamos el uso de la librería faker.
 * Éste endpoint se llama en el browser así:
 * http://localhost:3000/api/v1/products/
 * http://localhost:3000/api/v1/products?size=3
 */
 router.get('/', (req, res) => {
  const products = [];
  const { size } = req.query;
  const limit = size || 10; // Si envian parametro lo toma, de lo contrario asigna 10
  for (let index = 0; index < limit; index++) {
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.imageUrl()
    });
  }
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
  res.json({
    id: id,
    Name: "Producto 2",
    Price: 5000
  });
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
  res.json({
    message: 'created',
    data: body
  });
});

module.exports = router;
