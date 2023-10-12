function first(xs) {
  return xs[0];
}

function last(xs) {
  return xs[xs.length - 1];
}

function sum(ns) {
  return ns.reduce((acc, cur) => acc + cur, 0);
}

function contains(value, xs) {
  return xs.includes(value);
}

function all(bs) {
  return bs.every((b) => b);
}

function any(bs) {
  return bs.some((b) => b);
}

function repeat(n, x) {
  let result = [];
  for (let i = 0; i < n; i++) {
    result[i] = x;
  }
  return result;
}

function range(from, to) {
  let result = [];
  for (let i = from; i <= to; i++) {
    result.push(i);
  }
  return result;
}

function incrementEach(ns) {
  ns.forEach((n, i) => (ns[i] = n + 1));
}

function clamp(ns, min, max) {
  ns.forEach((n, i) => {
    if (n < min) ns[i] = min;
    if (n > max) ns[i] = max;
  });
}

function trimZeros(ns) {
  while (ns.length > 0 && ns[0] === 0) {
    ns.shift();
  }
  while (ns.length > 0 && ns[ns.length - 1] === 0) {
    ns.pop();
  }
}

function cut(xs, size) {
  while (xs.length > size) {
    xs.pop();
  }
}

function repeat2(n, xs) {
  let result = [];
  for (let i = 0; i < n; i++) {
    result = [...result, ...xs];
  }
  return result;
}

function count(value, xs) {
  return xs.filter((x) => x === value).length;
}

function minimum(ns) {
  let min = ns[0];
  for (let i of ns) {
    if (i < min) min = i;
  }
  return min;
}

function allEqual(xs) {
  for (let i = 0; i < xs.length; i++) {
    if (xs[i] !== xs[0]) return false;
  }
  return true;
}

function allDifferent(xs) {
  for (let i = 0; i < xs.length; i++) {
    for (let j = i + 1; j < xs.length; j++) {
      if (xs[i] === xs[j]) return false;
    }
  }
  return true;
}

function missingNumber(ns) {
  for (let i = 1; i < ns.length; i++) {
    if (ns[i] - 1 !== ns[i - 1]) return ns[i] - 1;
  }
  return 0;
}

function restaurant(entrees, mainCourses, desserts, budget) {
  //e+m+d <= budget = MAX
  let result = [0, 0, 0];
  let maxSpent = 0;
  for (let e of entrees) {
    for (let m of mainCourses) {
      for (let d of desserts) {
        let cost = e + m + d;
        if (cost <= budget && cost > maxSpent) {
          result = [e, m, d];
          maxSpent = cost;
        }
      }
    }
  }
  return result;
}

function indexOf(xs, x) {
  for (let i = 0; i < xs.length; ++i) {
    if (xs[i] === x) return i;
  }
  return -1;
}

function lastIndexOf(xs, x) {
  for (let i = xs.length - 1; i >= 0; --i) {
    if (xs[i] === x) return i;
  }
  return -1;
}

function maximum(ns) {
  let max = ns[0];
  for (n of ns) {
    if (n > max) max = n;
  }
  return max;
}

function smallJumps(ns) {
  for (let i = 0; i < ns.length - 1; ++i) {
    if (Math.abs(ns[i] - ns[i + 1]) > 1) return false;
  }
  return true;
}

function reverse(xs) {
  let result = [];
  for (x of xs) {
    result.unshift(x);
  }
  return result;
}

function reverseInPlace(xs) {
  for (let i = 0; i < xs.length / 2; ++i) {
    let temp = xs[i];
    xs[i] = xs[xs.length - 1 - i];
    xs[xs.length - 1 - i] = temp;
  }
  // alternative:
  // xs.reverse();
}

function isPalindrome(xs) {
  let rev = reverse(xs);
  return equalArrays(xs, rev);
}

function sameLength(xs, ys) {
  return xs.length === ys.length;
}

function equalArrays(xs, ys) {
  return sameLength(xs, ys) && xs.every((x, i) => x === ys[i]);
}

function isPermutation(xs, ys) {
  if (!sameLength(xs, ys)) return false;
  let rest = ys.slice();
  for (let i = 0; i < xs.length; ++i) {
    if (contains(xs[i], rest)) {
      rest.splice(indexOf(rest, xs[i]), 1);
    } else {
      return false;
    }
  }
  return true;
}

function removeRuns(xs) {
  let result = [];
  for (let i = 0; i < xs.length; ++i) {
    if (i === 0) {
      result.push(xs[0]);
    } else if (xs[i] !== result[result.length - 1]) result.push(xs[i]);
  }
  return result;
}

