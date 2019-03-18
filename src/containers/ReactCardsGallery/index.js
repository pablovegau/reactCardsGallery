import React, { Component } from 'react';
import CircleButton from '../../components/CircleButton';
import Modal from '../Modal';
import plusIcon from '../../assets/svg/paths/plusIcon';

import CardsBox from '../CardsBox';

import { Wrapper, WrapperCircleButton } from './styles';

class ReactCardsGallery extends Component {
  state = {
    showModal: false,
  };

  onShowModal = () => {
    this.setState({
      showModal: !this.state.showModal,
    });
  };

  render() {
    return (
      <Wrapper>
        <CardsBox />
        <WrapperCircleButton onClick={this.onShowModal}>
          <CircleButton path={plusIcon} secondary={false} />
        </WrapperCircleButton>
        {this.state.showModal ? <Modal showModal={this.state.showModal} clickVeil={this.onShowModal} /> : null}
      </Wrapper>
    );
  }
}

export default ReactCardsGallery;
