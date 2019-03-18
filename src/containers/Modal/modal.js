import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '../../components/Button';
import FormInput from '../../components/FormInput';

import { Wrapper, BackgroundVeil } from './styles';

class Modal extends Component {
  state = {
    inputTitle: '',
    inputDescription: '',
    inputUrl: '',
  };

  _onChangeTitle = event => {
    this.setState({
      inputTitle: event.target.value,
    });
  };

  _onChangeDescription = event => {
    this.setState({
      inputDescription: event.target.value,
    });
  };

  _onChangeUrl = event => {
    this.setState({
      inputUrl: event.target.value,
    });
  };

  render() {
    const { toggleModal } = this.props;
    return (
      <Wrapper>
        <BackgroundVeil onClick={toggleModal} />
        <form>
          <h2>New Card</h2>
          <FormInput label="Title" change={this._onChangeTitle} valueInParent={this.state.inputTitle} />
          <FormInput
            label="Description"
            change={this._onChangeDescription}
            valueInParent={this.state.inputDescription}
          />
          <FormInput label="Image (url)" change={this._onChangeUrl} valueInParent={this.state.inputUrl} />
          <Button label="Add" position="center" />
        </form>
      </Wrapper>
    );
  }
}

Modal.propTypes = {
  toggleModal: PropTypes.func,
  modal: PropTypes.object,
};

export default Modal;
