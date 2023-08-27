const {createGameDb} = require("../controllers/videogamesController")

const getVideogamesHandler = (req, res)=>{
    res.status(200).send("Aquí están los videojuegos")
};

const getVgDetailHandler = (req, res)=>{
    res.status(200).send("Aquí está el detalle de id")
};

const createVgHandler = async (req, res)=>{
    const {nombre, descripcion, plataformas, imagen, fechaLanzamiento, rating} = req.body;
    try {
        const response = await createGameDb(nombre, descripcion, plataformas, imagen, fechaLanzamiento, rating);
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({error:error.message})
    }
};

module.exports = {
 getVideogamesHandler,
 getVgDetailHandler,
 createVgHandler,
}