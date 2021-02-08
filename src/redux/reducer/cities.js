import { ADD_CITY, REMOVE_CITY } from '../constants';

export default (state = {}, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_CITY:
      console.log(payload);
      return { ...state, [payload.value]: payload.value };

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
