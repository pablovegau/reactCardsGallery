import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import CardsBox from './cardsBox';
import * as actions from './actions';

function mapStateToProps(state) {
  return {
    cardsBox: state.cardsBox,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CardsBox);
