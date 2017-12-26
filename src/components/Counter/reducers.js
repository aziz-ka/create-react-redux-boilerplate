import { ACTIONS } from './constants';


export function counterReducer(state=0, { payload, type }) {
  switch (type) {
    case ACTIONS.INCREASE:
      return state + 1;

    case ACTIONS.RESET:
      return 0;

    default:
      return state;
  }
}
