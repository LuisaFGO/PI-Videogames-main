
import './form.styles.css';

function Form() {
  // const formulario = document.getElementById('formulario');
  // const inputs = document.querySelectorAll('input');

  // const expresiones = {
  //   texto: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
  //   imagen:/^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/,
  //   date:/^(?:(?:(?:0?[1-9]|1\d|2[0-8])[/](?:0?[1-9]|1[0-2])|(?:29|30)[/](?:0?[13-9]|1[0-2])|31[/](?:0?[13578]|1[02]))[/](?:0{2,3}[1-9]|0{1,2}[1-9]\d|0?[1-9]\d{2}|[1-9]\d{3})|29[/]0?2[/](?:\d{1,2}(?:0[48]|[2468][048]|[13579][26])|(?:0?[48]|[13579][26]|[2468][048])00))$/,
  //   rango: /[0-9]/
  // }
  // const campos = {
  //   nombre: false,
  //   imagen: false,
  //   descripcion: false,
  //   plataformas: false,
  //   fechaLanzamiento: false,
  //   raiting: false,
  //   genres: false
  // }
 

 
  return (
    <form  className='formulario' id='formulario'>
      <div className='formulario__grupo' id='grupo__nombre'>
          <label  htmlFor='nombre' className='formulario__label'>Nombre</label>
          <div className='formulario__grupo-input'>
           <input className='formulario__input' id='nombre' name ="nombre" placeholder='Spiderman' autoComplete='off'/>
           <i className='formulario__validacion-estado'>
            <ion-icon name="close-circle-outline"></ion-icon>
           </i>
           <p className='formulario_input_error'>El nombre solo puede tener letras</p>
          </div>
        </div>
        
        <div className='formulario__grupo'  id='gupo__imagen'>
          <label htmlFor='imagen' className='formulario__label'>Imagen</label>
          <div className='formulario__grupo-input'>
           <input className='formulario__input' id='imagen' name ="imagen" placeholder='https://www.google.com/...' autoComplete='off'/>
           <i className='formulario__validacion-estado'>
            <ion-icon name="close-circle-outline"></ion-icon>
           </i>
           <p className='formulario_input_error'>Debe ser una url</p>
          </div>
        </div>
      
        <div className='formulario__grupo'  id='grupo__descripcion'>
          <label htmlFor='descripcion' className='formulario__label'>Descripción</label>
          <div className='formulario__grupo-input'>
           <input className='formulario__input' id='descripcion' name ="descripcion" placeholder='Hombre araña' autoComplete='off'/>
           <i className='formulario__validacion-estado'>
            <ion-icon name="close-circle-outline"></ion-icon>
           </i>
           <p className='formulario_input_error'>La descripción solo puede tener letras</p>
          </div>
        </div>

        <div className='formulario__grupo' id='grupo__plataformas'>
          <label htmlFor='plataformas' className='formulario__label'>plataformas</label>
          <div className='formulario__grupo-input'>
           <input className='formulario__input' id='plataformas' name ="plataformas" placeholder='x-box' autoComplete='off'/>
           <i className='formulario__validacion-estado'>
            <ion-icon name="close-circle-outline"></ion-icon>
           </i>
           <p className='formulario_input_error'>Las plataformas solo debe contener letras y simbolos</p>
          </div>
        </div>

        <div className='formulario__grupo'  id='grupo__fechaLanzamiento'>
          <label htmlFor='fechaLanzamiento' className='formulario__label'>Fecha de lanzamiento</label>
          <div className='formulario__grupo-input'>
           <input className='formulario__input' id='fechaLanzamiento' name ="fechaLanzamiento" placeholder='03-04-2023' autoComplete='off'/>
           <i className='formulario__validacion-estado'>
            <ion-icon name="close-circle-outline"></ion-icon>
           </i>
           <p className='formulario_input_error'>Debe ser una fecha</p>
          </div>
        </div>

        <div className='formulario__grupo' id='grupo__raiting'>
          <label htmlFor='raiting' className='formulario__label'>Raiting</label>
          <div className='formulario__grupo-input'>
           <input className='formulario__input' id='raiting' name ="raiting" placeholder='0 - 10' autoComplete='off'/>
           <i className='formulario__validacion-estado'>
            <ion-icon name="close-circle-outline"></ion-icon>
           </i>
           <p className='formulario_input_error'>Deben ser números de un rango del 0-10</p>
          </div>
        </div>

        <div className='formulario__grupo'  id='grupo__genres'>
          <label htmlFor='genres' className='formulario__label'>Genres</label>
          <div className='formulario__grupo-input'>
           <input className='formulario__input' id='genres' name="genres" placeholder='Action' autoComplete='off'/>
           <i className='formulario__validacion-estado'>
            <ion-icon name="close-circle-outline"></ion-icon>
           </i>
           <p className='formulario_input_error'>Debe ser un Género</p>
          </div>
        </div>

        <div className='formulario__mensaje'>
           <p><ion-icon name="warning-outline"></ion-icon>
           <b>Error:</b>Por favor rellene el fórmulario correctamente.</p>
        </div>

        <div className='formulario__grupo formulario__grupo-btn-enviar'>
          {/* {error.nombre ? null : <button type='submit' className='formulario__btn'>Enviar</button>} */}
          <button type='submit' className='formulario__btn'>Enviar</button>
          <p className='formulario__mensaje-exito'>Formulario enviado exitosamente</p>
        </div>
    </form>
    
  );
}

export default Form;