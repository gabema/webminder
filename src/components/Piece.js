import React from 'react';
import PropTypes from 'prop-types';
import './Piece.css';

const Piece = ({color, onClick}) => (
      <div className='piece' style={{color: color}} onClick={() => onClick && onClick(color)} >
          &#x25A0;
      </div>
);

Piece.PropTypes = {
    color: PropTypes.string,
    onClick: PropTypes.func
};

export default Piece;
