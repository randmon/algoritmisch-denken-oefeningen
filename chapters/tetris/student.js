function shapeT(color) {
  const c = color;

  return [
    [c, c, c], //1e rij
    [0, c, 0], //2e rij
  ];
}

function shapeI(color) {
  const c = color;

  return [[c], [c], [c], [c]];
}

function shapeS(color) {
  const c = color;

  return [
    [0, c, c],
    [c, c, 0],
  ];
}

function shapeZ(color) {
  const c = color;

  return [
    [c, c, 0],
    [0, c, c],
  ];
}

function shapeL(color) {
  const c = color;

  return [
    [c, 0],
    [c, 0],
    [c, c],
  ];
}

function shapeJ(color) {
  const c = color;

  return [
    [0, c],
    [0, c],
    [c, c],
  ];
}

function shapeO(color) {
  const c = color;

  return [
    [c, c],
    [c, c],
  ];
}

function repeat(n, f) {
  const result = [];
  for (let i = 0; i < n; ++i) {
    result.push(f());
  }
  return result;
}

function createEmptyPit(width, height) {
  return repeat(height, () => createRow(width));
}

function createRow(width) {
  return repeat(width, () => 0);
}

function width(grid) {
  return grid[0].length;
}

function height(grid) {
  return grid.length;
}

function isInside(grid, row, column) {
  return row >= 0 && column >= 0 && row < height(grid) && column < width(grid);
}

function column(grid, columnIndex) {
  let result = [];
  for (let row of grid) {
    result.push(row[columnIndex]);
  }
  return result;
}

function rotateCW(grid) {
  let result = [];
  for (let i = 0; i < width(grid); ++i) {
    let nextRow = column(grid, i).reverse();
    result.push(nextRow);
  }
  return result;
}

function isRowFull(row) {
  return row.every((x) => x !== 0);
}

function isRowEmpty(row) {
  return row.every((x) => x == 0);
}

function countFullRows(pit) {
  return pit.filter(isRowFull).length;
}

function clearRow(pit, row) {
  pit[row] = createRow(width(pit));
}

function copyRow(pit, from, to) {
  pit[to] = pit[from].slice();
}

function removeRow(pit, row) {
  clearRow(pit, row);
  for (let i = row - 1; i >= 0; --i) {
    if (isRowEmpty(pit[i])) {
      break;
    } else {
      copyRow(pit, i, i + 1);
      clearRow(pit, i);
    }
  }
}

function removeFullRows(grid) {
  const h = height(grid);
  for (let row = 0; row < h; ++row) {
    if (isRowFull(grid[row])) {
      removeRow(grid, row);
    }
  }
}
