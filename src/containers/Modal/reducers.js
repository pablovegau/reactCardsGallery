import { TOGGLE_MODAL } from './actions';

const initialState = {
  showModal: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_MODAL:
      return Object.assign({}, state, { showModal: !state.showModal });

    default:
      return state;
  }
}
