import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper, Input, Label } from './styles';

const formInput = props => {
  const { label, change, value } = props;

  return (
    <Wrapper>
      <Label htmlFor="genericInput" value={value}>
        {label}
      </Label>
      <Input id="genericInput" onChange={change} value={value} />
    </Wrapper>
  );
};

formInput.propTypes = {
  label: PropTypes.string.isRequired,
  change: PropTypes.func.isRequired,
  value: PropTypes.string,
};

export default formInput;
