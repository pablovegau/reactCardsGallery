import styled from 'styled-components';

import { appColors, appPadding, appFontSizes, appGrayColors } from '../../theme';

const getPositionParameters = ({ position }) => {
  switch (position) {
    case 'center':
      return `
        margin-left: auto;
        margin-right: auto;
      `;
    case 'right':
      return `
        margin-left: auto;
        margin-right: 0;
      `;

    default:
      return null;
  }
};

const button_horizontalpPadding = appPadding.m;
const button_verticalPadding = appPadding.s;
const button_fontSize = appFontSizes.xl;
const button_fontColor = appGrayColors.white;
const button_borderRadius = '.3rem';
const button_colorTransitionTime = '0.6s';

export const Button = styled.button`
  display: block;
  padding: ${button_verticalPadding} ${button_horizontalpPadding};
  border-radius: ${button_borderRadius};
  background-color: ${appColors.primary};
  color: ${button_fontColor};
  font-size: ${button_fontSize};
  cursor: pointer;
  text-transform: uppercase;
  transition: background-color ${button_colorTransitionTime};
  ${props => getPositionParameters({ position: props.position })}

  &:hover {
    background-color: ${appColors.darkPrimary};
  }
`;
