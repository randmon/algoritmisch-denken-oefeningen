function longest(xss) {
  result = [];
  for (element of xss) {
    if (element.length > result.length) {
      result = element;
    }
  }
  return result;
}

function flatten(xss) {
  result = [];
  for (element of xss) {
    result = [...result, ...element];
  }
  return result;
}

function zip(xs, ys) {
  let result = [];
  let size = Math.min(xs.length, ys.length);
  while (size > 0) {
    size--;
    result.unshift([xs[size], ys[size]]);
  }
  return result;
}

function orderedPairs(xs) {
  result = [];
  for (x of xs) {
    for (y of xs) {
      result.push([x, y]);
    }
  }
  return result;
}

function unorderedPairs(xs) {
  let result = [];
  for (let i = 0; i < xs.length; i++) {
    for (let j = i + 1; j < xs.length; j++) {
      result.push([xs[i], xs[j]]);
    }
  }
  return result;
}

function prefixes(xs) {
  if (xs.length === 0) return [[]];
  else return [...prefixes(xs.slice(0, xs.length - 1)), xs];
}

function pascal(n) {
  let result = [];
  result.push([1]);
  for (let i = 0; i < n - 1; i++) {
    result.push([1]); //Always begins with 1

    let lineToWork = result[i];
    for (let j = 0; j < result.length - 2; j++) {
      result[result.length - 1].push(lineToWork[j] + lineToWork[j + 1]);
    }

    result[result.length - 1].push(1); //Always ends with 1
  }
  return result;
}

function concat(xss) {
  let result = [];
  xss.forEach((x) => {
    result.push(...x);
  });
  return result;
}

function intersection(xss) {
  let result = [];

  if (xss.length === 1) {
    result.push(...xss[0]);
  } else if (xss.length === 2) {
    let array1 = xss[0];
    let array2 = xss[1];
    for (let i = 0; i < array1.length; i++) {
      for (let j = 0; j < array2.length; j++) {
        if (array1[i] === array2[j]) result.push(array1[i]);
      }
    }
  } else {
    //More than 2 inner arrays
    let result2 = [];
    for (let i = 0; i < xss.length - 1; i++) {
      result2 = intersection([xss[i], xss[i + 1]]);
    }
    result = result2;
  }
  return result;
}
