import {GET_VIDEOGAMES, GET_BY_NAME, GET_BY_ID} from '../actions/index';

let initialState = {videogames:[], gamesCopy:[], genres:[], byId: []};

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
            videogames: action.payload,
        }
    case GET_BY_ID:
         return{
             ...state,
             byId: action.payload,
        };
    default:
        return state;
   }
};

export default rootReducer;