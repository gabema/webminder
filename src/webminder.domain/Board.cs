namespace webminder.domain;

public record Board(List<GuessRow> GuessRows, int CurrentRow, SolutionRow SolutionRow)
{
    public static Board New(SolutionRow solution) => new(
        GuessRows: [
            GuessRow.Empty,
            GuessRow.Empty,
            GuessRow.Empty,
            GuessRow.Empty,
            GuessRow.Empty,
            GuessRow.Empty,
            GuessRow.Empty,
            GuessRow.Empty,
            GuessRow.Empty,
            GuessRow.Empty,
        ],
        CurrentRow: 0,
        SolutionRow: solution);

    public Board ResolveGuess()
    {
        var guessRow = GuessRows[CurrentRow];
        if (guessRow.PiecesSelected() is false)
        {
            return this;
        }

        GuessRows[CurrentRow] = guessRow.Resolve(SolutionRow);
        return this with { CurrentRow = CurrentRow + 1 };
    }
}
