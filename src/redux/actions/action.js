export const SET_USER_NAME = 'SET_USER_NAME';
export const DELETE_USER_NAME = 'DELETE_USER_NAME';
export const setUserName = (value) => {
  return ({
    type: SET_USER_NAME,
    payload: value,
  });
};
export const deleteUserName = () => {
  return ({
    type: DELETE_USER_NAME,
  });
};