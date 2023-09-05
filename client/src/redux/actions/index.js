import axios from 'axios';

export const GET_VIDEOGAMES = "GET_VIDEOGAMES";
export const GET_BY_NAME = "GET_BY_NAME";

export function getVideogames(){
    return async function(dispatch){
        const responde = await axios("http://localhost:3001/videogames");
        return dispatch({
          type: GET_VIDEOGAMES,
          payload: responde.data
        })
    };
}

export function getByName(nombre){
  return async function(dispatch){
      const responde = await axios(`http://localhost:3001/videogames?nombre=${nombre}`);
      return dispatch({
        type: GET_BY_NAME,
        payload: responde.data
      })
  };
}