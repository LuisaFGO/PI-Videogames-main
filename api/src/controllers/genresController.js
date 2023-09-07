const axios = require('axios');
const { API_KEY } = process.env;
const {Genres} = require('../db');

const getAllGenres = async() => {
    const api = (await axios.get(`https://api.rawg.io/api/genres?key=${API_KEY}`)).data.results;
    const genres = await api.map((g) => g.name.toLowerCase());
    genres.forEach(gen => {
      Genres.findOrCreate({
          where: { name: gen}
      })
    })
    const genresTypes = await Genres.findAll();
    return genresTypes;
    };
    


module.exports = {
    getAllGenres,
}