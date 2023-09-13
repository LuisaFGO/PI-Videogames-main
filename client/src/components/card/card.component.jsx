import { Link } from "react-router-dom";
import "./card.styles.css";

function Card({ game }) {
 const id = game.id;
  return (
    <div className="card-container">
      <Link to={`home/${id}`} className='link'>
        <img src={game.background_image} alt="videogame" width="130" className="img"/>
        <h2>{game.name}</h2>
        <div>
        <h4>Genres:</h4>
        {game.genres ? game.genres.map((g, index) => {
          return <p key={index}> ★ {g.name}</p>;
        }): null}
        </div>
      </Link>
    </div>
  );
}

export default Card;
