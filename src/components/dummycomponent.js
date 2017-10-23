import React,{PropTypes} from 'react';

export default class Dummcomponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container3" id="fwhite" style={{position: 'absolute', left: 485, top: 0}}>
        <div className="mainimage">
        </div>
        <div className="maintext">
          <div className="contenttitlemain">Coach</div>
          <div className="contenttext" id="fontstuff">
            With the experience of launching
            over 300 mobile apps, practical
            knowledge with Codigo School.
          </div>
          <p>
            View courses ➞
          </p>
        </div>
      </div>
    )
  }
}
