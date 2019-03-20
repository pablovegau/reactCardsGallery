import { connect } from 'react-redux';
import CardsBox from './cardsBox';

function mapStateToProps(state) {
  return {
    cardsBox: state.cardsBox,
  };
}

export default connect(mapStateToProps)(CardsBox);
