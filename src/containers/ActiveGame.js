import { connect } from 'react-redux';
import { changePiece, checkShowAnswer, copyRow, evaluateRow, resetGuesses, setAnswerRow, toggleRow } from '../actions';
import Board from '../components/Board';

const mapStateToProps = (state) => {
  return {
    answer: state.answer,
    guesses: state.guesses,
    trey: state.trey
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    rowPieceClicked: (color, pieceName, index) => dispatch(changePiece(index, pieceName, color)),
    evaluateRow: (index) => {
      dispatch(evaluateRow(index));
      dispatch(toggleRow(index));
      dispatch(toggleRow(index - 1));
      dispatch(copyRow(index, index - 1));
      dispatch(checkShowAnswer());
    },
    resetGame: () => {
      dispatch(resetGuesses());
      dispatch(setAnswerRow(Math.random(), Math.random(), Math.random(), Math.random()));
    }
  }
};

const ActiveGame = connect(
  mapStateToProps,
  mapDispatchToProps
)(Board);

export default ActiveGame;
