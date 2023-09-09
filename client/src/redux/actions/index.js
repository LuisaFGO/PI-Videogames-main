import axios from 'axios';

export const GET_VIDEOGAMES = "GET_VIDEOGAMES";
export const GET_BY_NAME = "GET_BY_NAME";
export const GET_BY_ID = "GET_BY_ID";
export const SET_ALL_VIDEOGAMES = "SET_ALL_VIDEOGAMES";

export function getVideogames(){
    return async function(dispatch){
        const response = await axios.get("http://localhost:3001/videogames");
        const videoGames = response.data;
        return dispatch({
          type: GET_VIDEOGAMES,
          payload: videoGames
        })
    };
}

export function setAllVideogames(){
  return async function(dispatch){
      return dispatch({
        type: SET_ALL_VIDEOGAMES,
      })
  };
}

export function getByName(nombre){
  return async function(dispatch){
      const response = await axios.get(`http://localhost:3001/videogames?name=${nombre}`);
      return dispatch({
        type: GET_BY_NAME,
        payload: response.data
      })
  };
}

export function getByID(id){
  return async function(dispatch){
      const response = await axios.get(`http://localhost:3001/videogames/${id}`);
      return dispatch({
          type:"GET_BY_ID",
          payload: response.data
      })
  };
}