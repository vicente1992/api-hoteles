const { Router } = require('express');
const { HotelsController } = require('../controller');

const router = Router();



router.get('/hotels', HotelsController.getHotels);
router.get('/hotels/:search/:param', HotelsController.searchHotels);





module.exports = router;