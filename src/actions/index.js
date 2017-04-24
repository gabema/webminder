
export const CHANGE_PIECE = 'CHANGE_PIECE';
export const EVALUATE_ROW = 'EVALUATE_ROW';
export const TOGGLE_ROW = 'TOGGLE_ROW';
export const RESET_GUESSES = 'RESET_GUESSES';
export const SET_ANSWER_ROW = 'SET_ANSWER_ROW';

export const changePiece = (guessRowIndex, pieceName, piece) => {
    return {
        type: CHANGE_PIECE,
        guessRowIndex,
        pieceName,
        piece
    };
};

export const evaluateRow = (guessRowIndex) => {
    return {
        type: EVALUATE_ROW,
        guessRowIndex
    };
};

export const toggleRow = (guessRowIndex) => {
    return {
        type: TOGGLE_ROW,
        guessRowIndex
    };
};

export const resetGuesses = () => {
    return {
        type: RESET_GUESSES
    };
};

export const setAnswerRow = (piece1Offset, piece2Offset, piece3Offset, piece4Offset) => {
    return {
        type: SET_ANSWER_ROW,
        piece1Offset,
        piece2Offset,
        piece3Offset,
        piece4Offset
    };
};
