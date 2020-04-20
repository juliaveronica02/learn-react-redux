const initialState = {
  count: 0,
};
const INCREAMENT = "INCREAMENT";
const DECREAMENT = "DECREAMENT";

export { INCREAMENT, DECREAMENT };
export default (state = initialState, action = {}) => {
  switch (action.type) {
    case INCREAMENT:
      return Object.assign({}, state, { count: state.count + 1 });
    case DECREAMENT:
      return Object.assign({}, state, { count: state.count - 1 });
    default:
      return state;
  }
};
