import React from 'react';
import Piece from './Piece';

function toPieces(props) {
  let pieces = props.pieces || [];
  return pieces.map(function(element) {
    return <Piece color={element} key={element} />
  }, this);
}

function Trey(props) {
  return (
      <div>
        {toPieces(props)}
      </div>    
  );
}

export default Trey;
