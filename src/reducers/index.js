import { combineReducers } from 'redux';
import card from '../containers/Card/reducers';
import modal from '../containers/Modal/reducers';

export default combineReducers({
  card,
  modal,
});
