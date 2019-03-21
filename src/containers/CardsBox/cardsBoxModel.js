export const state = () =>
  JSON.parse(window.localStorage.getItem('reactCardsGallery')) || {
    cards: [],
  };

export const createCard = (state, action) => {
  const newState = { ...state, cards: [...state.cards, { ...action.payload, veil: false }] };
  window.localStorage.setItem('reactCardsGallery', JSON.stringify(newState));
  return newState;
};

export const updateCard = (cards, newCard) => {
  const index = cards.findIndex(card => card.id === newCard.id);
  cards[index] = { ...cards[index], ...newCard };
  window.localStorage.setItem('reactCardsGallery', JSON.stringify({ cards: cards }));
  return { cards: [...cards] };
};

export const deleteCard = (state, action) => {
  const newState = { ...state, cards: state.cards.filter(card => card.id !== action.payload) };
  window.localStorage.setItem('reactCardsGallery', JSON.stringify(newState));
  return newState;
};

export const compareByTitle = (a, b) => (a.title > b.title ? 1 : -1);

export const compareByDate = (a, b) => (a.date > b.date ? 1 : -1);
