import React from 'react';
import PropTypes from 'prop-types';
import Piece from './Piece';

const AnswerRow = ({piece1, piece2, piece3, piece4}) => (
    <div>
        <div className='answer-group' style={{display:'inline'}}>
          <Piece color={piece1} />
          <Piece color={piece2}/>
          <Piece color={piece3}/>
          <Piece color={piece4}/>
        </div>
    </div>
);

AnswerRow.propTypes = {
    piece1: PropTypes.string,
    piece2: PropTypes.string,
    piece3: PropTypes.string,
    piece4: PropTypes.string
};

export default AnswerRow;
