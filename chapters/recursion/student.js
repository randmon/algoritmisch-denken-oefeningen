function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

function sum(ns) {
  if (ns.length === 0) return 0;
  return ns[0] + sum(ns.slice(1));
}

function minimum(ns) {
  if (ns.length > 1) {
    let deeper = minimum(ns.slice(1));
    if (deeper < ns[0]) return deeper;
  }
  return ns[0];
}

function maximum(ns) {
  if (ns.length > 1) {
    let deeper = maximum(ns.slice(1));
    if (deeper > ns[0]) return deeper;
  }
  return ns[0];
}

function isIncreasing(ns) {
  if (ns.length > 1) {
    return isIncreasing(ns.slice(1)) && ns[0] <= ns[1];
  }
  return true;
}

function contains(xs, x) {
  if (xs.length === 0) return false;
  if (xs[0] === x) return true;
  return contains(xs.slice(1), x);
}

function allPositive(ns) {
  if (ns.length === 0) return true;
  if (ns[0] >= 0) return allPositive(ns.slice(1));
  return false;
}

function count(xs, x) {
  //hoeveel keer x in xs voorkomt
  if (xs.length === 0) return 0;
  return (xs[0] === x) + count(xs.slice(1), x);
}
