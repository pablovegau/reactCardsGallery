import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Card from './card';
import * as actionsCard from './actions';
import * as actionsModal from '../Modal/actions';

function mapStateToProps(state) {
  return {
    card: state.card,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Object.assign({}, actionsModal, actionsCard), dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Card);
