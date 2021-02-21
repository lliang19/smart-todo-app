import {
  ActionReducerMapBuilder,
  createAction,
  createReducer,
} from '@reduxjs/toolkit';

const login = createAction<string>('global/login');

const initialState: GlobalState = { user: '' };

export default createReducer(
  initialState,
  (builder: ActionReducerMapBuilder<GlobalState>) => {
    builder
      .addCase(login, (state, action) => {
        state.user = action.payload;
      })
      .addDefaultCase((state, action) => {});
  },
);
