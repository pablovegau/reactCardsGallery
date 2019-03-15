import React from 'react';
import PropTypes from 'prop-types';

import { CircleButtonWrapper } from './styles';

const circleButton = props => {
  const { path, secondary } = props;
  return (
    <CircleButtonWrapper secondary={secondary}>
      <svg viewBox={path.viewBox} data-testid="circleButton">
        <path d={path.d} data-testid="circleButton" />
      </svg>
    </CircleButtonWrapper>
  );
};

circleButton.propTypes = {
  path: PropTypes.object.isRequired,
  secondary: PropTypes.boolean,
};

export default circleButton;
