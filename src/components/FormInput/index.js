import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper, Input, Label } from './styles';

const formInput = props => {
  const { label, change, value } = props;

  return (
    <div>
      <Wrapper>
        {!value ? <Label>{label}</Label> : null}
        <Input onChange={change} value={value} />
      </Wrapper>
    </div>
  );
};

formInput.propTypes = {
  label: PropTypes.string.isRequired,
  change: PropTypes.func.isRequired,
  value: PropTypes.string,
};

export default formInput;
