import React from 'react';
import PropTypes from 'prop-types';
import AnswerRow from './AnswerRow';
import GuessRow from './GuessRow';
import Trey from './Trey';
// import './common.css';

const expandGuessRows = (guesses, rowPieceClicked, evaluateRow) => guesses.map((guess, index) => [
  <GuessRow
    key={index}
    index={index}
    piece1={guess.piece1}
    piece2={guess.piece2}
    piece3={guess.piece3}
    piece4={guess.piece4}
    pins={guess.pins}
    inPlay={guess.inPlay}
    onPieceClicked={
        (color, pieceName, i) => rowPieceClicked(color, pieceName, i)
    }
    onEvaluateRow={i => evaluateRow(i)}
  />, <br />,
]);

const Board = ({
  answer,
  guesses,
  trey,
  rowPieceClicked,
  evaluateRow,
  resetGame,
}) => (
  <div>
    <AnswerRow
        piece1={answer.piece1}
        piece2={answer.piece2}
        piece3={answer.piece3}
        piece4={answer.piece4}
        showPieces={answer.showPieces}
        /> {expandGuessRows(guesses, rowPieceClicked, evaluateRow)}
    <Trey pieces={trey} />
    <br />
    <div
        className="noselect"
        onClick={(e) => {
            e.preventDefault();
            resetGame();
        }}
      >New Game
      </div>
  </div>
);

Board.propTypes = {
  answer: PropTypes.object,
  guesses: PropTypes.array,
  trey: PropTypes.array,
  rowPieceClicked: PropTypes.func,
  evaluateRow: PropTypes.func,
};

export default Board;
