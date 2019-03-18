import { connect } from 'react-redux';
import CardsBox from './cardsBox';

function mapStateToProps(state) {
  return {
    card: state.card,
  };
}

export default connect(mapStateToProps)(CardsBox);
