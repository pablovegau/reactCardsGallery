export const state = () => ({
  card: [],
});

export const deleteCard = (state, payload) => {
  return Object.assign({}, state, { card: [...state.card.filter(card => card.id !== payload)] });
};

export const addOrModifyCard = (state, payload) => {
  const index = state.card.findIndex(card => card.id === payload.id);
  if (index !== -1) {
    const statePhoto = state.card;
    statePhoto[index] = payload;
    return Object.assign({}, state, { card: [...statePhoto] });
  } else {
    return Object.assign({}, state, { card: [...state.card, payload] });
  }
};
