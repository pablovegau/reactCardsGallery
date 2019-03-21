import styled from 'styled-components';

import { appGrayColors, sansSerif } from '../../theme';

const reactCardsGallery_width = '100vw';
const reactCardsGallery_height = '100vh';
const button_bottom = '2rem';
const button_right = button_bottom;

export const Wrapper = styled.div`
  position: relative;
  width: ${reactCardsGallery_width};
  min-height: ${reactCardsGallery_height};
  background-color: ${appGrayColors.black10};
  font-family: ${sansSerif};
`;

export const WrapperCircleButton = styled.div`
  position: fixed;
  bottom: ${button_bottom};
  right: ${button_right};
`;
