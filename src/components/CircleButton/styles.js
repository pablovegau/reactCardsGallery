import styled from 'styled-components';

import { appColors, appGrayColors } from '../../theme/colors';

const getComputedStyles = ({ secondary }) => `
  background-color: ${secondary ? appGrayColors.black40 : appColors.primary};
`;

export const CircleButtonWrapper = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 50%;
  height: 4rem;
  width: 4rem;
  transition: background-color 0.6s;
  ${() => getComputedStyles}

  &:hover {
    background-color: ${appColors.darkPrimary};
  }

  svg {
    display: block;
    height: 2rem;
  }

  path {
    fill: ${appColors.icons};
  }
`;
