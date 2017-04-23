import React, { Component } from 'react';
import AnswerRow from './AnswerRow';
import GuessRow from './GuessRow';
import Trey from './Trey';

// (See Board) https://facebook.github.io/react/tutorial/tutorial.html

class Board extends Component {
  constructor() {
      super();

      this.state = {
          answer: {
              piece1: 'red',
              piece2: 'blue',
              piece3: 'green',
              piece4: 'yellow'
          },
          guesses: [
              {}, {}, {}, {}, {},
              {}, {}, {}, {}, {}
          ],
          trey: ['red', 'blue', 'white', 'black', 'purple', 'yellow', 'green']
      };
  }

  render() {
    return (
      <div>
        <AnswerRow piece1='Red' piece2='blue' piece3='green' piece4='yellow' />
        {this.expandGuessRows()}
        <Trey pieces={this.state.trey} />
      </div>
    );
  }

  expandGuessRows() {
      return this.state.guesses.map(function(guess, index) {
          let pins = ['red'].fill(null, 0, 3);
          return [<GuessRow key={index} index={index} piece1={guess.piece1} piece2={guess.piece2} piece3={guess.piece3} piece4={guess.piece4} pins={pins} onPieceClicked={(color, pieceName, index) => this.rowPieceClicked(color, pieceName, index)}/>, <br/>];
      }, this);
  }

  rowPieceClicked(color, pieceName, index) {
      let currentColor = this.state.guesses[index][pieceName];
      let newColor;
      if (!color) {
          color = this.state.trey[0];
      }
      if (color === currentColor) {
          let count = this.state.trey.length;
          let index = this.state.trey.findIndex(treyColor => treyColor === color);
          newColor = this.state.trey[(index + 1) % count];
      } else {
          newColor = color;
      }
      let newProp = {};
      newProp[pieceName] = newColor;
      let newGuessRow = Object.assign({}, this.state.guesses[index], newProp);
      let guesses = Object.assign([], this.state.guesses);
      guesses[index] = newGuessRow;
      this.setState(Object.assign({}, this.state, {guesses: guesses}));
    }
}

export default Board;
