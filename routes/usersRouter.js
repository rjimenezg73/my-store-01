const express = require('express');
const router = express.Router();

/**
 * Ejemplo de parámetros Query
 * Cómo el parámetro es opcional no lo definiremos en la ruta, sino viene como parámetro dentro de nuestro request
 * Éste endpoint se llama en el browser así:
 * http://localhost:3000/api/v1/users?limit=10&offset=200
 */
 router.get('/', (req, res) => {
  const { limit, offset } = req.query;
  if(limit && offset){
    res.json({
      limit,
      offset
    })
  } else{
    res.send('No hay parámetros!');
  }
});

module.exports = router;
