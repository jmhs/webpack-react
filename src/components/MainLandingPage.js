import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import '../scss/components/_MainLandingPage.scss';







export default class MainLandingPage extends React.Component {
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
            Codigo
            </div>
            <div className="contenttext">
              We create awesome brand
              <br />
              and experience mobile apps.
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
