import { ADD_CITY, REMOVE_CITY } from './constants';

const { REACT_APP_API_URL, REACT_APP_CLIENT_KEY } = process.env;

export const addCity = (value) => ({
  type: ADD_CITY,
  payload: { value },
  CallAPI: `${REACT_APP_API_URL}/data/2.5/weather?q=${value}&units=metric&APPID=${REACT_APP_CLIENT_KEY}`,
});

export const removeCity = (city) => ({
  type: REMOVE_CITY,
  payload: { city },
});
