import { TOGGLE_MODAL } from './actions';

const initialState = {
  showModal: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_MODAL:
      console.log('toggle modal');
      break;

    default:
      return state;
  }
}
