import React from 'react';
import PropTypes from 'prop-types';
import './Piece.css';
import './common.css';

const Piece = ({color, onClick}) => (
      <div className='piece noselect' style={{color: color}} onClick={e => { e.preventDefault(); onClick && onClick(color);} } >
          &#x25A0;
      </div>
);

Piece.PropTypes = {
    color: PropTypes.string,
    onClick: PropTypes.func
};

export default Piece;
