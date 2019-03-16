import styled from 'styled-components';

import { appColors, appPadding, appFontSizes, appGrayColors } from '../../theme';

const button_horizontalpPadding = appPadding.m;
const button_verticalPadding = appPadding.s;
const button_fontSize = appFontSizes.xl;
const button_fontColor = appGrayColors.white;
const button_borderRadius = '.3rem';

export const Button = styled.button`
  padding: ${button_verticalPadding} ${button_horizontalpPadding};
  border-radius: ${button_borderRadius};
  background-color: ${appColors.primary};
  color: ${button_fontColor};
  font-size: ${button_fontSize};
  text-transform: uppercase;
`;
