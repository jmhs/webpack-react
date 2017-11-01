import React, {PropTypes} from 'react';
import '../scss/components/_Card.scss';


export default class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Card">
        <div className="CardImage"><img src={this.props.CardImage}/></div>
        <div className="CardTitle">{this.props.CardTitle}</div>
      </div>
    );
  }
}
