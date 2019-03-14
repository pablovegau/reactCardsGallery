import styled from 'styled-components';

import { appGrayColors } from '../../theme/colors';

export const Wrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  background-color: ${appGrayColors.black10};

  .circleButton {
    position: absolute;
    bottom: 2rem;
    right: 2rem;
  }
`;
