import styled from 'styled-components';

import {
  appPadding,
  appMargin,
  appFontSizes,
  appGrayColors,
  centerWithTransform,
  appSemiTransparentColors,
} from '../../theme';

const wrapper_width = '100vw';
const wrapper_height = '100vh';

const form_padding = appPadding.m;
const form_backgroundColor = appGrayColors.white;
const form_minWidth = '17.5rem';
const form_maxWidth = '30rem';
const form_width = '90%';

const title_marginBottom = appMargin.m;
const title_fontSize = appFontSizes.xxxl;

const veil_backgroundColor = appSemiTransparentColors.veil;

export const Wrapper = styled.div`
  position: relative;
  height: ${wrapper_height};
  width: ${wrapper_width};

  form {
    max-width: ${form_maxWidth};
    min-width: ${form_minWidth};
    width: ${form_width};
    padding: ${form_padding};
    background-color: ${form_backgroundColor};
    box-shadow: 0px 15px 29px -5px rgba(0, 0, 0, 0.5);
    ${centerWithTransform}
  }

  h2 {
    margin-bottom: ${title_marginBottom};
    font-size: ${title_fontSize};
    text-align: center;
  }
`;

export const BackgroundVeil = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  background-color: ${veil_backgroundColor};
`;
