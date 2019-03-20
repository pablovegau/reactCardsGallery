import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CircleButton from '../../components/CircleButton';
import editIcon from '../../assets/svg/paths/editIcon';
import deleteIcon from '../../assets/svg/paths/deleteIcon';

import { Wrapper, Title, Veil } from './styles.js';

class Card extends Component {
  onShowVeil = () => {
    const { mouseOverCard, id } = this.props;
    mouseOverCard(id);
  };

  onHideVeil = () => {
    const { mouseOutCard, id } = this.props;
    mouseOutCard(id);
  };

  _addDots = text => {
    if (text.length > 125) {
      return text.slice(0, 125) + '...';
    } else {
      return text;
    }
  };

  render() {
    const { id, title, description, url, date, veil, buttonEditCardPressed, buttonDeleteCardPressed } = this.props;

    const slicedDescription = this._addDots(description);

    return (
      <Wrapper onMouseEnter={this.onShowVeil} onMouseLeave={this.onHideVeil}>
        <Title backgroundImage={url}>{title}</Title>
        <div>
          <p>{slicedDescription}</p>
        </div>
        <Veil showVeil={veil} data-testid="veil">
          <CircleButton
            path={editIcon}
            secondary={true}
            click={() =>
              buttonEditCardPressed({
                id,
                title,
                description,
                url,
                date,
              })
            }
          />
          <CircleButton path={deleteIcon} secondary={true} click={() => buttonDeleteCardPressed(id)} />
        </Veil>
      </Wrapper>
    );
  }
}

Card.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string,
  date: PropTypes.number.isRequired,
  veil: PropTypes.bool.isRequired,
  buttonDeleteCardPressed: PropTypes.func.isRequired,
  buttonEditCardPressed: PropTypes.func.isRequired,
  mouseOverCard: PropTypes.func.isRequired,
  mouseOutCard: PropTypes.func.isRequired,
};

export default Card;
