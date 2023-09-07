const axios = require("axios");
const { Videogames, Genres } = require("../db");
const { API_KEY } = process.env;
const { cleanGames } = require("../utils/index");
const { where } = require("sequelize");

const createGameDb = async (
  name,
  description,
  platforms,
  background_image,
  released,
  rating,
  genres
) => {
  const newGame = await Videogames.create({
    name,
    description,
    platforms,
    background_image,
    released,
    rating,
  });
  let checkGenres = [];
  for (let ele of genres) {
    let genre = await Genres.findOrCreate({
      where: {
        name: ele,
      },
      attributes: ["id"],
      raw: true,
    });
    checkGenres.push(genre[0].id);
  }
  await newGame.addGenres(checkGenres);
};

const getVgById = async (id, source) => {
  if (source === "api") {
    const api = (
      await axios.get(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`)
    ).data;
    if (api.id) {
        let genrestr=[]
        for (i=0;i<api.genres.length;i++) {
            genrestr.push(api.genres[i].name)
        } 
        let platformstr=[]
        for (i=0;i<api.platforms.length;i++) {
          platformstr.push(api.platforms[i].platform.name)
        } 
        const searchapivg = {
          id: api.id,
          name: api.name,
          description: api.description.replace(/<[^>]+>/g, ''),
          platforms: platformstr.toString(),
          background_image: api.background_image,
          released: api.released, 
          rating: api.rating,
          genres: genrestr.toString()
        }
        return searchapivg;
     }
  } else {
    return await Videogames.findByPk(id, {
      include: {
        model: Genres,
        attributes: ["name"],
        through: { attributes: [] },
      },
    });
  }
};

const getAllGame = async () => {
  const gamesBD = await Videogames.findAll({
    include: {
      model: Genres,
      attributes: ["name"],
      through: { attributes: [] },
    },
  });
  const infoApi = (
    await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&number=100`)
  ).data.results;
  const gamesApi = cleanGames(infoApi);
  return [...gamesBD, ...gamesApi];
};

const getGameByName = async (name) => {
  const gameBd = await Videogames.findAll({ where: { name: name } });
  const getName = (
    await axios.get(
      `https://api.rawg.io/api/games?search=${name}&key=${API_KEY}&pageSize=15`
    )
  ).data.results;
  const gamesApi = cleanGames(getName);
  const gamesFilter = gamesApi.filter((game) =>
    game.name.toLowerCase().includes(name.toLowerCase())
  );
  const result = [...gamesFilter, ...gameBd];
  if (!result.length)
    return { message: `Dont found a videogame with name:🥴 '${nombre}' 🥴.` };
  else return result;
};

module.exports = {
  createGameDb,
  getVgById,
  getGameByName,
  getAllGame,
};
