import axios from 'axios';

export const GET_VIDEOGAMES = "GET_VIDEOGAMES";

export function getVideogames(){
    return async function(dispatch){
        const responde = await axios("http://localhost:3001/videogames");
        return dispatch({
          type: GET_VIDEOGAMES,
          payload: responde.data
        })
    };
}