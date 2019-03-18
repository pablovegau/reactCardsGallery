import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CircleButton from '../../components/CircleButton';
import editIcon from '../../assets/svg/paths/editIcon';
import deleteIcon from '../../assets/svg/paths/deleteIcon';

import { Wrapper, Title, Veil } from './styles.js';

class Card extends Component {
  state = {
    showVeil: false,
  };

  onToggleVeil = () => {
    this.setState({
      showVeil: !this.state.showVeil,
    });
  };

  _addDots = text => {
    if (text.length > 125) {
      return text.slice(0, 125) + '...';
    } else {
      return text;
    }
  };

  render() {
    const { title, description, url = 'https://goo.gl/6ZvMCL', editExistingCard, deleteExistingCard } = this.props;

    const slicedDescription = this._addDots(description);

    return (
      <Wrapper onMouseEnter={this.onToggleVeil} onMouseLeave={this.onToggleVeil}>
        <Title backgroundImage={url}>{title}</Title>
        <div>
          <p>{slicedDescription}</p>
        </div>
        <Veil showVeil={this.state.showVeil}>
          <CircleButton path={editIcon} secondary={true} onClick={editExistingCard} />
          <CircleButton path={deleteIcon} secondary={true} onClick={deleteExistingCard} />
        </Veil>
      </Wrapper>
    );
  }
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string,
  editExistingCard: PropTypes.func,
  deleteExistingCard: PropTypes.func,
};

export default Card;
