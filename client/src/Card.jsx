import logo from './logo.svg';
import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

class Card extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
      }
    }
render(){
    console.log('gooods',this.props.good)
    return(
        <div>
            <div>{this.props.good.good}</div>
            <div>{this.props.good.price}</div>
        </div>
    )
}
}

export default Card;