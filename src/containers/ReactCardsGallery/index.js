import React, { Component } from 'react';
import CircleButton from '../../components/CircleButton';
import plusIcon from '../../assets/svg/paths/plusIcon';

import { Wrapper, WrapperCircleButton } from './styles';

class ReactCardsGallery extends Component {
  render() {
    return (
      <Wrapper>
        <WrapperCircleButton>
          <CircleButton path={plusIcon} secondary={false} />
        </WrapperCircleButton>
      </Wrapper>
    );
  }
}

export default ReactCardsGallery;
