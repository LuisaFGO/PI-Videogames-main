const {getAllGenres} = require('../controllers/genresController');

const getGenresHandler = async(req, res)=>{
    try {
        const getGenre = await getAllGenres();
        res.status(200).json({message: 'Géneros cargados exitosamente en la base de datos'});
    } catch (error) {
        res.status(400).json({error:error.message});
    }
};

module.exports = getGenresHandler;