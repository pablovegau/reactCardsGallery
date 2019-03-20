import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from '../Card';

import { Wrapper } from './styles';

class CardsBox extends Component {
  render() {
    const { cardsBox } = this.props;
    console.log(cardsBox);

    const cardsToShow = cardsBox.cards.map(card => (
      <Card
        title={card.title}
        description={card.description}
        url={card.url}
        date={card.date}
        key={card.id}
        id={card.id}
        veil={card.veil}
      />
    ));

    return <Wrapper>{cardsToShow || null}</Wrapper>;
  }
}

CardsBox.propTypes = {
  cardsBox: PropTypes.object,
};

export default CardsBox;
