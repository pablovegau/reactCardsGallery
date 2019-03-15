import styled from 'styled-components';

import { appGrayColors, appFontSizes, appSemiTransparentColors, appPadding } from '../../theme';

const card_MaxWidth = '23.4375rem';
const card_MinWidth = '18.75rem';
const title_padding = appPadding.s;
const title_height = '12.5rem';
const description_minHeight = '6.25rem;';
const description_padding = appPadding.s;
const description_lineHeight = '1.4rem';
const veil_buttons_padding = appPadding.l;

const getComputedTitleStyles = ({ backgroundImage }) => `
  background-image: url(${backgroundImage});
`;

const getComputedVeilDisplay = ({ showVeil }) => `
  display: ${showVeil ? 'flex' : 'none'};
`;

export const Wrapper = styled.div`
  position: relative;
  max-width: ${card_MaxWidth};
  min-width: ${card_MinWidth};
  box-shadow: 0px 15px 29px -5px rgba(0, 0, 0, 0.5);

  p {
    min-height: ${description_minHeight};
    padding: ${description_padding};
    width: 100%;
    background-color: ${appGrayColors.white};
    display: inline-block;
    line-height: ${description_lineHeight};
  }
`;

export const Title = styled.h2`
  display: flex;
  align-items: flex-end;
  height: ${title_height};
  padding-bottom: ${title_padding};
  padding-left: ${title_padding};
  width: 100%;
  color: ${appGrayColors.white};
  font-size: ${appFontSizes.xxl};
  text-shadow: 0px 0px 10px ${appGrayColors.black};
  background-size: cover;
  background-position: center;
  ${() => getComputedTitleStyles}
`;

export const Veil = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 100%;
  padding-left: ${veil_buttons_padding};
  padding-right: ${veil_buttons_padding};
  background-color: ${appSemiTransparentColors.veil};
  ${() => getComputedVeilDisplay}
`;
