import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import counter from './counterReducer';
import repos from './reposReducer';

export default combineReducers({
  router: routerReducer,
  counter,
  repos
})
