import {GET_VIDEOGAMES, GET_BY_NAME, GET_BY_ID, SET_ALL_VIDEOGAMES} from '../actions/index';

let initialState = {videogames:[], gamesCopy:[], videogame:{}, genres:[]};

function rootReducer(state = initialState, action){
   switch(action.type){
    case GET_VIDEOGAMES:
        return{
            ...state,
            videogames: action.payload,
            gamesCopy: action.payload,
        }
    case GET_BY_NAME:
        return{
            ...state,
            gamesCopy: action.payload,
        }
    case SET_ALL_VIDEOGAMES:
        return{
            ...state,
            gamesCopy: state.videogames,
        }
    case GET_BY_ID:
         return{
             ...state,
             videogame: action.payload,
        };
    default:
        return state;
   }
};

export default rootReducer;