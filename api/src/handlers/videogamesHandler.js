const {createGameDb, getVgById, getGameByNombre, getAllGame} = require("../controllers/videogamesController")

const getVideogamesHandler = async (req, res)=>{
    const {nombre} = req.query;
    try {
        if(nombre){
            const vgByNombre = await getGameByNombre(nombre);
            res.status(200).json(vgByNombre);
        }else{
            const response = await getAllGame();
            res.status(200).json(response);
        }    
    } catch (error) {
        res.status(400).json({error:error.message});
    }
};

const getVgDetailHandler = async (req, res)=>{
    const {id} = req.params;
    const source = isNaN(id) ? "bd" : "api";
    try {
       const response = await getVgById(id, source); 
       res.status(200).json(response);
    } catch (error) {
        res.status(400).json({error:error.message});
    }
};

const createVgHandler = async (req, res)=>{
    const {nombre, descripcion, plataformas, imagen, fechaLanzamiento, rating, genres} = req.body;
    try {
        const response = await createGameDb(nombre, descripcion, plataformas, imagen, fechaLanzamiento, rating, genres);
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({error:error.message});
    }
};

module.exports = {
 getVideogamesHandler,
 getVgDetailHandler,
 createVgHandler,
}