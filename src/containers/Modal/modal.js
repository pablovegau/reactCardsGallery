import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '../../components/Button';
import FormInput from '../../components/FormInput';
import uniqid from 'uniqid';

import { Wrapper, BackgroundVeil } from './styles';

class Modal extends Component {
  state = {
    inputTitle: '',
    inputDescription: '',
    inputUrl: '',
    date: '',
    id: '',
  };

  componentDidMount() {
    const { modal } = this.props;

    if (modal && modal.cardToEdit && modal.cardToEdit.id) {
      this.setState({
        inputTitle: modal.cardToEdit.title,
        inputDescription: modal.cardToEdit.description,
        inputUrl: modal.cardToEdit.url,
        date: modal.cardToEdit.date,
        id: modal.cardToEdit.id,
      });
    } else {
      this.setState({
        id: uniqid(),
        date: Date.now(),
      });
    }
  }

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

  _onSubmitCard = event => {
    const { addOrModifyCard, toggleModal } = this.props;

    addOrModifyCard({
      title: this.state.inputTitle,
      description: this.state.inputDescription,
      url: this.state.inputUrl || 'https://goo.gl/6ZvMCL',
      date: this.state.date,
      id: this.state.id,
    });

    toggleModal();

    event.preventDefault();
    event.stopPropagation();
  };

  render() {
    const { toggleModal } = this.props;
    return (
      <Wrapper>
        <BackgroundVeil onClick={toggleModal} />
        <form onSubmit={this._onSubmitCard}>
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
  addOrModifyCard: PropTypes.func,
  modal: PropTypes.object,
};

export default Modal;
