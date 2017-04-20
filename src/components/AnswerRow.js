import React, { Component } from 'react';
import Peice from './Peice';

class AnswerRow extends Component {
  render() {
    return (
      <div>
          <div class='answer-group' style={{display:'inline'}}>
            <Peice color={this.props.piece1} />
            <Peice color={this.props.piece2}/>
            <Peice color={this.props.piece3}/>
            <Peice color={this.props.piece4}/>
          </div>
      </div>
    );
  }
}

export default AnswerRow;
