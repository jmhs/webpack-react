import React, {PropTypes} from 'react';
import {connect} from "react-redux";
import {Link} from 'react-router-dom';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <ul>
          <li></li>
        </ul>
      
      </div>

    );
  }
}

NavBar.propTypes = {
};


const mapStatetoProps = (state) => {
  return {
    DummyReducer: state.Reducer
  }
}

const mapDispatchtoProps = (dispatch) => {
  return {
    dummyAction: (data) => {dispatch(dummyAction(data))},
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)
