import { ADD_OR_MODIFY_CARD, DELETE_EXISTING_CARD } from './actions';
import { state, deleteCard, addOrModifyCard } from './cardModel';

const initialState = state();

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_OR_MODIFY_CARD:
      return addOrModifyCard(state, action.payload);

    case DELETE_EXISTING_CARD:
      return deleteCard(state, action.payload);

    default:
      return state;
  }
};

export default reducer;
