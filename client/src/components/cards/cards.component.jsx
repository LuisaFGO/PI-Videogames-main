import Card from '../card/card.component';

import './cards.styles.css';

function Cards({allGames}) {

  const gamesList = allGames;

    return (
      <div className='cards-list'>
        {gamesList?.map((game) =>(
          < Card game={game}/>
        ))};
      </div>
    );
  }
  
  export default Cards;