import React, { Component } from 'react';
import CircleButton from '../../components/CircleButton';
import Modal from '../Modal';
import plusIcon from '../../assets/svg/paths/plusIcon';
import PropTypes from 'prop-types';

import CardsBox from '../CardsBox';

import { Wrapper, WrapperCircleButton } from './styles';

class ReactCardsGallery extends Component {
  render() {
    const { toggleModal, modal } = this.props;
    return (
      <Wrapper>
        <CardsBox />
        <WrapperCircleButton>
          <CircleButton path={plusIcon} secondary={false} click={toggleModal} />
        </WrapperCircleButton>
        {modal.showModal ? <Modal /> : null}
      </Wrapper>
    );
  }
}

ReactCardsGallery.propTypes = {
  toggleModal: PropTypes.func.isRequired,
  modal: PropTypes.object,
};

export default ReactCardsGallery;
