import './navbar.styles.css';

function Navbar() {
    return (
      <div className='search-box'>
        <form >
        <input placeholder='Search of game' type='search'/>  
        <button type="submit">Buscar</button>
        </form>
      </div>
    );
  }
  
  export default Navbar;

  