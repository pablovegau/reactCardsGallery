import styled from 'styled-components';

import { appGrayColors, verticalCenterWithTransform, appColors, appMargin } from '../../theme';

const input_height = '2.5rem;';
const input_minWidth = '15rem';
const input_maxWidth = '30rem';
const input_bottomBorder_color = appGrayColors.black30;
const input_marginBottom = appMargin.m;

const getComputedStyles = ({ value }) => `
  display: ${value ? 'none' : 'block'};
`;

export const Wrapper = styled.div`
  position: relative;
  margin-bottom: ${input_marginBottom};
  min-width: ${input_minWidth};
  max-width: ${input_maxWidth};
`;

export const Label = styled.label`
  ${verticalCenterWithTransform};
  left: 5px;
  color: ${appColors.secondaryText};
  ${() => getComputedStyles}
`;

export const Input = styled.input`
  position: relative;
  z-index: 1;
  display: block;
  height: ${input_height};
  width: 100%;
  border: none;
  background-color: rgba(255, 255, 255, 0);
  box-shadow: 0px 1px 0px 0px ${input_bottomBorder_color};
  text-indent: 5px;
`;
