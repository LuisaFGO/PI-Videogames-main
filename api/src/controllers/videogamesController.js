const axios = require('axios');
const  {Videogames, Genres} = require("../db");
const { API_KEY } = process.env;
const {cleanGames, addGenreDb} = require('../utils/index');
const { where } = require('sequelize');


const createGameDb = async (nombre, descripcion, plataformas, imagen, fechaLanzamiento, rating, genres) =>{
 const newGame = await Videogames.create({nombre, descripcion, plataformas, imagen, fechaLanzamiento, rating});
 let gameDb = await Genres.findAll({
    where: {nombre: genres}
})
newGame.addGenre(gameDb);
};

const getVgById = async(id, source) =>{
    // if(source === "api"){
    //     const api = (await axios.get(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`)).data.results;
    //     return cleanGames(api);        
    // }else {
    //     return await Videogames.findByPk(id);
    // }
    const vidGame = source === "api" ? (await axios.get(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`))
    .data
    : await Videogames.findByPk(id);
    return vidGame;
};


const getAllGame = async() =>{
    const gamesBD = await Videogames.findAll();
    const infoApi = (await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&number=100`)).data.results;
    const gamesApi = cleanGames(infoApi);
    return [...gamesBD,...gamesApi];
};

const getGameByNombre = async(nombre) =>{
    const gameBd = await Videogames.findAll({where:{nombre:nombre}});
    const getNombre = (await axios.get(`https://api.rawg.io/api/games?search=${nombre}&key=${API_KEY}&pageSize=15`))
    .data.results;
    const gamesApi = cleanGames(getNombre);
    const gamesFilter = gamesApi.filter((game) => game.nombre.toLowerCase().includes(nombre.toLowerCase()));;

    return [...gamesFilter, ...gameBd];
};

module.exports ={
    createGameDb,
    getVgById,
    getGameByNombre,
    getAllGame,
}