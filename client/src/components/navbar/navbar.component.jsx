import { Link } from "react-router-dom";
import "./navbar.styles.css";

function Navbar({
  handleChange,
  handleSubmit,
  handleGetAll,
  handleGenreFilter,
  handleOriginFilter,
  handleRatingFilter,
  handleAZFilter,
  genres
}) {

  return (
    <div className="search-box">
      <form onSubmit={handleSubmit} className="form">
        <input
          onChange={handleChange}
          placeholder="Search of game"
          type="search"
        />
        <button type="submit">Buscar</button>
      </form>
      <button onClick={() => handleGetAll()}>Buscar todos</button>
      <Link to="/form">
        <button>Create Videogame</button>
      </Link>
      <div className="select_filters">
        <select className="select_f" onChange={(e)=> handleGenreFilter(e)}>
          <option>Select a Genre</option>
          <option value="All">All</option>
          {genres.map((genre) => (
            <option key={genre.id} value={genre.name}>
              {genre.name}
            </option>
          ))}
        </select>

        <select
          className="select_f"
          onChange={(e) => handleOriginFilter(e)}
        >
          <option>Select an Origin</option>
          <option value="All">All</option>
          <option value="Created">Created</option>
          <option value="Api">Actual</option>
        </select>

        <select
          className="select_f"
          onChange={(e) => handleRatingFilter(e)}
        >
          <option>Select a Rating</option>
          <option value="Higher">Rating Higher</option>
          <option value="Minor">Rating Minor</option>
        </select>

        <select className="select_f" onChange={(e) => handleAZFilter(e)}>
          <option>Select an Order</option>
          <option value="Asc">A-Z</option>
          <option value="Desc">Z-A</option>
        </select>
      </div>
    </div>
  );
}

export default Navbar;
