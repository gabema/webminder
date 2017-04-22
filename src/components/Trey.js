import React, { Component } from 'react';
import Piece from './Piece';

class Trey extends Component {
  render() {
    return (
      <div>
        {this.toPieces()}
      </div>
    );
  }

  toPieces() {
    let pieces = this.props.pieces || [];
    return pieces.map(function(element) {
      return <Piece color={element} key={element} />
    }, this);
  }
}

export default Trey;
