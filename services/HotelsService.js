
const data = require('../data/data.json');

class HotelsService {

  async getHotels() {
    try {
      return await data;
    } catch (error) {
      throw error;
    }
  }

  async getHotelsName(name) {
    try {
      name = name.toLowerCase();
      return await data.filter(hotel => hotel.name.toLowerCase().includes(name));
    } catch (error) {
      throw error;
    }
  }

  async getHotelsStart(starts) {
    try {
      return await data.filter(hotel => hotel.stars === starts);
    } catch (error) {
      throw error;
    }
  }
}




module.exports = new HotelsService();