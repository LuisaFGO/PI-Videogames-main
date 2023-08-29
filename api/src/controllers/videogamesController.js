const axios = require('axios');
const  {Videogames} = require("../db");
const { API_KEY } = process.env;

const createGameDb = async (nombre, descripcion, plataformas, imagen, fechaLanzamiento, rating) =>{
 return await Videogames.create({nombre, descripcion, plataformas, imagen, fechaLanzamiento, rating});
};

const getVgById = async(id, source) =>{
    const vidGame = source === "api" ? (await axios.get(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`))
    .data
    : await Videogames.findByPk(id);
    return vidGame;
};


const getAllGame = async() =>{
    const gamesBD = await Videogames.findAll();
    const infoApi = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}`).data;
    const gamesApi = cleanGames(infoApi);
    return [...gamesBD,...gamesApi];
};

const getGameByNombre = async(nombre) =>{

};

module.exports ={
    createGameDb,
    getVgById,
    getGameByNombre,
    getAllGame,
}