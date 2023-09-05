import { useState } from 'react';
import './form.styles.css';

function Form() {

  const [input, setInput] = useState({
    nombre: "",
    imagen: "",
    genres: "",
  })

  const [error, setError] = useState({
    nombre: "requerido",
    imagen: "",
    genres: "",
  })
  
  const validate =(input)=>{
    if( /^[a-zA-ZÀ-ÿ\s]{1,40}$/) {setError({...error, nombre: ""})}
    else{setError({...error, nombre: "Formato invalido"})}
  }

  function handleChange(e){
    setInput({
      ...input,
      [e.target.name]: e.target.value})
    
    validate({
      ...input,
      [e.target.name]: e.target.value
    })
  }

  

    return (
      <div className='form'>
        <form onSubmit={""}>
          <div>
            <label>Nombre</label>
            <input name='nombre' value={input.value} onChange={handleChange}/>
            <span>{error.nombre}</span>
          </div>
          <div>
            <label>Imagen</label>
            <input name='imagen' value={input.value} onChange={handleChange}/>
          </div>
          <div>
            <label >Genres</label>
            <input name='genres' value={input.value} onChange={handleChange}/>
          </div>
          {error.nombre ? null : <button type='submit' className='formulario__btn'>Enviar</button>}
         <button type='submit'>Submit</button>
        </form>
      </div>
    );
  }
  
  export default Form;