function removeRunsInPlace(xs) {
  let i = 0;
  while (i < xs.length - 1) {
    if (xs[i] === xs[i + 1]) {
      xs.splice(i, 1);
    } else {
      i++;
    }
  }
}

function mostFrequent(xs) {
  let max = 0;
  let chosen = xs[0];
  for (x of xs) {
    let n = count(x, xs);
    if (n > max) {
      max = n;
      chosen = x;
    }
  }
  return chosen;
}

function mostFrequent2(xs) {
  let max = 0;
  let chosen = [];
  for (x of xs) {
    if (!contains(x, chosen)) {
      let n = count(x, xs);
      if (n > max) {
        max = n;
        chosen = [x];
      } else if (n === max) {
        chosen.push(x);
      }
    }
  }
  return chosen;
}

function isIncreasing(ns) {
  return ns.every((n, i) => i === 0 || n === ns[i - 1] || n > ns[i - 1]);
}

function isDecreasing(ns) {
  return ns.every((n, i) => i === 0 || n === ns[i - 1] || n < ns[i - 1]);
}

function sortArray(ns) {
  let rest = ns.slice();
  ns = new Array(rest.length);
  while (rest.length > 0) {
    let x = maximum(rest);
    ns.unshift(x);
    rest.splice(indexOf(rest, x), 1);
  }
  return ns;
}

function missingNumber2(ns) {
  let sorted = sortArray(ns);
  return missingNumber(sorted);
}

function getNextIncSeq(ns) {
  let result = [];
  result.push(ns[0]);
  for (let i = 1; i < ns.length; ++i) {
    if (ns[i] < ns[i - 1]) {
      break;
    } else {
      result.push(ns[i]);
    }
  }
  return result;
}

function longestIncreasingSubsequence(ns) {
  let copy = ns.slice();
  let grootste = [];
  while (copy.length > 0) {
    let current = getNextIncSeq(copy);
    for (let i = 0; i < current.length; ++i) {
      copy.shift();
    }

    if (current.length > grootste.length) {
      grootste = current.slice();
    }
  }
  return grootste;
}

function uniq(xs) {
  let result = [];
  for (let x of xs) {
    if (!contains(x, result)) result.push(x);
  }
  return result;
}

function uniqInPlace(xs) {
  for (let i = 0; i < xs.length; ++i) {
    for (let j = xs.length - 1; j > i; --j) {
      if (xs[j] === xs[i]) xs.splice(j, 1);
    }
  }
}

function mastermind(xs, ys) {
  let result = [0, 0];
  let rest = ys.slice();
  for (let i = 0; i < xs.length; i++) {
    let x = indexOf(rest, xs[i]);
    if (x !== -1) {
      if (xs[i] === ys[i]) result[0]++;
      else result[1]++;
      rest.splice(x, 1);
    }
  }
  return result;
}

function isSubsequenceOf(xs, ys) {
  let i = 0;
  let j = 0;
  while (i < xs.length && j < ys.length) {
    if (xs[i] === ys[j]) ++i;
    ++j;
  }
  return i == xs.length;
}

function countTurns(ns) {
  let increasing = true;
  let turns = 0;
  for (let i = 0; i < ns.length; ++i) {
    if (increasing) {
      if (ns[i] > ns[i + 1]) {
        ++turns;
        increasing = false;
      }
    } else {
      if (ns[i] < ns[i + 1]) {
        ++turns;
        increasing = true;
      }
    }
  }
  return turns;
}

function removeLastOfEach(ns) {
  let result = [];
  let cut = [];
  for (let i = ns.length; i >= 0; --i) {
    if (contains(ns[i], cut)) {
      result.unshift(ns[i]);
    } else {
      cut.push(ns[i]);
    }
  }
  return result;
}

function common(ks, ns) {
  let result = [];
  rest = ns.slice();
  for (let i = 0; i < ks.length; ++i) {
    if (contains(ks[i], rest)) {
      rest.splice(indexOf(rest, ks[i]), 1);
      result.push(ks[i]);
    }
  }
  return result;
}

/*----------------MY COLLECTION----------------*/

/*concat() — Join several arrays into one
indexOf() — Returns the first position at which a given element appears in an array
join() — Combine elements of an array into a single string and return the string
lastIndexOf() — Gives the last position at which a given element appears in an array
pop() — Removes the last element of an array
push() — Add a new element at the end
reverse() — Sort elements in a descending order
shift() — Remove the first element of an array
slice() — Pulls a copy of a portion of an array into a new array
sort() — Sorts elements alphabetically
splice() — Adds elements in a specified way and position
toString() — Converts elements to strings
unshift() —Adds a new element to the beginning
valueOf() — Returns the primitive value of the specified object */

function removeDuplicates(ns) {
  return [...new Set(ns)];
}
