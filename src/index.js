import React from 'react';
import ReactDOM from 'react-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { syncHistoryWithStore } from 'react-router-redux';

import App from './app';
import configureStore from './store';
import registerServiceWorker from './utils/registerServiceWorker';
import './styles/index.css';


const store = configureStore();
const history = syncHistoryWithStore(createBrowserHistory(), store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App history={history} store={store} />
    </Router>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
