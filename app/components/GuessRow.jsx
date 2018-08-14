import React from 'react';
import PropTypes from 'prop-types';
import Piece from './Piece';
import Pin from './Pin';
// import './GuessRow.css';
// import './common.css';
// import guess from '../../public/guess.png';

const colorValue = ['black', 'white', 'red'];

const pieceHandler = (inPlay, onPieceClicked, piece, index) => (inPlay ?
  color => onPieceClicked(color, piece, index) :
  () => {});

const showPinGroup = (inPlay, index, onEvaluateRow, pins) => (inPlay ?
  <div className='evalute-group' onClick={() => onEvaluateRow(index)}>
    <img className="evalute-image noselect" alt="Evaluate" src="guess.png" />
  </div> :
  <div className='pin-group'>
    <div className='pin-row'>
      <Pin color={colorValue[pins[0] || 0]} />
      <Pin color={colorValue[pins[1] || 0]} />
    </div>
    <br />
    <div className='pin-row'>
      <Pin color={colorValue[pins[2] || 0]} />
      <Pin color={colorValue[pins[3] || 0]} />
    </div>
  </div>);

const GuessRow = ({
  piece1, piece2, piece3, piece4, index, pins, inPlay, onPieceClicked, onEvaluateRow,
}) => (
  <div className="guess-row">
    <div className="piece-group">
      <Piece color={piece1} onClick={pieceHandler(inPlay, onPieceClicked, 'piece1', index)} />
      <Piece color={piece2} onClick={pieceHandler(inPlay, onPieceClicked, 'piece2', index)} />
      <Piece color={piece3} onClick={pieceHandler(inPlay, onPieceClicked, 'piece3', index)} />
      <Piece color={piece4} onClick={pieceHandler(inPlay, onPieceClicked, 'piece4', index)} />
    </div>
    {showPinGroup(inPlay, index, onEvaluateRow, pins)}
  </div>
);

GuessRow.propTypes = {
  piece1: PropTypes.string,
  piece2: PropTypes.string,
  piece3: PropTypes.string,
  piece4: PropTypes.string,
  index: PropTypes.number.isRequired,
  inPlay: PropTypes.bool,
  pins: PropTypes.arrayOf(PropTypes.number),
  onPieceClicked: PropTypes.func.isRequired,
  onEvaluateRow: PropTypes.func.isRequired,
};

export default GuessRow;
