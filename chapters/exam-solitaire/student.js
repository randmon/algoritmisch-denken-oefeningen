function isSolved(bs) {
  let count = 0;
  for (let i = 0; i < bs.length; ++i) {
    count += bs[i] ? 1 : 0;
    if (count > 1) return false;
  }
  return count === 1;
}

function pattern(n) {
  return drawBordWithPattern([false, true, true], n);
}

function drawBordWithPattern(pattern, n) {
  // pattern: array met een patroon
  // n: aantal keer om patroon te herhalen
  let result = [];
  for (let i = 0; i < n; ++i) {
    result.push(...pattern);
  }
  return result;
}

function isValidMove(bs, i, delta) {
  // i: getal dat een positie op het spelbord voorstelt.
  // delta: een getal dat een richting aangeeft: -1 (links) en 1 (rechts).
  if (i >= bs.length || i < 0 || !bs[i]) return false;
  let eindpositie = i + 2 * delta;
  return (
    eindpositie >= 0 &&
    eindpositie < bs.length &&
    !bs[eindpositie] &&
    bs[i + delta]
  );
}

function validMoves(bs) {
  // object {left:(gesorteerde lijst van indices van stenen die een linkswaartse sprong kunnen maken), right: (analoog voor rechts)}
  let leftarray = [];
  let rightarray = [];
  for (let i = 0; i < bs.length; ++i) {
    if (isValidMove(bs, i, -1)) leftarray.push(i);
    if (isValidMove(bs, i, 1)) rightarray.push(i);
  }
  return { left: leftarray, right: rightarray };
}

function move(bs, i, delta) {
  // geeft een nieuwe array terug met die nieuwe toestand van het spelbord
  let result = bs.slice(0);
  result[i] = false;
  result[i + delta] = false;
  result[i + delta * 2] = true;
  return result;
}

function solveable(bs) {
  if (isSolved(bs)) return true;
  for (let i = 0; i < bs.length; ++i) {
    if (isValidMove(bs, i, -1)) {
      //try left
      if (solveable(move(bs, i, -1))) return true;
    } else if (isValidMove(bs, i, 1)) {
      //try right
      if (solveable(move(bs, i, 1))) return true;
    }
  }
  return false;
}

/*--------------------2D--------------------*/

function size(bss) {
  // check if invalid:
  if (bss.length >= 1) {
    let firstlength = bss[0].length;
    for (let i = 0; i < bss.length; ++i) {
      if (bss[i].length === 0 || bss[i].length !== firstlength)
        return "invalid";
    }
  } else {
    return "invalid";
  }
  return { width: width(bss), height: height(bss) };
}

function width(bss) {
  return bss[0].length;
}

function height(bss) {
  return bss.length;
}

function isValidMove2D(bss, x, y, dx, dy) {
  if (dy === 0) return isValidMove(bss[y], x, dx);
  return isValidMove(getKolomAlsArray(bss, x), y, dy);
}

function getKolomAlsArray(bss, x) {
  let result = [];
  for (let i = 0; i < height(bss); ++i) {
    result.push(bss[i][x]);
  }
  return result;
}

function isSolved2D(bss) {
  let solvedRijCount = 0;
  for (let i = 0; i < height(bss); ++i) {
    solvedRijCount += isSolved(bss[i]);
  }
  return solvedRijCount === 1;
}

function parse(str) {
  let result = [];
  let nextel = [];
  for (let i = 0; i < str.length; ++i) {
    switch (str[i]) {
      case "x":
        nextel.push(true);
        break;
      case ".":
        nextel.push(false);
        break;
      case "|":
        result.push(nextel);
        nextel = [];
        break;
    }
  }
  result.push(nextel);
  return result;
}
