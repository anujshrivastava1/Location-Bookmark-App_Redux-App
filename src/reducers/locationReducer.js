// locationReducer.js
import { ADD_LOCATION, DELETE_LOCATION, UPDATE_LOCATION, FETCH_LOCATIONS } from '../actions/locationActions.js';

const initialState = {
  locations: [],
};

const locationReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_LOCATION:
      return {
        ...state,
        locations: [...state.locations, action.payload],
      };
    case DELETE_LOCATION:
      return {
        ...state,
        locations: state.locations.filter(location => location.id !== action.payload),
      };
    case UPDATE_LOCATION:
      return {
        ...state,
        locations: state.locations.map(location =>
          location.id === action.payload.id ? action.payload : location
        ),
      };
    case FETCH_LOCATIONS:
      return {
        ...state,
        locations: action.payload,
      };
    default:
      return state;
  }
};

export default locationReducer;
