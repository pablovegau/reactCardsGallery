import React, { Component } from 'react';
import CircleButton from '../../components/CircleButton';
import Modal from '../Modal/modal';
import plusIcon from '../../assets/svg/paths/plusIcon';
import PropTypes from 'prop-types';

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
    const { toggleModal } = this.props;
    return (
      <Wrapper>
        <CardsBox />
        <WrapperCircleButton>
          <CircleButton path={plusIcon} secondary={false} click={toggleModal} />
        </WrapperCircleButton>
        {this.state.showModal ? <Modal showModal={this.state.showModal} clickVeil={this.onShowModal} /> : null}
      </Wrapper>
    );
  }
}

ReactCardsGallery.propTypes = {
  toggleModal: PropTypes.func.isRequired,
};

export default ReactCardsGallery;
