import { ADD_CITY, REMOVE_CITY } from './constants';

export const addCity = (value) => ({
  type: ADD_CITY,
  payload: { value },
});

export const removeCity = (city) => ({
  type: REMOVE_CITY,
  payload: { city },
});
