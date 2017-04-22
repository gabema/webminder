import React from 'react';
import Piece from './Piece';
import Pin from './Pin';
import './GuessRow.css';

function GuessRow(props) {
    return (
      <div className='guess-row'>
          <div className='piece-group'>
            <Piece color={props.piece1} />
            <Piece color={props.piece2} />
            <Piece color={props.piece3} />
            <Piece color={props.piece4} />
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

export default GuessRow;
