const express = require('express');
const router = express.Router();

/**
 * Éste endpoint se llama en el browser así:
 * http://localhost:3000/categories/666/products/999
 */
router.get('/:categoryId/products/:productId',(req, res) => {
  const { categoryId, productId } = req.params;
  res.json({
    categoryId: categoryId,
    productId: productId
  });
});

module.exports = router;
