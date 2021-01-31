const { request, response } = require("express");
const { HotelsService } = require("../services");


class HotelsController {


  async getHotels(req = request, res = response) {
    try {

      const hotels = await HotelsService.getHotels();
      res.status(200).json(hotels);

    } catch (error) {
      res.status(400).json(error);
    }
  }


  async searchHotels(req = request, res = response) {

    try {

      const search = req.params.search;
      switch (search) {
        case 'name':
          const name = req.params.param;
          const hotelsNames = await HotelsService.getHotelsName(name);
          if (hotelsNames.length <= 0) {
            return res.status(400).json({
              message: `No se encontro ningun hotel con el nombre ${name}`
            });
          }
          return res.status(200).json(hotelsNames);
        case 'starts':

          const starts = parseInt(req.params.param);
          const hotelsStarts = await HotelsService.getHotelsStart(starts);
          if (hotelsStarts.length <= 0) {
            return res.status(400).json({
              message: `No se encontró ningun hotel con el número ${starts} de estrellas`
            });
          }
          return res.status(200).json(hotelsStarts);

        default:
          break;
      }
    } catch (error) {
      return res.status(500).json({ message: 'Hubo un error' });
    }

  }

}


module.exports = new HotelsController();