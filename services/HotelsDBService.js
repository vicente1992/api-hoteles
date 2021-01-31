const { HotelRepository } = require("../repository");



class HotelsDBService {

  async getHotels() {
    try {
      return await HotelRepository.getHotels();
    } catch (error) {
      throw error;
    }
  }

  async getHotel(id) {
    try {
      return await HotelRepository.getHotel(id);
    } catch (error) {
      throw error;
    }
  }

  async create(hotel) {
    try {
      return await HotelRepository.create(hotel);
    } catch (error) {
      throw error;
    }
  }
  async updateHotel(id, newHotel) {
    return await HotelRepository.updateHotel(id, newHotel);
  }

  async deleteHotel(id,) {
    return await HotelRepository.deleteHotel(id);
  }

}

module.exports = new HotelsDBService();