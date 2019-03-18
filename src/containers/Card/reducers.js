import { CREATE_NEW_CARD_REQUEST, EDIT_EXISTING_CARD, DELETE_EXISTING_CARD } from './actions';

const initialState = {
  cards: [
    {
      id: 'card1',
      timestamp: 'hora1',
      title: 'title1',
      description: 'description1',
      url: 'url1',
    },
    {
      id: 'card2',
      timestamp: 'hora2',
      title: 'title2',
      description: 'description2',
      url: 'url2',
    },
  ],
};

const reducer = (state = initialState, action) => {
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
