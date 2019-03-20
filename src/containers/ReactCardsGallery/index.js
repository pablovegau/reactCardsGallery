import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ReactCardsGallery from './reactCardsGallery';
import * as actions from './actions';

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

export default connect(
  null,
  mapDispatchToProps,
)(ReactCardsGallery);
