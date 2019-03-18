import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Modal from './modal';
import * as actionsModal from './actions';
import * as actionsCard from '../Card/actions';

function mapStateToProps(state) {
  return {
    modal: state.modal,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Object.assign({}, actionsModal, actionsCard), dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Modal);
