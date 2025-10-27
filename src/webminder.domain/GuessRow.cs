namespace webminder.domain;

public record GuessRow(
    PieceColor[] Spots,
    Pin[] Pins
)
{
    public static GuessRow Empty => new(
        [PieceColor.None, PieceColor.None, PieceColor.None, PieceColor.None],
        [Pin.None, Pin.None, Pin.None, Pin.None]
    );

    public GuessRow RotateSpot(int index)
    {
        var newSpots = Spots.ToArray();
        newSpots[index] = newSpots[index] switch
        {
            PieceColor.None => PieceColor.Red,
            PieceColor.Red => PieceColor.Green,
            PieceColor.Green => PieceColor.Blue,
            PieceColor.Blue => PieceColor.Yellow,
            PieceColor.Yellow => PieceColor.Purple,
            PieceColor.Purple => PieceColor.Black,
            PieceColor.Black => PieceColor.White,
            PieceColor.White => PieceColor.Red,
            _ => PieceColor.None
        };
        return this with { Spots = newSpots };
    }

    public GuessRow WithSpot(int index, PieceColor color)
    {
        var newSpots = Spots.ToArray();
        newSpots[index] = color;
        return this with { Spots = newSpots };
    }

    // If a Spot in GuessRow matches a spot in the solution add a Black Pin.
    // If a Spot in GuessRow is the same color as in the solution but at a different index add a White Pin.
    // Otherwise add a None Pin.
    public GuessRow Resolve(SolutionRow solution)
    {
        if (solution.Spots.Length != Spots.Length)
        {
            throw new ArgumentException("Solution and Guess must have the same number of spots.");
        }

        var pins = new List<Pin>();
        var guessSpots = Spots.ToList();

        // First pass: check for Black Pins
        for (int i = 0; i < Spots.Length; i++)
        {
            if (guessSpots[i] == solution.Spots[i])
            {
                pins.Add(Pin.Black);
                guessSpots[i] = PieceColor.None;  // Mark as used
            }
        }

        // Second pass: check for White Pins
        for (int i = 0; i < Spots.Length; i++)
        {
            int index = guessSpots.IndexOf(solution.Spots[i]);
            if (index != -1)
            {
                pins.Add(Pin.White);
                guessSpots[index] = PieceColor.None; // Mark as used
            }
        }

        // Fill the rest with None Pins
        while (pins.Count < Spots.Length)
        {
            pins.Add(Pin.None);
        }
        pins.Sort();
        return this with { Pins = pins.ToArray() };
    }

    public bool PiecesSelected() => !Spots.Any(peice => peice == PieceColor.None);
    public bool IsSolved() => Pins.All(pin => pin == Pin.Black);
}
