import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '../../components/Button';
import Card from '../Card';

import { Wrapper, ButtonsOrderWrapper, CardsWrapper } from './styles';

class CardsBox extends Component {
  render() {
    const { cardsBox, buttonOrderByTitlePressed, buttonOrderByDatePressed } = this.props;

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

    return (
      <Wrapper>
        {cardsBox.cards.length > 1 && (
          <ButtonsOrderWrapper>
            <Button label="Order by title" click={buttonOrderByTitlePressed} />
            <Button label="Order by date" click={buttonOrderByDatePressed} />
          </ButtonsOrderWrapper>
        )}
        <CardsWrapper>{cardsToShow || null}</CardsWrapper>
      </Wrapper>
    );
  }
}

CardsBox.propTypes = {
  cardsBox: PropTypes.object,
  buttonOrderByDatePressed: PropTypes.func,
  buttonOrderByTitlePressed: PropTypes.func,
};

export default CardsBox;
