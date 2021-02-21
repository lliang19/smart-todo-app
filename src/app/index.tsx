import React, { FC } from 'react';

import { registerRootComponent } from 'expo';
import { Provider } from 'react-redux';

import App from './components/App';
import store from './stores';

const index: FC = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default registerRootComponent(index);
