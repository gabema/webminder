import React, { Component } from 'react';
import './Piece.css';

class Piece extends Component {
  render() {
    return (
      <div className='piece' style={this.colorClass()}>
          &#x25A0;
      </div>
    );
  }
  colorClass() {
    return {
      color: this.props.color,
    };
  }
}

export default Piece;
