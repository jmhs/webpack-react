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
        <div className="DivLeft">
          <img src="../Assets/phone.png" />
          <div className="MainText">
            <div className="MainTitle">
            <h2>Codigo</h2>
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
        <img src="../Assets/coach2x.png"/>
        <div className="MainText">
          <div className="MainTitle">
          <h2>Coach</h2>
          </div>
          <div className="contenttext">
          <h3>With experience of launching over 300 mobile apps
          get practical knowledge with Codigo school
          </h3>
          <p>
          View courses ➞
          </p>
          </div>
        </div>
        </div>
      <div className="DivRightBottom">
      <img src="../Assets/egg.png" />
      <div className="MainText">
        <div className="MainTitle">
        <h2>Co-incubate</h2>
        </div>
        <div className="contenttext">
        <h3>Have a great app idea?
        <br/>
        We are your trusted partner
        </h3>
        <p>
        Co-incubate with us ➞
        </p>
        </div>
      </div>
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
