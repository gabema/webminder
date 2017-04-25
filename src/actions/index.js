
export const CHANGE_PIECE = 'CHANGE_PIECE';
export const EVALUATE_ROW = 'EVALUATE_ROW';
export const TOGGLE_ROW = 'TOGGLE_ROW';
export const COPY_ROW = 'COPY_ROW';
export const RESET_GUESSES = 'RESET_GUESSES';
export const SET_ANSWER_ROW = 'SET_ANSWER_ROW';
export const CHECK_SHOW_ANSWER = 'CHECK_SHOW_ANSWER';

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

export const checkShowAnswer = () => {
    return { type: CHECK_SHOW_ANSWER };
}

export const copyRow = (fromGuessRowIndex, toGuessRowIndex) => {
    return {
        type: COPY_ROW,
        fromGuessRowIndex,
        toGuessRowIndex
    };
};
