const { request, response } = require("express");
const HotelsDBService = require("../services/HotelsDBService");


class HotelDBController {


  async getHotels(req = request, res = response) {
    try {

      const hotels = await HotelsDBService.getHotels();
      return res.status(200).json(hotels);

    } catch (error) {
      return res.status(400).json(error);
    }
  }
  async getHotel(req = request, res = response) {

    try {

      const id = req.params.id;
      const hotel = await HotelsDBService.getHotel(id);
      if (!hotel) {
        return res.status(400).json({ message: `No existe un hotel con el id ${id}` });
      }
      return res.status(200).json(hotel);

    } catch (error) {
      return res.status(400).json(error);
    }
  }
  async create(req = request, res = response) {

    try {

      const hotels = await HotelsDBService.create(req.body);
      return res.status(201).json({
        message: 'Registro exitoso',
        hotels

      });

    } catch (error) {
      return res.status(400).json(error);
    }

  }

  async updateHotel(req = request, res = response) {

    try {
      const id = req.params.id;

      const hotel = await HotelsDBService.getHotel(id);
      if (!hotel) {
        return res.status(400).json({ message: `No existe un hotel con el id ${id}` });
      }
      const hotelUpdated = await HotelsDBService.updateHotel(hotel.id, req.body);
      return res.status(200).json({
        message: `Hotel actualizado exitosamente`,
        hotelUpdated
      });
    } catch (error) {
      return res.status(400).json(error);
    }
  }


  async deleteHotel(req = request, res = response) {
    try {

      const id = req.params.id;
      const hotel = await HotelsDBService.getHotel(id);
      if (!hotel) {
        return res.status(400).json({ message: `No existe un hotel con el id ${id}` });
      }
      await HotelsDBService.deleteHotel(id);
      return res.status(200).json({ message: `Hotel eliminado exitosamente` });

    } catch (error) {
      return res.status(400).json(error);
    }
  }
}

module.exports = new HotelDBController();