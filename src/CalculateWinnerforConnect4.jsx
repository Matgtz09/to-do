function CalculateWinnerforConnect4(squares) {
  const rows = [
    [0, 1, 2, 3],
    [7, 8, 9, 10],
    [14, 15, 16, 17],
    [21, 22, 23, 24],
    [28, 29, 30, 31],
    [35, 36, 37, 38]
  ];
  const cols = [
    [0, 7, 14],
    [1, 8, 15],
    [2, 9, 16],
    [3, 10, 17],
    [4, 11, 18],
    [5, 12, 19],
    [6, 13, 20],
  ];
  const downward_diag = [
    [0, 8, 16],
    [1, 9, 17],
    [2, 10],
    [3],
    [7, 15],
    [14]
  ];

  const upward_diag = [
    [3],
    [4, 10],
    [5, 11, 17],
    [6, 12, 18],
    [13, 19],
    [20]
  ];

  for (let i = 0; i < rows.length; i++) {
    let row = rows[i];

    for(let j = 0; j < row.length; j++)
    {
      const a = row[j];
      if (squares[a] && squares[a] === squares[a + 1] && squares[a] === squares[a + 2] && squares[a] === squares[a + 3] ) {
        return squares[a];
      }
    }
  }

  for (let i = 0; i < cols.length; i++) {
    let col = cols[i];

    for(let j = 0; j < col.length; j++)
    {
      const a = col[j];
      if (squares[a] && squares[a] === squares[a + (1 * 7)] && squares[a] === squares[a + 2 * 7] && squares[a] === squares[a + 3 * 7] ) {
        return squares[a];
      }
    }
  }

  for (let i = 0; i < downward_diag.length; i++) {
    let diag = downward_diag[i];

    for(let j = 0; j < diag.length; j++)
    {
      const a = diag[j];
      if (squares[a] && squares[a] === squares[a + (1 * 8)] && squares[a] === squares[a + 2 * 8] && squares[a] === squares[a + 3 * 8] ) {
        return squares[a];
      }
    }
  }

  for (let i = 0; i < upward_diag.length; i++) {
    let diag = upward_diag[i];

    for(let j = 0; j < diag.length; j++)
    {
      const a = diag[j];
      if (squares[a] && squares[a] === squares[a + (1 * 6)] && squares[a] === squares[a + 2 * 6] && squares[a] === squares[a + 3 * 6] ) {
        return squares[a];
      }
    }
  }
  return null;
}

export default CalculateWinnerforConnect4

// 0   1   2   3   4   5   6
// 7   8   9   10  11  12  13
// 14  15  16  17  18  19  20
// 21  22  23  24  25  26  27
// 28  29  30  31  32  33  34
// 35  36  37  38  39  40  41