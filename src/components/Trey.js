import React, { Component } from 'react';
import Piece from './Piece';

class Trey extends Component {
  render() {
    return (
      <div>
        <Piece color="Red" />
        <Piece color="Blue" />
        <Piece color="White" />
        <Piece color="Black" />
        <Piece color="Purple" />
        <Piece color="Yellow" />
        <Piece color="Green" />
      </div>
    );
  }
}

export default Trey;
