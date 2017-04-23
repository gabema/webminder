import { CHANGE_PIECE, EVALUATE_ROW } from '../actions';

const initialBoardState = {
    answer: {
        piece1: 'red',
        piece2: 'blue',
        piece3: 'green',
        piece4: 'yellow'
    },
    guesses: [
        { pins:[] }, { pins:[] }, { pins:[] }, { pins:[] }, { pins:[] },
        { pins:[] }, { pins:[] }, { pins:[] }, { pins:[] }, { pins:[] }
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
        case EVALUATE_ROW: {
            let pieces = Object.assign({}, state);
            let unusedAnswer = Object.assign({}, action.answer);
            let pins = [];
            for (let key in state) {
                if (key.startsWith('piece')) {
                    if (pieces[key] === unusedAnswer[key] && pieces[key]) {
                        pins.push(2);
                        pieces[key] = undefined;
                        unusedAnswer[key] = undefined;
                    }
                }
            }
            for (let key in pieces) {
                let pieceValue = pieces[key];
                if (key.startsWith('piece') && pieceValue) {
                    for (let answerKey in unusedAnswer) {
                        let answerValue = unusedAnswer[answerKey];
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
            return Object.assign({}, state, {pins});
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
        case EVALUATE_ROW: {
            let guesses = [...state.guesses];
            let answer = state.answer;
            guesses[action.guessRowIndex] = guessRow(state.guesses[action.guessRowIndex], Object.assign({}, action, {answer}));
            return Object.assign({}, state, { guesses });
        }
        default:
            return state;
    }
};

const webMinderApp = board;

export default webMinderApp;
