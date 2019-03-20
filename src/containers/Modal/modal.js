import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '../../components/Button';
import FormInput from '../../components/FormInput';
import uniqid from 'uniqid';

import { Wrapper, BackgroundVeil } from './styles';

class Modal extends Component {
  _onChangeTitle = event => {
    const { inputTitleChanged } = this.props;
    inputTitleChanged(event.target.value);
  };

  _onChangeDescription = event => {
    const { inputDescriptionChanged } = this.props;
    inputDescriptionChanged(event.target.value);
  };

  _onChangeUrl = event => {
    const { inputUrlChanged } = this.props;
    inputUrlChanged(event.target.value);
  };

  _onSubmitCard = event => {
    const { buttonAddCardPressed, buttonModalEditCardPressed, modal } = this.props;
    if (!modal.edition) {
      buttonAddCardPressed({
        title: modal.title,
        description: modal.description,
        url: modal.url || 'https://goo.gl/6ZvMCL',
        date: Date.now(),
        id: uniqid(),
      });
    } else {
      buttonModalEditCardPressed({
        title: modal.title,
        description: modal.description,
        url: modal.url,
        id: modal.id,
      });
    }
    event.preventDefault();
    event.stopPropagation();
  };

  render() {
    const { veilModalPressed, modal } = this.props;
    return (
      modal.showModal && (
        <Wrapper>
          <BackgroundVeil onClick={veilModalPressed} />
          <form onSubmit={this._onSubmitCard}>
            <h2>New Card</h2>
            <FormInput label="Title" change={this._onChangeTitle} value={modal.title} />
            <FormInput label="Description" change={this._onChangeDescription} value={modal.description} />
            <FormInput label="Image (url)" change={this._onChangeUrl} value={modal.url} />
            <Button label={modal.edition ? 'EDIT' : 'ADD'} position="center" />
          </form>
        </Wrapper>
      )
    );
  }
}

Modal.propTypes = {
  veilModalPressed: PropTypes.func,
  inputTitleChanged: PropTypes.func,
  inputDescriptionChanged: PropTypes.func,
  inputUrlChanged: PropTypes.func,
  buttonAddCardPressed: PropTypes.func,
  buttonModalEditCardPressed: PropTypes.func,
  modal: PropTypes.object,
};

export default Modal;
