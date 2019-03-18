import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ReactCardsGallery from './reactCardsGallery';
import * as actions from '../Modal/actions';

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
)(ReactCardsGallery);
