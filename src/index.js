import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppContainer from './Containers/AppContainer';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './Reducers/index.js';
import registerServiceWorker from './registerServiceWorker';

const devTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(rootReducer, devTools);

ReactDOM.render(<Provider store={store}>
  <AppContainer/>
</Provider>, document.getElementById('root'));
registerServiceWorker();
