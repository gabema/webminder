
export const CHANGE_PIECE = 'CHANGE_PIECE';

export const changePiece = (guessRowIndex, pieceName, piece) => {
    return {
        type: CHANGE_PIECE,
        guessRowIndex,
        pieceName,
        piece
    };
};