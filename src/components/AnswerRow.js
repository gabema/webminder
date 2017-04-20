import React, { Component } from 'react';
import Piece from './Piece';

class AnswerRow extends Component {
  render() {
    return (
      <div>
          <div className='answer-group' style={{display:'inline'}}>
            <Piece color={this.props.piece1} />
            <Piece color={this.props.piece2}/>
            <Piece color={this.props.piece3}/>
            <Piece color={this.props.piece4}/>
          </div>
      </div>
    );
  }
}

export default AnswerRow;
