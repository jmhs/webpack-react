import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';

class MainCoIncubate extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<div>MainCoIncubate Component</div>);
  }
}

MainCoIncubate.propTypes = {
};

const mapStateToProps = (state) => {
  return {
    DummyReducer: state.DummyReducer,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  dummyAction: (data) => { dispatch(dummyAction(data))},

}}

export default connect(mapStateToProps, mapDispatchToProps)(MainCoIncubate);
