const Hotels = require('../model/Hotels');

class HotelsRepository {

  async getHotels() {
    return await Hotels.find();
  }
  async getHotel(id) {

    return await Hotels.findById({ _id: id });
  }
  async create(hotel) {
    return await Hotels.create(hotel);
  }

  async deleteHotel(id) {
    return await Hotels.findByIdAndRemove({ _id: id });
  }

  async updateHotel(id, newHotel) {
    return Hotels.findByIdAndUpdate(id, newHotel, { new: true })
  }


}


module.exports = new HotelsRepository();