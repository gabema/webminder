import React, { Component } from 'react';

class Pin extends Component {
  render() {
    return (
      <div style={this.colorClass()}>
          &#x25CB;
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

export default Pin;
