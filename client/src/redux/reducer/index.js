import {
  GET_VIDEOGAMES,
  GET_BY_NAME,
  GET_BY_ID,
  SET_ALL_VIDEOGAMES,
  GET_GENRES,
  GET_GENRES_FILTER,
  ORIGIN_FILTER,
  RATING_FILTER,
  AZ_FILTER,
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
        videogames: genreFilter,
      };
    case ORIGIN_FILTER:
      const originFilter =
        action.payload === "Created"
          ? state.gamesCopy.filter((origin) => origin.created)
          : state.gamesCopy.filter((origin) => !origin.created);
      return {
        ...state,
        videogames: action.payload === "All" ? state.gamesCopy : originFilter,
      };
    case RATING_FILTER:
      let rating =
        action.payload === "Minor"
          ? state.videogames.sort(function (a, b) {
              if (a.rating > b.rating) {
                return 1;
              }
              if (b.rating > a.rating) {
                return -1;
              }
              return 0;
            })
          : state.videogames.sort(function (a, b) {
              if (a.rating > b.rating) {
                return -1;
              }
              if (b.rating > a.rating) {
                return 1;
              }
              return 0;
            });
      return {
        ...state,
        videogames: rating,
      };
    case AZ_FILTER:
      let azfilter =
        action.payload === "Asc"
          ? state.videogames.sort(function (a, b) {
              if (a.name > b.name) {
                return 1;
              }
              if (b.name > a.name) {
                return -1;
              }
              return 0;
            })
          : state.videogames.sort(function (a, b) {
              if (a.name > b.name) {
                return -1;
              }
              if (b.name > a.name) {
                return 1;
              }
              return 0;
            });
      return {
        ...state,
        videogames: azfilter,
      };
    default:
      return state;
  }
}

export default rootReducer;
