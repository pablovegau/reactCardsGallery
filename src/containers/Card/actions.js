export const CREATE_NEW_CARD_REQUEST = 'CREATE_A_CARD_REQUEST';
export const EDIT_EXISTING_CARD = 'EDIT_EXISTING_CARD';
export const DELETE_EXISTING_CARD = 'DELETE_EXISTING_CARD';

export const createNewCardRequest = payload => ({ type: CREATE_NEW_CARD_REQUEST, payload });
export const editExistingCard = payload => ({ type: EDIT_EXISTING_CARD, payload });
export const deleteExistingCard = payload => ({ type: DELETE_EXISTING_CARD, payload });
