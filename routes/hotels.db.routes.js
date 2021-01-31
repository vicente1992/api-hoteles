const { Router } = require('express');
const { check } = require('express-validator');
const { validateFiels } = require('../middlewares/validate-fields');
const { HotelDBController } = require('../controller');


const router = Router();
router.get('/getHotels', HotelDBController.getHotels);

router.get('/:id', HotelDBController.getHotel);


router.post('/',
  [
    check('name', 'El nombre es obligatorio').not().isEmpty(),
    check('stars', 'La calificación es obligatoria').not().isEmpty(),
    check('price', 'El precio es obligatorio').not().isEmpty(),
    check('image', 'La imagen es obligatoria').not().isEmpty(),
    check('amenities', 'El amenities es obligatorio').not().isEmpty(),
    validateFiels
  ]
  , HotelDBController.create
);
router.put('/:id', HotelDBController.updateHotel)
router.delete('/:id', HotelDBController.deleteHotel)




module.exports = router;