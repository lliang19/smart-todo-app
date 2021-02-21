import { createSelector } from 'reselect';

const getUser = (state: TReducers) => state.global.username;

export const getCurrentUser = createSelector(getUser, (username) => {
  return username;
});

export default getCurrentUser;
