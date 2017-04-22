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
              {}, {}, {piece3: 'blue'}, {}, {},
              {piece1: 'red'}, {}, {}, {}, {}
          ],
          trey: ['Red', 'Blue', 'White', 'Black', 'Purple', 'Yellow', 'Green']
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
      return this.state.guesses.map(function(guess, index){
          let row = [<GuessRow key={index} piece1={guess.piece1} piece2={guess.piece2} piece3={guess.piece3} piece4={guess.piece4} />, <br/>];
          return row;
      }, this);
  }
}

export default Board;
