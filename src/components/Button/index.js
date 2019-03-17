import React from 'react';
import PropTypes from 'prop-types';

import { Button } from './styles';

const button = props => {
  const { label, position } = props;
  return <Button position={position}>{label}</Button>;
};

button.propTypes = {
  label: PropTypes.string.isRequired,
  position: PropTypes.string,
};

export default button;
