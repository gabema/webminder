import React from 'react';
import PropTypes from 'prop-types';
import AnswerRow from './AnswerRow';
import GuessRow from './GuessRow';
import Trey from './Trey';

const expandGuessRows = (guesses, rowPieceClicked, evaluateRow) => guesses.map(function(guess, index) {
    return [
        <GuessRow
            key={index}
            index={index}
            piece1={guess.piece1}
            piece2={guess.piece2}
            piece3={guess.piece3}
            piece4={guess.piece4}
            pins={guess.pins}
            inPlay={guess.inPlay}
            onPieceClicked={(color, pieceName, index) => rowPieceClicked(color, pieceName, index)}
            onEvaluateRow={(index) => evaluateRow(index)}
            />,
        <br/>
    ];
});

const Board = ({answer, guesses, trey, rowPieceClicked, evaluateRow, resetGame}) => (
    <div>
    <AnswerRow piece1={answer.piece1} piece2={answer.piece2} piece3={answer.piece3} piece4={answer.piece4} />
    {expandGuessRows(guesses, rowPieceClicked, evaluateRow)}
    <Trey pieces={trey} />
    <br/>
    <div onClick={() => resetGame()}>New Game</div>
    </div>
);

Board.PropTypes = {
    answer: PropTypes.object,
    guesses: PropTypes.array,
    trey: PropTypes.array,
    rowPieceClicked: PropTypes.func,
    evaluateRow: PropTypes.func
};

export default Board;
