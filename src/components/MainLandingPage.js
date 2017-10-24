import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import '../scss/components/_MainLandingPage.scss';
import {dummyAction} from  "../Actions/Action.js";

import {Link} from 'react-router-dom';



class MainLandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state={

    }
  }

  render() {
    return (
  <div className = "Container">
    <div className="NavBar">
      <nav>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/coincubate'>Roster</Link></li>
          <li><Link to='/schedule'>Schedule</Link></li>
        </ul>
      </nav>
    </div>
        <div className="DivLeft">
          <img src="../Assets/phone.png" />
          <div className="MainText">
            <div className="MainTitle">
            <Link to='/coincubate'><h2>Codigo</h2></Link>
            </div>
            <div className="contenttext">
            <h3>We create awesome brand
            <br/>
            and experience mobile apps.
            </h3>
            <p>
            Check out our work ➞
            </p>
            </div>
          </div>
      </div>
      <div className = "DivRightTop">
      </div>

      <div className="DivRightBottom">
      right bottom
      </div>
    </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    DummyReducer: state.DummyReducer,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  dummyAction: (data) => { dispatch(dummyAction(data))},

}}

export default connect(mapStateToProps, mapDispatchToProps)(MainLandingPage);
