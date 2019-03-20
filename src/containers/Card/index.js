import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Card from './card';
import * as actionsCard from './actions';

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionsCard, dispatch);
}

export default connect(
  null,
  mapDispatchToProps,
)(Card);
