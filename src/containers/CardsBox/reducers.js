import { state, createCard, updateCard, deleteCard, compareByTitle, compareByDate } from './cardsBoxModel';
import { BUTTON_ADD_CARD_PRESSED, BUTTON_MODAL_EDIT_CARD_PRESSED } from '../Modal/actions';
import { MOUSE_OVER_CARD, MOUSE_OUT_CARD, BUTTON_DELETE_CARD_PRESSED } from '../Card/actions';
import { BUTTON_ORDER_BY_DATE_PRESSED, BUTTON_ORDER_BY_TITLE_PRESSED } from './actions';

const initialState = state();

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUTTON_ADD_CARD_PRESSED:
      return createCard(state, action);

    case MOUSE_OVER_CARD:
      return updateCard(state.cards, { id: action.payload, veil: true });

    case MOUSE_OUT_CARD:
      return updateCard(state.cards, { id: action.payload, veil: false });

    case BUTTON_DELETE_CARD_PRESSED:
      return deleteCard(state, action);

    case BUTTON_MODAL_EDIT_CARD_PRESSED:
      return updateCard(state.cards, { ...action.payload });

    case BUTTON_ORDER_BY_DATE_PRESSED:
      return { cards: state.cards.sort(compareByDate) };

    case BUTTON_ORDER_BY_TITLE_PRESSED:
      return { cards: state.cards.sort(compareByTitle) };

    default:
      return state;
  }
};

export default reducer;
