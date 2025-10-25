using webminder.domain;

namespace webminder.unittests;

public class GuessRowTests
{
    [Theory]
    [MemberData(nameof(TestData))]
    public void Test1(PieceColor[] solutionSpots, PieceColor[] spots, Pin[] expectedPins)
    {
        // Assign
        var solution = new SolutionRow(Spots: solutionSpots);
        var guessRow = new GuessRow(
            Spots: spots,
            Pins: [Pin.None, Pin.None, Pin.None, Pin.None]);

        // Act
        guessRow = guessRow.Resolve(solution);

        // Assert
        Assert.Equal(expectedPins, guessRow.Pins);
    }

    public static TheoryData<PieceColor[], PieceColor[], Pin[]> TestData()
    {
        var data = new TheoryData<PieceColor[], PieceColor[], Pin[]>
        {
            {
                [PieceColor.Black, PieceColor.Black, PieceColor.Black, PieceColor.Black],
                [PieceColor.Purple, PieceColor.Purple, PieceColor.Purple, PieceColor.Purple],
                [Pin.None, Pin.None, Pin.None, Pin.None]
            },
            {
                [PieceColor.Black, PieceColor.Blue, PieceColor.Green, PieceColor.Purple],
                [PieceColor.Purple, PieceColor.Green, PieceColor.Blue, PieceColor.Black],
                [Pin.White, Pin.White, Pin.White, Pin.White]
            },
            {
                [PieceColor.Black, PieceColor.White, PieceColor.White, PieceColor.Black],
                [PieceColor.White, PieceColor.Black, PieceColor.Black, PieceColor.White],
                [Pin.White, Pin.White, Pin.White, Pin.White]
            },
            {
                [PieceColor.Black, PieceColor.Black, PieceColor.Green, PieceColor.White],
                [PieceColor.Black, PieceColor.Black, PieceColor.Purple, PieceColor.Green],
                [Pin.Black, Pin.Black, Pin.White, Pin.None]
            },
            {
                [PieceColor.Black, PieceColor.Black, PieceColor.Green, PieceColor.White],
                [PieceColor.Black, PieceColor.Black, PieceColor.Green, PieceColor.White],
                [Pin.Black, Pin.Black, Pin.Black, Pin.Black]
            }
        };
        return data;
    }
}