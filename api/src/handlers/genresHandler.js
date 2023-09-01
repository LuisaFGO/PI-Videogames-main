const {getAllGenres} = require('../controllers/genresController');

const getGenresHandler = async(req, res)=>{
    try {
        const getGenre = await getAllGenres();
        res.status(200).json(getGenre);
    } catch (error) {
        res.status(400).json({error:error.message});
    }
};

module.exports = getGenresHandler;