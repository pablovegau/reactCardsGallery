import React from 'react';
import PropTypes from 'prop-types';

import { Button } from './styles';

const button = props => {
  const { label, position, click } = props;
  return (
    <Button position={position} onClick={click}>
      {label}
    </Button>
  );
};

button.propTypes = {
  label: PropTypes.string.isRequired,
  position: PropTypes.string,
  click: PropTypes.func,
};

export default button;
