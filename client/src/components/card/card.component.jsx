import { Link } from "react-router-dom";
import "./card.styles.css";

function Card({ game }) {
 const id = game.id;
  return (
    <div className="card-container">
      <Link to={`home/${id}`}>
        <p>{id}</p>
        <img src={game.background_image} alt="dog" width="200" />
        <h2>{game.name}</h2>
        {game.genresName.map((el) => (
              <li key={el}>{el}</li>
            ))}
        {/* {game.genres.map((g) => {
          return <p>{g.name}</p>;
        })} */}
      </Link>
    </div>
  );
}

export default Card;
