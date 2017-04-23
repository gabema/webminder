import { CHANGE_PIECE } from '../actions';

const initialBoardState = {
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

const guessRow = (state = {}, action) => {
    switch(action.type) {
        case CHANGE_PIECE: {
            if (state[action.pieceName] === action.newPiece) {
                return state;
            }
            let newPiece = {};
            newPiece[action.pieceName] = action.newPiece;
            let newState = Object.assign({}, state, newPiece);
            return newState;
        }
        default:
            return state;
    }
};

const board = (state = initialBoardState, action) => {
    switch(action.type) {
        case CHANGE_PIECE: {
            let guesses = [...state.guesses];
            let index = state.trey.findIndex(treyColor => treyColor === action.piece);
            let newPiece = state.trey[(index + 1) % state.trey.length];
            guesses[action.guessRowIndex] = guessRow(state.guesses[action.guessRowIndex], Object.assign({}, action, {newPiece}));
            return Object.assign({}, state, { guesses });
        }
        default:
            return state;
    }
};

const webMinderApp = board;

export default webMinderApp;
