import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper, Input, Label } from './styles';

const formInput = props => {
  const { label, change, value, idHtmlFor } = props;

  return (
    <Wrapper>
      <Label htmlFor={idHtmlFor} value={value}>
        {label}
      </Label>
      <Input id={idHtmlFor} onChange={change} value={value} />
    </Wrapper>
  );
};

formInput.propTypes = {
  label: PropTypes.string.isRequired,
  change: PropTypes.func.isRequired,
  value: PropTypes.string,
  idHtmlFor: PropTypes.string.isRequired,
};

export default formInput;
