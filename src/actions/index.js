
export const CHANGE_PIECE = 'CHANGE_PIECE';

export const EVALUATE_ROW = 'EVALUATE_ROW';

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
