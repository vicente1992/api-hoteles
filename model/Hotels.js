const { model, Schema } = require('mongoose');


const HotelSchema = new Schema({
  name: {
    type: String, required: true
  },
  stars: {
    type: Number, required: true
  },
  price: {
    type: Number, required: true
  },
  image: {
    type: String, required: true
  },
  amenities: {
    type: Array, required: true
  },

});


module.exports = model('Hotels', HotelSchema);