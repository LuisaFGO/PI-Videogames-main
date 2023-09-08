import Card from '../card/card.component';

import './cards.styles.css';

function Cards({videogames}) {

  const gamesList = videogames;

    return (
      <div className='cards-list'>
        {gamesList?.map(game =>(
          < Card 
          key={game.id}
          id = {game.id}
          image={game.background_image}
          name={game.name}
          genres={game.genres}
          />
        ))};
      </div>
    );
  }
  
  export default Cards;