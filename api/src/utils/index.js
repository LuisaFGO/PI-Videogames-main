

const cleanGames = (arr) => arr.map((game)=>{
    return{
        id: game.id,
        nombre: game.name,
        descripcion: game.description,
        plataformas: game.platforms,
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