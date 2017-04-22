import React, { Component } from 'react';
import Piece from './Piece';
import Pin from './Pin';
import './GuessRow.css';

class GuessRow extends Component {
  render() {
    return (
      <div className='guess-row'>
          <div className='piece-group'>
            <Piece color={this.props.piece1} />
            <Piece color={this.props.piece2} />
            <Piece color={this.props.piece3} />
            <Piece color={this.props.piece4} />
          </div>
          <div className='pin-group'>
            <div className='pin-row'>
                <Pin />
                <Pin />
            </div>
            <br/>
            <div className='pin-row'>
                <Pin />
                <Pin />
            </div>
          </div>
      </div>
    );
  }
}

export default GuessRow;
