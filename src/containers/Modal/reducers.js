import { TOGGLE_MODAL } from './actions';

const initialState = {
  showModal: false,
  cardToEdit: {},
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_MODAL:
      if (action.payload && action.payload.description) {
        return Object.assign({}, state, {
          showModal: !state.showModal,
          cardToEdit: action.payload,
        });
      } else {
        return Object.assign({}, state, {
          showModal: !state.showModal,
          cardToEdit: {},
        });
      }

    default:
      return state;
  }
}
