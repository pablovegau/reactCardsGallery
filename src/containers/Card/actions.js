export const ADD_OR_MODIFY_CARD = 'CREATE_A_CARD_REQUEST';
export const DELETE_EXISTING_CARD = 'DELETE_EXISTING_CARD';

export const addOrModifyCard = payload => ({ type: ADD_OR_MODIFY_CARD, payload });
export const deleteExistingCard = payload => ({ type: DELETE_EXISTING_CARD, payload });
