import styled from 'styled-components';

import { appGrayColors } from '../../theme/colors';

const reactCardsGallery_width = '100vw';
const reactCardsGallery_height = '100vh';
const button_bottom = '2rem';
const button_right = button_bottom;

export const Wrapper = styled.div`
  position: relative;
  width: ${reactCardsGallery_width};
  height: ${reactCardsGallery_height};
  background-color: ${appGrayColors.black10};

  .circleButton {
    position: absolute;
    bottom: ${button_bottom};
    right: ${button_right};
  }
`;