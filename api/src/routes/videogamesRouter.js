const { Router } = require('express');
const { getVideogamesHandler, getVgDetailHandler, createVgHandler } = require('../handlers/videogamesHandler');

const videogamesRouter = Router();

videogamesRouter.get('/',  getVideogamesHandler);

videogamesRouter.get('/:id', getVgDetailHandler);

videogamesRouter.post('/', createVgHandler);

module.exports = videogamesRouter;