import Card from '../card/card.component';

import './cards.styles.css';

function Cards({videogames}) {

  const gamesList = videogames;
  
    return (
      <div className='cards-list'>
        {gamesList?.map(game =>(
          < Card 
          key={game.id}
          game= {game}
          />
        ))};
        {/* <button onClick={gamesList.prevHandler}>Prev</button>
        <button onClick={gamesList.nexHandler}>Next</button> */}
      </div>
    );
  }
  
  export default Cards;