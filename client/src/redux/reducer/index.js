import {GET_VIDEOGAMES, GET_BY_NAME} from '../actions';

let initialState = {allVideogames:[], gamesCopy:[], genres:[]};

function rootReducer(state = initialState, action){
   switch(action.type){
    case GET_VIDEOGAMES:
        return{
            ...state,
            allVideogames: action.payload,
            gamesCopy: action.payload,
        }
    case GET_BY_NAME:
        return{
            ...state,
            allVideogames: action.payload,
        }
    default:
        return state;
   }
};

export default rootReducer;