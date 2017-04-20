import React, { Component } from 'react';
import Peice from './Peice';

class Trey extends Component {
  render() {
    return (
      <div>
        <Peice color="Red" />
        <Peice color="Blue" />
        <Peice color="White" />
        <Peice color="Black" />
        <Peice color="Purple" />
        <Peice color="Yellow" />
        <Peice color="Green" />
      </div>
    );
  }
}

export default Trey;
