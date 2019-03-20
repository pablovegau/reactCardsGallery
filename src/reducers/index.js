import { combineReducers } from 'redux';
import cardsBox from '../containers/CardsBox/reducers';
import modal from '../containers/Modal/reducers';

export default combineReducers({
  cardsBox,
  modal,
});
