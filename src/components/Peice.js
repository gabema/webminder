import React, { Component } from 'react';

class Peice extends Component {
  render() {
    return (
      <div style={this.colorClass()}>
          &#x25A0;
      </div>
    );
  }
  colorClass() {
    return {
      display: 'inline',
      color: this.props.color,
    };
  }
}

export default Peice;
