import { ADD_CITY } from './constants';

export const addCity = (value) => ({
  type: ADD_CITY,
  payload: { value },
});
