

const cleanGames = (arr) => 
    arr.map((game)=>{
    const platforms = [game.platforms, game.parent_platforms]
          .flatMap(platform => platform.map(p => p.platform.name))
          .filter((name, index, arr) => arr.indexOf(name) === index);
          const genres = game.genres.map(g =>{return { name: g.name}});
    return{
        id: game.id,
        name: game.name,
        description: game.description,
        platforms: platforms,
        background_image: game.background_image,
        released: game.released,
        rating: game.rating,
        genres: genres,
        created: false
    }
});



module.exports = {
    cleanGames,
    
}