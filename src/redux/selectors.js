import { createSelector } from 'reselect';

const citiesSelector = (state) => state.cities.entities;

export const citiesLoadedSelector = (state) => state.cities.loaded;
export const citiesLoadingSelector = (state) => state.cities.loading;

// filter neccesary data from response
export const citiesInfoSelector = createSelector(citiesSelector, (cities) =>
  Object.entries(cities).reduce((acc, [key, value]) => {
    const { main, weather, wind } = value;
    const { humidity, temp } = main;
    const { speed } = wind;
    const { icon } = weather[0];
    const newObj = { temp, humidity, icon, speed };

    acc[key] = newObj;

    return acc;
  }, {})
);
