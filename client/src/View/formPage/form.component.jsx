import { Link } from "react-router-dom";
import { useState } from "react";
// import { useSelector } from 'react-redux';
import axios from "axios";

import "./form.styles.css";

function Form() {
  // let allgenres = useSelector((state) => state.genres)

  const [input, setInput] = useState({
    name: "",
    background_image: "",
    description: "",
    platforms: "",
    released: "",
    rating: "",
    genres: [],
    autor: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    background_image: "",
    description: "",
    platforms: "",
    released: "",
    rating: "",
    genres: [],
    autor: "",
  });

  //   function handleGenres(e) {
  //     setInput({
  //       ...input,
  //       genres: [...input.genres,e.target.value]
  //     })
  //  }

  function handleOnChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    validate({
      ...input,
      [e.target.name]: e.target.value,
    });
  }

  const validate = (input) => {
    let errors = {};
    if (!input.name) {
      errors = { ...errors, name: "Name is required" };
    } else {
      errors = { ...errors, name: "" };
    }

    if (!input.description) {
      errors = { ...errors, description: " Please Write a short description" };
    } else {
      errors = { ...errors, description: "" };
    }

    setErrors(errors);
  };
  async function handleSubmit(e) {
    e.preventDefault();
    await axios
      .post("http://localhost:3001/videogames", input)
      .then((res) => alert("¡Create done!"))
      .catch((err) => alert("Check your details"));
    setInput({
      name: "",
      background_image: "",
      description: "",
      platforms: "",
      released: "",
      rating: "",
      genres: [],
      autor: "",
    });
  }

  return (
    <div>
      <h2 className="title">¡Create Videogame!</h2>
      <div>
        <form className="formulario" onSubmit={handleSubmit}>
          <div className="formulario__grupo">
            <label htmlFor="name" className="formulario__label">
              Nombre
            </label>
            <div className="formulario__grupo-input">
              <input
                className="formulario__input"
                id="name"
                name="name"
                type="text"
                value={input.name}
                onChange={handleOnChange}
                placeholder="Spiderman"
                autoComplete="off"
              />
              {errors.name && (
                <p className="formulario_input_error"> {errors.name} </p>
              )}
              {/* <p className="formulario_input_error">Deben tener un nombre</p> */}
              <i className="formulario__validacion-estado">
                <ion-icon name="close-circle-outline"></ion-icon>
              </i>
            </div>
          </div>

          <div className="formulario__grupo">
            <label htmlFor="imagen" className="formulario__label">
              Imagen
            </label>
            <div className="formulario__grupo-input">
              <input
                className="formulario__input"
                id="imagen"
                name="background_image"
                type="text"
                value={input.background_image}
                onChange={handleOnChange}
                placeholder="https://www.google.com/..."
                autoComplete="off"
              />
              <i className="formulario__validacion-estado">
                <ion-icon name="close-circle-outline"></ion-icon>
              </i>
              <p className="formulario_input_error">Debe ser una url</p>
            </div>
          </div>

          <div className="formulario__grupo">
            <label htmlFor="description" className="formulario__label">
              Descripción
            </label>
            <div className="formulario__grupo-input">
              <input
                className="formulario__input"
                id="description"
                name="description"
                type="text"
                value={input.description}
                onChange={handleOnChange}
                placeholder="Hombre araña"
                autoComplete="off"
              />
              <i className="formulario__validacion-estado">
                <ion-icon name="close-circle-outline"></ion-icon>
              </i>
              <p className="formulario_input_error">
                La descripción solo puede tener letras
              </p>
            </div>
          </div>

          <div className="formulario__grupo">
            <label htmlFor="platforms" className="formulario__label">
              Plataformas
            </label>
            <div className="formulario__grupo-input">
              <input
                className="formulario__input"
                id="platforms"
                name="platforms"
                value={input.platforms}
                onChange={handleOnChange}
                placeholder="x-box"
                autoComplete="off"
              />
              <i className="formulario__validacion-estado">
                <ion-icon name="close-circle-outline"></ion-icon>
              </i>
              <p className="formulario_input_error">
                Las plataformas solo debe contener letras y simbolos
              </p>
            </div>
          </div>

          <div className="formulario__grupo">
            <label htmlFor="released" className="formulario__label">
              Fecha de lanzamiento
            </label>
            <div className="formulario__grupo-input">
              <input
                className="formulario__input"
                id="released"
                name="released"
                type="date"
                value={input.released}
                onChange={handleOnChange}
                placeholder="03-04-2023"
                autoComplete="off"
              />
              <i className="formulario__validacion-estado">
                <ion-icon name="close-circle-outline"></ion-icon>
              </i>
              <p className="formulario_input_error">Debe ser una fecha</p>
            </div>
          </div>

          <div className="formulario__grupo">
            <label htmlFor="rating" className="formulario__label">
              Raiting
            </label>
            <div className="formulario__grupo-input">
              <select
                value={input.rating}
                onChange={handleOnChange}
                className="formulario__input"
                name="rating"
                id="rating"
              >
                <option value="">Select a rating (1-5)</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
              <i className="formulario__validacion-estado">
                <ion-icon name="close-circle-outline"></ion-icon>
              </i>
              <p className="formulario_input_error">
                Deben ser números de un rango del 1-5
              </p>
            </div>
          </div>
          <div className="formulario__grupo">
            <label htmlFor="autor" className="formulario__label">
              Autor
            </label>
            <div className="formulario__grupo-input">
              <input
                className="formulario__input"
                id="autor"
                name="autor"
                type="text"
                value={input.autor}
                onChange={handleOnChange}
                placeholder="Luisa G"
                autoComplete="off"
              />
            </div>
          </div>

          <div className="formulario__grupo">
            <label htmlFor="genres" className="formulario__label">
              Genres
            </label>
            <div className="formulario__grupo-input">
              <input
                className="formulario__input"
                id="genres"
                name="genres"
                type=""
                value={input.genres}
                onChange={handleOnChange}
                placeholder="Action"
                autoComplete="off"
              />
              {/* <select
                multiple={true}
                value={input.genres}
                onChange={handleGenres}
                className="formulario__input"
                id="genres"
                name="genres"
              > <option value="">Select Genres</option>
                {allgenres.map((g) => {
                  return <option value={g}>{g}</option>;
                })}
              </select>
              <ul ><li>{input.genres.map(g => g + ' ,')}</li></ul>  */}
              <i className="formulario__validacion-estado">
                <ion-icon name="close-circle-outline"></ion-icon>
              </i>
              <p className="formulario_input_error">Debe ser un Género</p>
            </div>
          </div>

          <div className="formulario__mensaje">
            <p>
              <ion-icon name="warning-outline"></ion-icon>
              <b>Error:</b>Por favor rellene el fórmulario correctamente.
            </p>
          </div>

          <div className="formulario__grupo formulario__grupo-btn-enviar">
            {/* {error.nombre ? null : <button type='submit' className='formulario__btn'>Enviar</button>} */}
            <div className="onebtn">
              <button type="submit" className="formulario__btn">
                Enviar
              </button>
              <Link to="/home" className="link_goBack">
                <button>Back to home</button>
              </Link>
            </div>
            <p className="formulario__mensaje-exito">
              Formulario enviado exitosamente
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;
