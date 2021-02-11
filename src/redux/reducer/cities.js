import {
  ADD_CITY,
  UPDATE_CITY,
  REMOVE_CITY,
  REQUEST,
  SUCCESS,
  FAILURE,
} from '../constants';

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
      return {
        ...state,
        entities: { [payload.value]: data, ...state.entities },
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

    case UPDATE_CITY + REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case UPDATE_CITY + SUCCESS:
      return {
        ...state,
        entities: { [payload.value]: data, ...state.entities },
        loading: false,
        loaded: true,
      };
    case UPDATE_CITY + FAILURE:
      return {
        ...state,
        loading: false,
        loaded: false,
        error,
      };

    case REMOVE_CITY:
      const newEntities = { ...state.entities };

      delete newEntities[payload.value];
      console.log(newEntities);

      return {
        ...state,
        entities: { ...newEntities },
      };
    default:
      return state;
  }
};
