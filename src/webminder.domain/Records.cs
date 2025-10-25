namespace webminder.domain;

public enum Pin
{
    Black,
    White,
    None,
}

public enum PieceColor
{
    None,
    Red,
    Blue,
    White,
    Black,
    Purple,
    Yellow,
    Green,
}

public record SolutionRow(PieceColor[] Spots)
{
    public static SolutionRow Empty => new(
        [PieceColor.None, PieceColor.None, PieceColor.None, PieceColor.None]
    );
}

public record GuessRow(
    PieceColor[] Spots,
    Pin[] Pins
)
{
    public static GuessRow Empty => new(
        [PieceColor.None, PieceColor.None, PieceColor.None, PieceColor.None],
        [Pin.None, Pin.None, Pin.None, Pin.None]
    );

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
        return this with { Pins = [..pins] };
    }
}

public record Board();
