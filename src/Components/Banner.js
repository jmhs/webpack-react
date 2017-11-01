import React, {PropTypes} from 'react';
import '../scss/components/_Banner.scss';


export default class Banner extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Banner">
        <div className="BannerImage"><img src={this.props.BannerImage}/></div>
        <div className="BannerTitle"><h1>{this.props.BannerTitle}</h1></div>
      </div>
    );
  }
}
