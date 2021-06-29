const router = require('express').Router();
const cors = require('cors');
const controllers = require('./controllers');
const overview = require('./controllers/overview');

// router.get('/o', controllers.overview.get)
//   .get('/q', controllers.qAnda.get)
//   .get('/r', controllers.reviews.get);

router.get('/products', overview.getProducts);
router.get('/products/:productId', overview.getProductById);

module.exports = router;
