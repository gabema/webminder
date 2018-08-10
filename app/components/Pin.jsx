import React from 'react';
import PropTypes from 'prop-types';

const Pin = ({ color }) => (
  <div style={{ display: 'inline', color }}>
    &#x25CF;
  </div>
);

Pin.propTypes = {
  color: PropTypes.string
};

export default Pin;
