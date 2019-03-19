import { CREATE_NEW_CARD_REQUEST, DELETE_EXISTING_CARD } from './actions';

const initialState = {
  card: [],
};

const deleteCard = (state, action) => {
  return Object.assign({}, state, { card: [...state.card.filter(card => card.id !== action.payload)] });
};

const addOrModifyCard = (state, action) => {
  const index = state.card.findIndex(card => card.id === action.payload.id);
  if (index !== -1) {
    const statePhoto = state.card;
    statePhoto[index] = action.payload;
    return Object.assign({}, state, { card: [...statePhoto] });
  } else {
    return Object.assign({}, state, { card: [...state.card, action.payload] });
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_NEW_CARD_REQUEST:
      return addOrModifyCard(state, action);

    case DELETE_EXISTING_CARD:
      return deleteCard(state, action);

    default:
      return state;
  }
};

export default reducer;
