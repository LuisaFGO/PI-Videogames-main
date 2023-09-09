import './navbar.styles.css';

function Navbar({handleChange, handleSubmit, handleGetAll}) {
    return (
      <div className='search-box'>
        <form onSubmit={handleSubmit} className='form'>
        <input onChange={handleChange} placeholder='Search of game' type='search'/>  
        <button type="submit">Buscar</button>
        </form>
        <button onClick={()=>handleGetAll()}>Buscar todos</button>
      </div>
    );
  }
  
  export default Navbar;

  