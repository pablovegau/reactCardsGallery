import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Modal from './modal';
import * as actionsModal from './actions';

function mapStateToProps(state) {
  return {
    modal: state.modal,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionsModal, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Modal);
