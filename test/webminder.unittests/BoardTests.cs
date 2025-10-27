using webminder.domain;

namespace webminder.unittests;

public class BoardTests
{
    [Fact]
    public void TestBoardNotReady()
    {
        // Assign
        var initialRow = 0;
        var solution = new SolutionRow(Spots: [PieceColor.Black, PieceColor.Black, PieceColor.Green, PieceColor.White]);
        var board = new Board(
            GuessRows: [
                new GuessRow(
                    Spots: [PieceColor.Black, PieceColor.Black, PieceColor.Red, PieceColor.Blue],
                    Pins: TestConstants.EMPTY_PINS),
                new GuessRow(
                    Spots: TestConstants.EmptySpots,
                    Pins: TestConstants.EMPTY_PINS)
            ],
            CurrentRow: initialRow,
            SolutionRow: solution);

        // Act
        var updatedBoard = board.ResolveGuess();

        // Assert
        Assert.Equal(
            [Pin.Black, Pin.Black, Pin.None, Pin.None],
            updatedBoard.GuessRows[initialRow].Pins);
        Assert.Equal(initialRow + 1, updatedBoard.CurrentRow);
        Assert.False(updatedBoard.GuessRows[initialRow].IsSolved());
    }
}
