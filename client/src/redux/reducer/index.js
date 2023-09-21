import {
  GET_VIDEOGAMES,
  GET_BY_NAME,
  GET_BY_ID,
  SET_ALL_VIDEOGAMES,
  GET_GENRES,
  GET_GENRES_FILTER,
  ORIGIN_FILTER,
  RATING_FILTER,
  NAME_FILTER,
} from "../actions/index";

let initialState = {
  videogames: [],
  gamesCopy: [],
  videogame: {},
  genres: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_VIDEOGAMES:
      return {
        ...state,
        videogames: action.payload,
        gamesCopy: action.payload,
      };
    case GET_BY_NAME:
      return {
        ...state,
        gamesCopy: action.payload,
      };
    case SET_ALL_VIDEOGAMES:
      return {
        ...state,
        gamesCopy: state.videogames,
      };
    case GET_BY_ID:
      return {
        ...state,
        videogame: action.payload,
      };
    case GET_GENRES:
      return {
        ...state,
        genres: action.payload,
      };
    case GET_GENRES_FILTER:
      const videogames = [...state.gamesCopy];
      const genreFilter =
        action.payload === "All" ? [...state.videogames]
          : videogames.filter(game=> game.genres.some(item => item.name.toLowerCase() === action.payload))
      return {
        ...state,
        gamesCopy: genreFilter,
      };
    case ORIGIN_FILTER:
      const originFilter =
        action.payload === "Created"
          ? state.gamesCopy.filter((origin) => origin.created)
          : state.gamesCopy.filter((origin) => !origin.created);
      return {
        ...state,
        gamesCopy: action.payload === "All" ? [...state.videogames] : originFilter,
      };
    case RATING_FILTER:
      const rating =
        action.payload === "Minor"
          ? state.gamesCopy.sort((a,b)=> a.rating - b.rating)
          : state.gamesCopy.sort((a,b)=> b.rating - a.rating)
      return {
        ...state,
        gamesCopy: [...rating],
      };
    case NAME_FILTER:
      const azfilter =
        action.payload === "Asc"
          ? state.gamesCopy.sort((a,b) => a.name.localeCompare(b.name))
          : state.gamesCopy.sort((a,b)=> b.name.localeCompare(a.name))
      return {
        ...state,
        gamesCopy: [...azfilter],
      };
    default:
      return state;
  }
}

export default rootReducer;
