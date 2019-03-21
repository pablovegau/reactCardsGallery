import styled from 'styled-components';

import { appColors, appGrayColors } from '../../theme';

const circleButton_borderRadius = '50%';
const circleButton_height = '4rem';
const circleButton_width = circleButton_height;
const circleButton_colorTransitionTime = '0.6s';
const icon_height = '2rem';

const getComputedStyles = ({ secondary }) => `
  background-color: ${secondary ? appGrayColors.black40 : appColors.primary};
`;

export const CircleButtonWrapper = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: ${circleButton_borderRadius};
  height: ${circleButton_height};
  width: ${circleButton_width};
  box-shadow: 0px 0px 19px 1px rgba(0, 0, 0, 0.75);
  cursor: pointer;
  transition: background-color ${circleButton_colorTransitionTime};
  ${() => getComputedStyles}

  &:hover {
    background-color: ${appColors.darkPrimary};
  }

  svg {
    display: block;
    height: ${icon_height};
  }

  path {
    fill: ${appColors.icons};
  }
`;
