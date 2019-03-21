export const VEIL_MODAL_PRESSED = 'VEIL_MODAL_PRESSED';
export const INPUT_TITLE_CHANGED = 'INPUT_TITLE_CHANGED';
export const INPUT_DESCRIPTION_CHANGED = 'INPUT_DESCRIPTION_CHANGED';
export const INPUT_URL_CHANGED = 'INPUT_URL_CHANGED';
export const BUTTON_ADD_CARD_PRESSED = 'BUTTON_ADD_CARD_PRESSED';
export const BUTTON_MODAL_EDIT_CARD_PRESSED = 'BUTTON_MODAL_EDIT_CARD_PRESSED';

export const veilModalPressed = () => ({ type: VEIL_MODAL_PRESSED });
export const inputTitleChanged = payload => ({ type: INPUT_TITLE_CHANGED, payload });
export const inputDescriptionChanged = payload => ({ type: INPUT_DESCRIPTION_CHANGED, payload });
export const inputUrlChanged = payload => ({ type: INPUT_URL_CHANGED, payload });
export const buttonAddCardPressed = payload => ({ type: BUTTON_ADD_CARD_PRESSED, payload });
export const buttonModalEditCardPressed = payload => ({ type: BUTTON_MODAL_EDIT_CARD_PRESSED, payload });
