import React from 'react';
import PropTypes from 'prop-types';

import { CircleButtonWrapper } from './styles';

const circleButton = props => {
  const { path, secondary, click } = props;
  return (
    <CircleButtonWrapper secondary={secondary} onClick={click} data-testid="circleButton">
      <svg viewBox={path.viewBox} data-testid="circleButtonSvg">
        <path d={path.d} data-testid="circleButtonPath" />
      </svg>
    </CircleButtonWrapper>
  );
};

circleButton.propTypes = {
  path: PropTypes.object.isRequired,
  secondary: PropTypes.bool,
  click: PropTypes.func,
};

export default circleButton;
