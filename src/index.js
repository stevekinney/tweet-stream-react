import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import rootReducer from './reducers';

import './styles.scss';

const store = createStore(rootReducer);

const Application = () => {
  return (
    <div className="Application">
      <h1>Tweet Stream</h1>
    </div>
  );
};

const rootElement = document.getElementById('root');
ReactDOM.render(
  <Provider store={store}>
    <Application />
  </Provider>,
  rootElement,
);
