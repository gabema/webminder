import React, { Component } from 'react';
import Piece from './Piece';
import Pin from './Pin';

class GuessRow extends Component {
  render() {
    return (
      <div>
          <div class='piece-group' style={{display:'inline'}}>
            <Piece />
            <Piece />
            <Piece />
            <Piece />
          </div>
          <div class='pin-group' style={{display:'inline-block'}}>
            <div class='pin-row' style={{display:'inline'}}>
                <Pin />
                <Pin />
            </div>
            <br/>
            <div class='pin-row' style={{display:'inline'}}>
                <Pin />
                <Pin />
            </div>
          </div>
      </div>
    );
  }
}

export default GuessRow;
