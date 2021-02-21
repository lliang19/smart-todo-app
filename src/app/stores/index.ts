import { configureStore } from '@reduxjs/toolkit';

import globalReducer from './global';

const reducer = {
  global: globalReducer,
};

export default configureStore({ reducer });
