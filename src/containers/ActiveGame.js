import { connect } from 'react-redux';
import { changePiece, evaluateRow } from '../actions';
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
    evaluateRow: (index) => dispatch(evaluateRow(index))
  }
};

const ActiveGame = connect(
  mapStateToProps,
  mapDispatchToProps
)(Board);

export default ActiveGame;
