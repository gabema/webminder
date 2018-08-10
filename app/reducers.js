
const initialBoardState = {
  answer: {
    piece1: 'red',
    piece2: 'blue',
    piece3: 'green',
    piece4: 'yellow',
    showPieces: false,
  },
  guesses: [
    { pins: [] }, { pins: [] }, { pins: [] }, { pins: [] }, { pins: [] },
    { pins: [] }, { pins: [] }, { pins: [] }, { pins: [] },
    {
      piece1: 'red',
      piece2: 'red',
      piece3: 'red',
      piece4: 'red',
      pins: [],
      inPlay: true,
    },
  ],
  trey: ['red', 'blue', 'white', 'black', 'purple', 'yellow', 'green'],
};

const guessRow = (state = {}, action) => {
  switch (action.type) {
    case 'CHANGE_PIECE': {
      if (state[action.pieceName] === action.newPiece) {
        return state;
      }
      const newPiece = {};
      newPiece[action.pieceName] = action.newPiece;
      const newState = Object.assign({}, state, newPiece);
      return newState;
    }
    case 'COPY_ROW': {
      if (state.piece1 === action.copyRow.piece1 &&
                state.piece2 === action.copyRow.piece2 &&
                state.piece3 === action.copyRow.piece3 &&
                state.piece4 === action.copyRow.piece4) {
        return state;
      }

      return Object.assign({}, state, {
        piece1: action.copyRow.piece1,
        piece2: action.copyRow.piece2,
        piece3: action.copyRow.piece3,
        piece4: action.copyRow.piece4,
      });
    }
    case 'TOGGLE_ROW': {
      return Object.assign({}, state, { inPlay: !state.inPlay });
    }
    case 'EVALUATE_ROW': {
      const pieces = Object.assign({}, state);
      const unusedAnswer = Object.assign({}, action.answer);
      const pins = [];
      for (const key in state) {
        if (key.startsWith('piece')) {
          if (pieces[key] === unusedAnswer[key] && pieces[key]) {
            pins.push(2);
            pieces[key] = undefined;
            unusedAnswer[key] = undefined;
          }
        }
      }
      for (const key in pieces) {
        const pieceValue = pieces[key];
        if (key.startsWith('piece') && pieceValue) {
          for (const answerKey in unusedAnswer) {
            const answerValue = unusedAnswer[answerKey];
            if (pieceValue === answerValue) {
              pins.push(1);
              pieces[key] = undefined;
              unusedAnswer[answerKey] = undefined;
              break;
            }
          }
        }
      }

      while (pins.length < 4) {
        pins.push(0);
      }
      return Object.assign({}, state, { pins });
    }
    default:
      return state;
  }
};

const fitToIndex = (offset, min, max) => {
  const variance = max - min + 1;
  const scale = offset * variance - min;
  return Math.min(Math.floor(scale), max);
};

const answerRow = (state = {}, action) => {
  switch (action.type) {
    case 'SET_ANSWER_ROW': {
      const maxIndex = action.trey.length - 1;
      return {
        piece1: action.trey[fitToIndex(action.piece1Offset, 0, maxIndex)],
        piece2: action.trey[fitToIndex(action.piece2Offset, 0, maxIndex)],
        piece3: action.trey[fitToIndex(action.piece3Offset, 0, maxIndex)],
        piece4: action.trey[fitToIndex(action.piece4Offset, 0, maxIndex)],
      };
    }
    default:
      return state;
  }
};

const board = (state = initialBoardState, action) => {
  switch (action.type) {
    case 'CHANGE_PIECE': {
      const guesses = [...state.guesses];
      const index = state.trey.findIndex(treyColor => treyColor === action.piece);
      const newPiece = state.trey[(index + 1) % state.trey.length];
      guesses[action.guessRowIndex] = guessRow(state.guesses[action.guessRowIndex], Object.assign({}, action, { newPiece }));
      return Object.assign({}, state, { guesses });
    }
    case 'EVALUATE_ROW': {
      const guesses = [...state.guesses];
      const { answer } = state;
      guesses[action.guessRowIndex] = guessRow(state.guesses[action.guessRowIndex], Object.assign({}, action, { answer }));
      return Object.assign({}, state, { guesses });
    }
    case 'TOGGLE_ROW': {
      if (action.guessRowIndex < 0 && action.guessRowIndex >= state.guesses.length) {
        return state;
      }
      const guesses = [...state.guesses];
      guesses[action.guessRowIndex] = guessRow(state.guesses[action.guessRowIndex], action);
      return Object.assign({}, state, { guesses });
    }
    case 'SET_ANSWER_ROW': {
      const { trey } = state;
      const answer = answerRow(state.answer, Object.assign({}, action, { trey }));
      if (state.answer !== answer) {
        return Object.assign({}, state, { answer });
      }
      return state;
    }
    case 'RESET_GUESSES': {
      return Object.assign({}, state, { guesses: initialBoardState.guesses });
    }
    case 'CHECK_SHOW_ANSWER': {
      const showPieces = state.guesses.reduce((showAnswer, { inPlay, pins }, index) => {
        if (showAnswer) return true;
        if (index === 0 && inPlay === false) return true;
        if (!inPlay && pins.length === 4 && pins.every(pin => pin === 2)) return true;

        return showAnswer;
      }, false);
      if (!!state.answer.showPieces !== showPieces) {
        const answer = Object.assign({}, state.answer, { showPieces });
        return Object.assign({}, state, { answer });
      }
      return state;
    }
    case 'COPY_ROW': {
      const guessCount = state.guesses.length;
      if ((action.fromGuessRowIndex < 0 || action.fromGuessRowIndex >= guessCount)
                || (action.toGuessRowIndex < 0 || action.toGuessRowIndex >= guessCount)) {
        return state;
      }
      const guesses = [...state.guesses];
      guesses[action.toGuessRowIndex] = guessRow(state.guesses[action.toGuessRowIndex], Object.assign({}, action, { copyRow: state.guesses[action.fromGuessRowIndex] }));
      return Object.assign({}, state, { guesses });
    }
    default:
      return state;
  }
};

const webMinderApp = board;

export default webMinderApp;
