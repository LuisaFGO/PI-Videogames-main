

const cleanGames = (arr) => 
    arr.map((game)=>{
    const platforms = [game.platforms, game.parent_platforms]
          .flatMap(platform => platform.map(p => p.platform.name))
          .filter((name, index, arr) => arr.indexOf(name) === index);
          //const genres = game.genres.map(g =>{g.id, g.name});
    return{
        id: game.id,
        nombre: game.name,
        descripcion: game.description,
        plataformas: platforms,
        imagen: game.background_image,
        fechaLanzamiento: game.released,
        rating: game.rating,
        genres: game.genres,
        created: false
    }
});

const addGenreDb = async (arr) =>{
    return await arr.findAll({
        include:{
          model: Genres,
          attributes: ['nombre'],
          through: {
            attributes: [], // A Traves de la tabla atributes. 
        }
    } 
})
}

module.exports = {
    cleanGames,
    addGenreDb,
}