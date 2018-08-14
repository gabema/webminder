import { connect } from 'react-redux';
import Board from './Board';

const toggleRow = guessRowIndex => ({
  type: 'TOGGLE_ROW',
  guessRowIndex,
});

const mapStateToProps = ({ answer, guesses, trey }) => ({
  answer,
  guesses,
  trey,
});

const mapDispatchToProps = dispatch => ({
  rowPieceClicked: (color, pieceName, index) => dispatch({
    type: 'CHANGE_PIECE',
    guessRowIndex: index,
    pieceName,
    piece: color,
  }),
  evaluateRow: (index) => {
    dispatch({
      type: 'EVALUATE_ROW',
      guessRowIndex: index,
    });
    dispatch(toggleRow(index));
    dispatch(toggleRow(index - 1));
    dispatch({
      type: 'COPY_ROW',
      fromGuessRowIndex: index,
      toGuessRowIndex: index - 1,
    });
    dispatch({ type: 'CHECK_SHOW_ANSWER' });
  },
  resetGame: () => {
    dispatch({
      type: 'RESET_GUESSES',
    });
    dispatch({
      type: 'SET_ANSWER_ROW',
      piece1Offset: Math.random(),
      piece2Offset: Math.random(),
      piece3Offset: Math.random(),
      piece4Offset: Math.random(),
    });
  },
});

const ActiveGame = connect(
  mapStateToProps,
  mapDispatchToProps
)(Board);

export default ActiveGame;
