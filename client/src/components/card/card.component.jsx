import {Link} from 'react-router-dom';
import './card.styles.css';

function Card({game}) {

    const {nombre, imagen, genres, id} = game;

    return (
      <div className='card-container'>
       <Link to={`/home/${id}`}>
         <h2>{nombre}</h2>
         <p>{imagen}</p>
         <p>{genres}</p>
         </ Link>
       </div>
    );
  }
  
  export default Card;