import React, { Component } from 'react';
import CircleButton from '../../components/CircleButton';
import Modal from '../Modal';
import plusIcon from '../../assets/svg/paths/plusIcon';
import PropTypes from 'prop-types';

import CardsBox from '../CardsBox';

import { Wrapper, WrapperCircleButton } from './styles';

class ReactCardsGallery extends Component {
  render() {
    const { addCardButtonPressed } = this.props;
    return (
      <Wrapper>
        <CardsBox />
        <WrapperCircleButton>
          <CircleButton path={plusIcon} secondary={false} click={addCardButtonPressed} />
        </WrapperCircleButton>
        <Modal />
      </Wrapper>
    );
  }
}

ReactCardsGallery.propTypes = {
  addCardButtonPressed: PropTypes.func.isRequired,
};

export default ReactCardsGallery;
