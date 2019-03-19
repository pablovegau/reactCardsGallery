export const state = () => ({
  showModal: false,
  cardToEdit: {},
});

export const generateStateDependsOnThePayload = (state, payload) => {
  if (payload && payload.description) {
    return Object.assign({}, state, {
      showModal: !state.showModal,
      cardToEdit: payload,
    });
  } else {
    return Object.assign({}, state, {
      showModal: !state.showModal,
      cardToEdit: {},
    });
  }
};
