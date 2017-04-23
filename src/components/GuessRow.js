import React from 'react';
import PropTypes from 'prop-types';
import Piece from './Piece';
import Pin from './Pin';
import './GuessRow.css';

const colorValue = ['black', 'white', 'red'];

const GuessRow = ({piece1, piece2, piece3, piece4, index, pins, onPieceClicked, onEvaluateRow}) => (
      <div className='guess-row'>
          <div className='piece-group'>
            <Piece color={piece1} onClick={(color) => onPieceClicked(color, 'piece1', index)} />
            <Piece color={piece2} onClick={(color) => onPieceClicked(color, 'piece2', index)} />
            <Piece color={piece3} onClick={(color) => onPieceClicked(color, 'piece3', index)} />
            <Piece color={piece4} onClick={(color) => onPieceClicked(color, 'piece4', index)} />
          </div>
          <div className='pin-group'>
            <div className='pin-row'>
                <Pin color={colorValue[pins[0] || 0]}/>
                <Pin color={colorValue[pins[1] || 0]}/>
            </div>
            <br/>
            <div className='pin-row'>
                <Pin color={colorValue[pins[2] || 0]}/>
                <Pin color={colorValue[pins[3] || 0]}/>
            </div>
          </div>
          <div onClick={() => onEvaluateRow(index)}>Evaluate</div>
      </div>
);

GuessRow.propTypes = {
    piece1: PropTypes.string,
    piece2: PropTypes.string,
    piece3: PropTypes.string,
    piece4: PropTypes.string,
    index: PropTypes.number.isRequired,
    pins: PropTypes.arrayOf(PropTypes.string),
    onPieceClicked: PropTypes.func,
    onEvaluateRow: PropTypes.func
};

export default GuessRow;
