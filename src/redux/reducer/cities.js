import { ADD_CITY, REMOVE_CITY, REQUEST, SUCCESS, FAILURE } from '../constants';

const initialState = {
  entities: {},
  loading: false,
  loaded: false,
  error: null,
};

export default (state = initialState, action) => {
  const { type, payload, data, error } = action;

  switch (type) {
    case ADD_CITY + REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case ADD_CITY + SUCCESS:
      const city = payload.value;

      return {
        ...state,
        entities: { [city]: data, ...state.entities },
        loading: false,
        loaded: true,
      };
    case ADD_CITY + FAILURE:
      return {
        ...state,
        loading: false,
        loaded: false,
        error,
      };

    case REMOVE_CITY:
      const cities = { ...state };
      console.log(cities);
      delete cities[payload.city];
      console.log(cities);

      return cities;
    default:
      return state;
  }
};
