import React from 'react';
import Piece from './Piece';
import Pin from './Pin';
import './GuessRow.css';

function GuessRow(props) {
    return (
      <div className='guess-row'>
          <div className='piece-group'>
            <Piece color={props.piece1} onClick={(color) => props.onPieceClicked(color, 'piece1', props.index)} />
            <Piece color={props.piece2} onClick={(color) => props.onPieceClicked(color, 'piece2', props.index)} />
            <Piece color={props.piece3} onClick={(color) => props.onPieceClicked(color, 'piece3', props.index)} />
            <Piece color={props.piece4} onClick={(color) => props.onPieceClicked(color, 'piece4', props.index)} />
          </div>
          <div className='pin-group'>
            <div className='pin-row'>
                <Pin color={props.pins[0]}/>
                <Pin color={props.pins[1]}/>
            </div>
            <br/>
            <div className='pin-row'>
                <Pin color={props.pins[2]}/>
                <Pin color={props.pins[3]}/>
            </div>
          </div>
      </div>
    );
}

export default GuessRow;
