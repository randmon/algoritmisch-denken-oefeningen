function isValidDistanceMatrix(nss) {
  l = nss.length;
  if (l === 0 || l !== nss[0].length) return false;
  for (let i = 0; i < l; ++i) {
    for (let j = 0; j < l; ++j) {
      if (i === j && nss[i][j] !== 0) return false;
      else if (nss[i][j] !== nss[j][i]) return false;
    }
  }
  return true;
}

function distance(distances, cities, from, to) {
  if (!cities.includes(from) || !cities.includes(to)) return -1;
  return distances[cities.indexOf(from)][cities.indexOf(to)];
}

function areValidCities(cities, itinerary) {
  return itinerary.every((i) => cities.includes(i));
}

function pairs(xs) {
  if (xs.length < 2) return [];
  let result = [];
  result.push([xs[0], xs[1]]);
  return result.concat(pairs(xs.slice(1)));
}

function isValidItinerary(distances, cities, itinerary) {
  if (!areValidCities(cities, itinerary)) return false;
  let ps = pairs(itinerary);
  for (let p of ps) {
    if (distance(distances, cities, p[0], p[1]) === -1) return false;
  }
  return true;
}

function totalDistance(distances, cities, itinerary) {
  if (!isValidItinerary(distances, cities, itinerary)) return -1;
  let ps = pairs(itinerary);
  let d = 0;
  ps.forEach((p) => (d += distance(distances, cities, p[0], p[1])));
  return d;
}

function reachableFrom(distances, cities, from) {
  let result = {};
  for (let c of cities) {
    let d = distance(distances, cities, from, c);
    if (d > 0) result[c] = d;
  }
  return result;
}

// function expand(distances, cities, itinerary) {

// }
