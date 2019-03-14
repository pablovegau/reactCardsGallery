import React, { Component } from 'react';
import CircleButton from '../../components/CircleButton';
import plusIcon from '../../assets/svg/paths/plusIcon';

import { Wrapper } from './styles';

class ReactCardsGallery extends Component {
  render() {
    return (
      <Wrapper>
        <CircleButton path={plusIcon} secondary={false} />
      </Wrapper>
    );
  }
}

export default ReactCardsGallery;
