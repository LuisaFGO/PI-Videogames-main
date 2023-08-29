

const cleanGames = (arr) => arr.map((game)=>{
    return{
        nombre: game.name_original,
        descripcion: game.description,
        plataformas: game.platforms,
        imagen: game.background_image,
        fechaLanzamiento: game.updated,
        rating: game.ratings
    }
});