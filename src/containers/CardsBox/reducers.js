import { state } from './cardsBoxModel';
import { BUTTON_ADD_CARD_PRESSED, BUTTON_MODAL_EDIT_CARD_PRESSED } from '../Modal/actions';
import { MOUSE_OVER_CARD, MOUSE_OUT_CARD, BUTTON_DELETE_CARD_PRESSED } from '../Card/actions';

const initialState = state();

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUTTON_ADD_CARD_PRESSED:
      return { ...state, cards: [...state.cards, { ...action.payload, veil: false }] };

    case MOUSE_OVER_CARD:
      return updateCard(state.cards, { id: action.payload, veil: true });
    case MOUSE_OUT_CARD:
      return updateCard(state.cards, { id: action.payload, veil: false });
    case BUTTON_DELETE_CARD_PRESSED:
      return { ...state, cards: deleteCard(state.cards, action.payload) };
    case BUTTON_MODAL_EDIT_CARD_PRESSED:
      return updateCard(state.cards, { ...action.payload });
    default:
      return state;
  }
};

const updateCard = (cards, newCard) => {
  const index = cards.findIndex(card => card.id === newCard.id);
  cards[index] = { ...cards[index], ...newCard };
  return { cards: [...cards] };
};

const deleteCard = (cards, id) => cards.filter(card => card.id !== id);

export default reducer;
