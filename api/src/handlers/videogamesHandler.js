const {createGameDb, getVgById, getGameByName, getAllGame} = require("../controllers/videogamesController")

const getVideogamesHandler = async (req, res)=>{
    const {name} = req.query;
    try {
        console.log(req.query)
        if(name){
            const vgByNombre = await getGameByName(name);
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
    const {name, description, platforms, background_image, released, rating, genres} = req.body;
    try {
        if(!name||!description||!platforms||!background_image||!released||!rating||!genres) throw Error("Missing data 😬");
        const response = await createGameDb(name, description, platforms, background_image, released, rating, genres);
        res.status(200).json({message: 'Create Done 🎉 '});
    } catch (error) {
        res.status(400).json({error:error.message});
    }
};

module.exports = {
 getVideogamesHandler,
 getVgDetailHandler,
 createVgHandler,
}