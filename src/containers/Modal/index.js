import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Modal from './modal';
import * as actions from './actions';

function mapStateToProps(state) {
  return {
    modal: state.modal,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Modal);
