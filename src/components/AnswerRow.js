import React from 'react';
import Piece from './Piece';

function AnswerRow(props) {
  return (
    <div>
        <div className='answer-group' style={{display:'inline'}}>
          <Piece color={props.piece1} />
          <Piece color={props.piece2}/>
          <Piece color={props.piece3}/>
          <Piece color={props.piece4}/>
        </div>
    </div>
  );
}

export default AnswerRow;
