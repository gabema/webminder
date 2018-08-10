import React from 'react';
import PropTypes from 'prop-types';
import Piece from './Piece';

const toPieces = pieces => (pieces || []).map(element => <Piece color={element} key={element} />);

const Trey = ({ pieces }) => (
  <div>
    {toPieces(pieces)}
  </div>
);

Trey.propTypes = {
  pieces: PropTypes.arrayOf(PropTypes.string)
};

export default Trey;
