import { CREATE_NEW_CARD_REQUEST, EDIT_EXISTING_CARD, DELETE_EXISTING_CARD } from './actions';

const reducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_NEW_CARD_REQUEST:
      // return Object.assign({}, state, { cards: [...state.cards, action.payload] });
      return action.payload;

    case EDIT_EXISTING_CARD:
      // return action.payload;
      console.log('edit');
      break;

    case DELETE_EXISTING_CARD:
      // return action.payload;
      console.log('delete');
      break;

    default:
      return state;
  }
};

export default reducer;
