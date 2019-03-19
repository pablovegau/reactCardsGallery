import React from 'react';
import PropTypes from 'prop-types';

import { CircleButtonWrapper } from './styles';

const circleButton = props => {
  const { path, secondary, click } = props;
  return (
    <CircleButtonWrapper secondary={secondary} onClick={click}>
      <svg viewBox={path.viewBox} data-testid="circleButton">
        <path d={path.d} data-testid="circleButton" />
      </svg>
    </CircleButtonWrapper>
  );
};

circleButton.propTypes = {
  path: PropTypes.object.isRequired,
  secondary: PropTypes.bool,
  click: PropTypes.func.isRequired,
};

export default circleButton;
