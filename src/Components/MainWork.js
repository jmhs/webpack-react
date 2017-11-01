import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import '../scss/components/_MainWork.scss';
import {dummyAction} from  "../Actions/Action.js";

import Banner from './Banner.js'

import {Link} from 'react-router-dom';




class MainWork extends React.Component {
constructor(props) {
  super(props);
  this.state = {
    Category: "All"
  }
}

renderCards = () => {
  let cards =
  [
    {
    Category: "Mobile",
    Title: "Comfort",
    Image:"Car",
  },
  {
    Category: "Web",
    Title: "DBS",
    Image:"Car",
  },
  {
    Category: "Mobile",
    Title: "Grand Prix",
    Image:"Car",
  },
  {
    Category: "Experiences",
    Title: "SingPost",
    Image:"Car",
  }
]
  return cards.map (
    (card)=>{
      if (card.Category === this.state.Category) {
        return(
        <div>
        {card.Image}
        {card.Title}
        {card.Category}
        </div>
      )
    } else if (this.state.Category === "All"){
        return(
          <div>
          {card.Image}
          {card.Title}
          {card.Category}
          </div>
        )
      }
  })
}


  onClick = (e) => {

    this.setState({Category: e.target.id});
  }

  render() {
      console.log(this)
      const renderCards = this.renderCards();


    return (

      <div className="WorkContainer">

      <Banner
      BannerTitle="Our Work"
      BannerImage="https://www.codigo.co/assets/_main/work@2x-c0ca87bac66a6c7e02fcce3948d34e0ce278ced2fd4e9030baec321b27690eb1.png"/>

      <div className="Categories">
        <ul>
          <li id="All" onClick={this.onClick}> All </li>
          <li id="Mobile" onClick={this.onClick}> Mobile </li>
          <li id="Experiences" onClick={this.onClick}> Experiences </li>
          <li id="Games" onClick={this.onClick}> Games </li>
          <li id="e-Commerce" onClick={this.onClick}>e-Commerce </li>
          <li id="On-Demand" onClick={this.onClick}> On-Demand </li>
          <li id="Social Media" onClick={this.onClick}> Social Media </li>
          <li id="Web" onClick={this.onClick}> Web </li>
        </ul>
      </div>

      {renderCards}

      </div>);

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

export default connect(mapStateToProps, mapDispatchToProps)(MainWork);
