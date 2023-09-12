import { Link } from "react-router-dom";
import './navbar.styles.css';

function Navbar({handleChange, handleSubmit, handleGetAll}) {
    return (
      <div className='search-box'>
        <form onSubmit={handleSubmit} className='form'>
        <input onChange={handleChange} placeholder='Search of game' type='search'/>  
        <button type="submit">Buscar</button>
        </form>
        <button onClick={()=>handleGetAll()}>Buscar todos</button>
        <Link to="/form">
                <button>Create Videogame</button>
        </Link>
      </div>
    );
  }
  
  export default Navbar;

  