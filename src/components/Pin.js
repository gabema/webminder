import React from 'react';
import PropTypes from 'prop-types';

const Pin = ({color}) => (
    <div style={{ display: 'inline', color: color}}>
        &#x25CF;
    </div>
);

Pin.PropTypes = {
  color: PropTypes.string
};

export default Pin;
