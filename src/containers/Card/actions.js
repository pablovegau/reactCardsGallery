export const MOUSE_OVER_CARD = 'MOUSE_OVER_CARD';
export const MOUSE_OUT_CARD = 'MOUSE_OUT_CARD';
export const BUTTON_EDIT_CARD_PRESSED = 'BUTTON_EDIT_CARD_PRESSED';
export const BUTTON_DELETE_CARD_PRESSED = 'BUTTON_DELETE_CARD_PRESSED';

export const mouseOverCard = payload => ({ type: MOUSE_OVER_CARD, payload });
export const mouseOutCard = payload => ({ type: MOUSE_OUT_CARD, payload });
export const buttonEditCardPressed = payload => ({ type: BUTTON_EDIT_CARD_PRESSED, payload });
export const buttonDeleteCardPressed = payload => ({ type: BUTTON_DELETE_CARD_PRESSED, payload });
