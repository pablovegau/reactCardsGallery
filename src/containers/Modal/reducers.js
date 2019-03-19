import { TOGGLE_MODAL } from './actions';
import { state, generateStateDependsOnThePayload } from './ModalModel';

const initialState = state();

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_MODAL:
      return generateStateDependsOnThePayload(state, action.payload);

    default:
      return state;
  }
}
