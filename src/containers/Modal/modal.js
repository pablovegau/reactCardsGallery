import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '../../components/Button';
import FormInput from '../../components/FormInput';

import { Wrapper, BackgroundVeil } from './styles';

class Modal extends Component {
  render() {
    const { clickVeil } = this.props;

    return (
      <Wrapper>
        <BackgroundVeil onClick={clickVeil} />
        <form>
          <h2>New Card</h2>
          <FormInput label="Title" />
          <FormInput label="Description" />
          <FormInput label="Image (url)" />
          <Button label="Add" position="center" />
        </form>
      </Wrapper>
    );
  }
}

Modal.propTypes = {
  clickVeil: PropTypes.func.isRequired,
};

export default Modal;
