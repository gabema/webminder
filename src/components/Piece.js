import React from 'react';
import './Piece.css';

function Piece(props) {
    return (
      <div className='piece' style={{color: props.color}} >
          &#x25A0;
      </div>
    );
}

export default Piece;
