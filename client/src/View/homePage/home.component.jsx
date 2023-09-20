import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  getVideogames,
  getByName,
  setAllVideogames,
  getGenres,
  getGenresfilter,
  getOriginFilter,
  getRatingFilter,
  getAZFilter,
} from "../../redux/actions/index";

import Cards from "../../components/cards/cards.component";
import Navbar from "../../components/navbar/navbar.component";
import Pagination from "../../components/pagination/pagination.components";

import "./home.styles.css";

function Home() {
  const dispatch = useDispatch();
  const videogames = useSelector((state) => state.gamesCopy);
  const genres = useSelector((state) => state.genres);

  const [currentPage, setCurrentPage] = useState(1);
  const [cardForPage] = useState(15);


  const indexOfLastVideogame = currentPage * cardForPage;
  const indexOfFirstVideogame = indexOfLastVideogame - cardForPage;
  const currentVideogames = videogames.slice(
    indexOfFirstVideogame,
    indexOfLastVideogame
  );
  // const [orderly, setOrderly] = useState("");

  const paged = function (pageNumber) {
    setCurrentPage(pageNumber);
  };

  const [searchString, setsearchString] = useState("");

  function handleChange(e) {
    e.preventDefault();
    setsearchString(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setCurrentPage(1);
    dispatch(getByName(searchString));
  }
  useEffect(() => {
    dispatch(getGenres());
  }, [dispatch]);


  useEffect(() => {
    dispatch(getVideogames());
  }, [dispatch]);

  function handleGetAll(e) {
    dispatch(setAllVideogames());
    setCurrentPage(1);
  }

  function handleGenreFilter(e) {
    e.preventDefault();
    dispatch(getGenresfilter(e.target.value));
    setCurrentPage(1);
  }

  function handleOriginFilter(e) {
    e.preventDefault();
    dispatch(getOriginFilter(e.target.value));
    setCurrentPage(1);
  }

  function handleRatingFilter(e) {
    e.preventDefault();
    dispatch(getRatingFilter(e.target.value));
    setCurrentPage(1);
  }

  function handleAZFilter(e) {
    e.preventDefault();
    dispatch(getAZFilter(e.target.value));
    setCurrentPage(1);
  }

  return (
    <div className="home">
      <h2 className="home-title">VIDEOGAMES</h2>
      <Navbar
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        handleGetAll={handleGetAll}
        handleGenreFilter={handleGenreFilter}
        handleOriginFilter={handleOriginFilter}
        handleRatingFilter={handleRatingFilter}
        handleAZFilter={handleAZFilter}
        genres ={genres}
      />
      <ul>
        <Cards videogames={currentVideogames} />
      </ul>
      <div>
        <Pagination
          cardForPage={cardForPage}
          videogames={videogames.length}
          paged={paged}
        />
      </div>
    </div>
  );
}

export default Home;
