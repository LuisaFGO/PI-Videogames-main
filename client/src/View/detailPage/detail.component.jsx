import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

import { getByID } from "../../redux/actions/index";

import "./detail.styles.css";

function Detail() {
  const dispatch = useDispatch();
  const videogame = useSelector((state) => state.videogame);
  const params = useParams();

  useEffect(() => {
    dispatch(getByID(params.id));
  }, [dispatch]);

  const fecha = new Date(videogame.released);
  const dia = fecha.getDate();
  const moth = fecha.getMonth();
  const year = fecha.getFullYear();
  const released = `${dia}/${moth}/${year}`;

  return (
    <div className="detail">
      <div>
        <div className="title_name">
          <h2>{videogame.id}</h2>
          <h1>{videogame.name}</h1>
        </div>
        <img
          src={videogame.background_image}
          alt="PhotoDetail"
          width="55%"
          className="img"
        />
        <div>
          <h4>Platforms</h4>
          <p>{videogame.platforms}</p>
        </div>
        <div className="description">
          <h4>Description:</h4>
          <p className="descrip_text">{videogame.description}</p>
        </div>
        <p>
          <strong>Fecha de Lanzamiento</strong>: {released}
        </p>
        <p>
          <strong>Rating</strong>: ★ {`${videogame.rating}`}
        </p>
        <div>
          <h4>Genres</h4>
          {videogame.created ? (
            videogame.genres.map((g, index) => {
              return <p key={index}>{g.name}</p>;
            })
          ) : (
            <p>{videogame.genres}</p>
          )}
        </div>
        <div>
        {videogame.created? <p><h4>Autor</h4>{videogame.autor}</p> : null }
        </div>
        <NavLink to="/home">
          <button className="btn">Volver</button>
        </NavLink>
      </div>
    </div>
  );
}

export default Detail;
