export const CREATE_NEW_CARD_REQUEST = 'CREATE_A_CARD_REQUEST';
export const EDIT_EXISTING_CARD = 'EDIT_EXISTING_CARD';
export const DELETE_EXISTING_CARD = 'DELETE_EXISTING_CARD';

export const createNewCardRequest = payload => ({ type: CREATE_NEW_CARD_REQUEST, payload });
export const editExistingCard = () => ({ type: EDIT_EXISTING_CARD });
export const deleteExistingCard = () => ({ type: DELETE_EXISTING_CARD });
