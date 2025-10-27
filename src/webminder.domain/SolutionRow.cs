namespace webminder.domain;

public record SolutionRow(PieceColor[] Spots)
{
    public static SolutionRow Empty => new(
        [PieceColor.None, PieceColor.None, PieceColor.None, PieceColor.None]
    );

    public static SolutionRow Random()
    {
        var random = new Random();
        var spots = new PieceColor[4];
        var colors = Enum.GetValues<PieceColor>().Where(c => c != PieceColor.None).ToArray();

        for (int i = 0; i < spots.Length; i++)
        {
            spots[i] = colors[random.Next(colors.Length)];
        }

        return new SolutionRow(spots);
    }
}
