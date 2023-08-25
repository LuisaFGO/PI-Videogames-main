const getVideogamesHandler = (req, res)=>{
    res.status(200).send("Aquí están los videojuegos")
};

const getVgDetailHandler = (req, res)=>{
    res.status(200).send("Aquí está el detalle de id")
};

const createVgHandler = async (req, res)=>{
    res.status(200).send("creando videogame")
};

module.exports = {
 getVideogamesHandler,
 getVgDetailHandler,
 createVgHandler,
}