using webminder.domain;

namespace webminder.unittests;

public static class TestConstants
{
    public static readonly PieceColor[] AllPieceColors =
    [
        PieceColor.Red,
        PieceColor.Blue,
        PieceColor.White,
        PieceColor.Black,
        PieceColor.Purple,
        PieceColor.Yellow,
        PieceColor.Green,
    ];

    public static readonly PieceColor[] EmptySpots =
    [
        PieceColor.None,
        PieceColor.None,
        PieceColor.None,
        PieceColor.None,
    ];

    public static readonly Pin[] EMPTY_PINS =
    [
        Pin.None,
        Pin.None,
        Pin.None,
        Pin.None,
    ];
}
