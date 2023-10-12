function isValidBoard(board) {
  if (board.length <= 0) return false;
  for (let i = 0; i < board.length; ++i) {
    if (!isValidNumber(board[i])) return false;
  }
  return true;
}

function isValidNumber(x) {
  //leeg = 0, rood = 1, groen = 2
  return x >= 0 && x <= 2 && x % 1 === 0;
}

function mitosis(board, from, to) {
  let result = board.slice(0);
  result[to] = result[from];
  transformAdjacent(result, to);
  return result;
}

function transformAdjacent(board, x) {
  if (board[x - 1] !== 0) board[x - 1] = board[x];
  if (board[x + 1] !== 0) board[x + 1] = board[x];
}

function counts(board) {
  if (board.length === 0) return { red: 0, green: 0 };
  return sumColors(whichColor(board[0]), counts(board.slice(1)));
}

function whichColor(x) {
  if (x === 1) return { red: 1, green: 0 };
  if (x === 2) return { red: 0, green: 1 };
  return { red: 0, green: 0 };
}

function sumColors(obj1, obj2) {
  return {
    red: obj1["red"] + obj2["red"],
    green: obj1["green"] + obj2["green"],
  };
}
