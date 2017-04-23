import React from 'react';
import PropTypes from 'prop-types';
import AnswerRow from './AnswerRow';
import GuessRow from './GuessRow';
import Trey from './Trey';

const expandGuessRows = (guesses, rowPieceClicked) => guesses.map(function(guess, index) {
    let pins = ['red'].fill(null, 0, 3);
    return [
        <GuessRow
            key={index}
            index={index}
            piece1={guess.piece1}
            piece2={guess.piece2}
            piece3={guess.piece3}
            piece4={guess.piece4}
            pins={pins}
            onPieceClicked={(color, pieceName, index) => rowPieceClicked(color, pieceName, index)}/>,
        <br/>
    ];
});

const Board = ({answer, guesses, trey, rowPieceClicked}) => (
    <div>
    <AnswerRow piece1={answer.piece1} piece2={answer.piece2} piece3={answer.piece3} piece4={answer.piece4} />
    {expandGuessRows(guesses, rowPieceClicked)}
    <Trey pieces={trey} />
    </div>
);

Board.PropTypes = {
    answer: PropTypes.object,
    guesses: PropTypes.array,
    trey: PropTypes.array
};

export default Board;
