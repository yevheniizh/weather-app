import { REQUEST, SUCCESS, FAILURE } from '../constants';

export default (store) => (next) => async (action) => {
  if (!action.CallAPI) return next(action);

  const { CallAPI, type, ...rest } = action;

  next({ ...rest, type: type + REQUEST });

  try {
    const data = await fetch(CallAPI).then((res) => {
      if (res.status === 200) {
        res.json();
      } else {
        throw new Error(res.statusText);
      }
    });

    next({ ...rest, type: type + SUCCESS, data });
  } catch (error) {
    alert(`${error.message}. Please try again`);
    next({ ...rest, type: type + FAILURE, error });
  }
};
