import { ADD_CITY } from '../constants';

export default (state = {}, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_CITY:
      console.log(payload);
      return { ...state, [payload.value]: payload.value };
    default:
      return state;
  }
};
