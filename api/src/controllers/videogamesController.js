const  {Videogames} = require("../db");

const createGameDb = async (nombre, descripcion, plataformas, imagen, fechaLanzamiento, rating) =>{
 return await Videogames.create({nombre, descripcion, plataformas, imagen, fechaLanzamiento, rating});
};

module.exports ={
    createGameDb,
}