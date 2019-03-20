import { state } from './ModalModel';
import { ADD_CARD_BUTTON_PRESSED } from '../ReactCardsGallery/actions';
import {
  VEIL_MODAL_PRESSED,
  INPUT_TITLE_CHANGED,
  INPUT_DESCRIPTION_CHANGED,
  INPUT_URL_CHANGED,
  BUTTON_ADD_CARD_PRESSED,
  BUTTON_MODAL_EDIT_CARD_PRESSED,
} from './actions';
import { BUTTON_EDIT_CARD_PRESSED } from '../Card/actions';

const initialState = state();

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_CARD_BUTTON_PRESSED:
      return { ...state, showModal: true };

    case VEIL_MODAL_PRESSED:
      return { ...initialState };

    case INPUT_TITLE_CHANGED:
      return { ...state, title: action.payload };

    case INPUT_DESCRIPTION_CHANGED:
      return { ...state, description: action.payload };

    case INPUT_URL_CHANGED:
      return { ...state, url: action.payload };
    case BUTTON_EDIT_CARD_PRESSED:
      return { ...action.payload, showModal: true, edition: true };

    case BUTTON_ADD_CARD_PRESSED:
    case BUTTON_MODAL_EDIT_CARD_PRESSED:
      return initialState;

    default:
      return state;
  }
}
