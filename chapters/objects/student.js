function getAge(person) {
  return person.age;
  // return person['age'];
}

function bmi(person) {
  return Math.round(person.weight / (person.length / 100) ** 2);
}

function paternalAncestor(person, n) {
  for (let i = 0; i < n; i++) {
    person = person.father;
  }
  return person.name;
}

function substitute(xs, dictionary) {
  let result = new Array(xs.length);
  for (let i in xs) {
    result[i] = dictionary[xs[i]];
  }
  return result;
}

function cycle(obj, start) {
  let result = [start];
  let current = obj[start];
  while (current !== start) {
    result.push(current);
    current = obj[current];
  }
  return result;
}

function keys(obj) {
  return Object.keys(obj);
}

function values(obj) {
  return Object.values(obj);
}

function fixedPoints(obj) {
  let result = [];
  for (const key in obj) {
    const value = obj[key];
    if (key === value) result.push(key);
  }
  return result;
}

function commonKeys(x, y) {
  let result = [];
  for (const key in x) {
    if (key in y) {
      result.push(key);
    }
  }
  return result;
}

// hoeveel keer elke waarde in een array voorkomt -> {waarde:aantal}
function frequencies(xs) {
  let result = {};
  xs.forEach((x) => (x in result ? result[x]++ : (result[x] = 1)));
  return result;
}

function copy(obj) {
  return { ...obj };
}

function update(obj, key, value) {
  let result = copy(obj);
  result[key] = value;
  return result;
}

function merge(x, y) {
  return { ...x, ...y };
}

function findTranslation(xs, ys) {
  let result = {};
  for (const i in xs) {
    if (xs[i] in result) {
      if (result[xs[i]] !== ys[i]) return undefined;
    } else {
      result[xs[i]] = ys[i];
    }
  }
  return result;
}

function containsCycle(obj, start) {
  let current = obj[start];
  let list = [start];
  for (const key in obj) {
    if (list.includes(current)) return true;
    list.push(current);
    current = obj[current];
    if (current === undefined) return false;
  }
}

function pairs(obj) {
  // {key:att, key2:att2} -> [[key, att], [key2, att2]]
  return Object.entries(obj);
}

function isInvertible(obj) {
  const count = values(frequencies(values(obj)));
  for (const x of count) if (x > 1) return false;
  return true;
}

function reverseLookup(map, value) {
  for (const key in map) {
    if (map[key] === value) return key;
  }
  return "";
}

function reverseMap(map) {
  let result = {};
  for (const key in map) {
    if (!(map[key] in result)) {
      result[map[key]] = [];
    }
    result[map[key]].push(key);
  }
  return result;
}

function getDistance(p, q) {
  return [Math.abs(p.x - q.x), Math.abs(p.y - q.y)];
}

function touches4(p, q) {
  let dist = getDistance(p, q).sort();
  return dist[0] === 0 && dist[1] === 1;
}

function touches8(p, q) {
  if (touches4(p, q)) return true;
  let dist = getDistance(p, q);
  return dist[0] === 1 && dist[1] === 1;
}

function intersection(x, y) {
  let result = {};
  for (const key in x) {
    if (keys(y).includes(key) && y[key] === x[key]) result[key] = x[key];
  }
  return result;
}
