import { createSelector } from 'reselect';

const getUser = (state: GlobalState) => state.user;

export const getCurrentUser = createSelector([getUser], (user) => {
  return user;
});

export default getCurrentUser;
