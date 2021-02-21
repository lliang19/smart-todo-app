import { createAction, createReducer } from '@reduxjs/toolkit';

export const username = createAction<string>('global/username');
export const password = createAction<string>('global/password');

const initialState: TGlobalState = { username: '', password: '' };

export default createReducer(initialState, (builder) => {
  builder
    .addCase(username, (state, action) => {
      state.username = action.payload;
    })
    .addCase(password, (state, action) => {
      state.password = action.payload;
    })
    .addDefaultCase((state, action) => {});
});
