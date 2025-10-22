import React from 'react';
import PropTypes from 'prop-types';
import Piece from './Piece';

const renderPieces = (piece1, piece2, piece3, piece4) => [
    <Piece color={piece1} key='piece1'/>,
    <Piece color={piece2} key='piece2'/>,
    <Piece color={piece3} key='piece3'/>,
    <Piece color={piece4} key='piece4'/>,
];

const hidePieces = () => [
    <div key='message'>Gotta guess them all</div>
];

const AnswerRow = ({piece1, piece2, piece3, piece4, showPieces}) => (
    <div>
        <div className='answer-group' style={{display:'inline'}}>
        {showPieces ? renderPieces(piece1, piece2, piece3, piece4) : hidePieces()}
        </div>
    </div>
);

AnswerRow.propTypes = {
    piece1: PropTypes.string,
    piece2: PropTypes.string,
    piece3: PropTypes.string,
    piece4: PropTypes.string,
    showPieces: PropTypes.bool
};

export default AnswerRow;
