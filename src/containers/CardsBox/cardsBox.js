import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from '../Card';

import { Wrapper } from './styles';

class CardsBox extends Component {
  render() {
    const { card } = this.props;

    const cardsToShow = card.card.map(card => (
      <Card
        title={card.title}
        description={card.description}
        url={card.url}
        date={card.date}
        key={card.id}
        id={card.id}
      />
    ));

    return <Wrapper>{cardsToShow || null}</Wrapper>;
  }
}

CardsBox.propTypes = {
  card: PropTypes.object,
};

export default CardsBox;
