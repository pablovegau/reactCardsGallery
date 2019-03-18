import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Card from './card';
import * as actions from './actions';

function mapStateToProps(state) {
  return {
    card: state.card,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Card);
