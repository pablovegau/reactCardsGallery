import { CREATE_NEW_CARD_REQUEST, EDIT_EXISTING_CARD, DELETE_EXISTING_CARD } from './actions';

const initialState = {
  card: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_NEW_CARD_REQUEST:
      return Object.assign({}, state, { card: [...state.card, action.payload] });

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
