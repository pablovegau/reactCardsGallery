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

  onShowVeil = () => {
    this.setState({
      showVeil: true,
    });
  };

  onHideVeil = () => {
    this.setState({
      showVeil: false,
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
    const { id, title, description, url, date, deleteExistingCard, toggleModal } = this.props;

    const slicedDescription = this._addDots(description);

    return (
      <Wrapper onMouseEnter={this.onShowVeil} onMouseLeave={this.onHideVeil}>
        <Title backgroundImage={url}>{title}</Title>
        <div>
          <p>{slicedDescription}</p>
        </div>
        <Veil showVeil={this.state.showVeil}>
          <CircleButton
            path={editIcon}
            secondary={true}
            click={() =>
              toggleModal({
                id,
                title,
                description,
                url,
                date,
              })
            }
          />
          <CircleButton path={deleteIcon} secondary={true} click={() => deleteExistingCard(id)} />
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
  deleteExistingCard: PropTypes.func,
  toggleModal: PropTypes.func.isRequired,
};

export default Card;
