import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import { counterReducer } from './components/Counter/reducers';


export default combineReducers({
  routing: routerReducer,

  data: {},

  ui: combineReducers({
    counter: counterReducer
  })
});
