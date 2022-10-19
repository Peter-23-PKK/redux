import { DELETE_USER_NAME, SET_USER_NAME } from "../actions/action";
const initialState = {
  value: ' ',
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_NAME:
      return {
        ...state, value: action.payload
      };
    case DELETE_USER_NAME:
      return {
        ...state, value: ''
      };
    default:
      return state;
  }
}