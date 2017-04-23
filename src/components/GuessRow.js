import React from 'react';
import PropTypes from 'prop-types';
import Piece from './Piece';
import Pin from './Pin';
import './GuessRow.css';

const GuessRow = ({piece1, piece2, piece3, piece4, index, pins, onPieceClicked}) => (
      <div className='guess-row'>
          <div className='piece-group'>
            <Piece color={piece1} onClick={(color) => onPieceClicked(color, 'piece1', index)} />
            <Piece color={piece2} onClick={(color) => onPieceClicked(color, 'piece2', index)} />
            <Piece color={piece3} onClick={(color) => onPieceClicked(color, 'piece3', index)} />
            <Piece color={piece4} onClick={(color) => onPieceClicked(color, 'piece4', index)} />
          </div>
          <div className='pin-group'>
            <div className='pin-row'>
                <Pin color={pins[0]}/>
                <Pin color={pins[1]}/>
            </div>
            <br/>
            <div className='pin-row'>
                <Pin color={pins[2]}/>
                <Pin color={pins[3]}/>
            </div>
          </div>
      </div>
);

GuessRow.propTypes = {
    piece1: PropTypes.string,
    piece2: PropTypes.string,
    piece3: PropTypes.string,
    piece4: PropTypes.string,
    index: PropTypes.number.isRequired,
    pins: PropTypes.arrayOf(PropTypes.string),
    onPieceClicked: PropTypes.func
};

export default GuessRow;
