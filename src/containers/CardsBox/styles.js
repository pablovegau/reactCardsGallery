import styled from 'styled-components';

import { centerWithMargin, appPadding, appMargin } from '../../theme';

const wrapper_paddingVertical_mobile = appPadding.s;
const wrapper_paddingVertical = appPadding.l;
const twoColumnsBreakPoint = '50.875rem';
const threeColumnsBreakPoint = '76.3125rem';
const button_margin = appMargin.m;
const button_margin_mobile = appMargin.s;

export const Wrapper = styled.div`
  ${centerWithMargin};
  padding: ${wrapper_paddingVertical_mobile} 0;

  @media screen and (min-width: ${twoColumnsBreakPoint}) {
    padding: ${wrapper_paddingVertical} 0;
    width: ${twoColumnsBreakPoint};
  }

  @media screen and (min-width: ${threeColumnsBreakPoint}) {
    width: ${threeColumnsBreakPoint};
  }
`;

export const ButtonsOrderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  button {
    margin: ${button_margin_mobile};
  }

  @media screen and (min-width: ${twoColumnsBreakPoint}) {
    flex-direction: row;

    button {
      margin: ${button_margin};
    }
  }
`;

export const CardsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: ${twoColumnsBreakPoint}) {
    justify-content: flex-start;
  }
`;
