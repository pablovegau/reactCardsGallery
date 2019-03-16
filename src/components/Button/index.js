import React from 'react';
import PropTypes from 'prop-types';

import { Button } from './styles';

const button = props => {
  const { label } = props;
  return <Button>{label}</Button>;
};

button.propTypes = {
  label: PropTypes.string.isRequired,
};

export default button;
