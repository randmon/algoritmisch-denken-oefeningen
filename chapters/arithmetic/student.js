//Operations

function calculateAverage(...numbers) {
  let sum = numbers.reduce((a, b) => a + b, 0);
  return sum / numbers.length;
}

//Oefeningen

function five() {
  return 5;
}

function average() {
  return calculateAverage(135, 471);
}

function average2(x, y) {
  return calculateAverage(x, y);
}

function average3(x, y, z) {
  return calculateAverage(x, y, z);
}

function distance(x, y) {
  return (x ** 2 + y ** 2) ** (1 / 2);
}

function busesNeeded(people, busCapacity) {
  return Math.ceil(people / busCapacity);
}

function sugar(pies) {
  return Math.ceil(0.25 * pies);
}

function candyPerChild(children, candy) {
  return Math.floor(candy / children);
}

function leftoverCandy(children, candy) {
  return candy % children;
}

function hours(totalMinutes) {
  return Math.floor(totalMinutes / 60);
}

function minutes(totalMinutes) {
  return totalMinutes % 60;
}

function communicationCosts(seconds) {
  return Math.ceil(seconds / 60) * 0.2;
}

function distance2(x1, y1, x2, y2) {
  let dx = x2 - x1;
  let dy = y2 - y1;
  return (dx ** 2 + dy ** 2) ** 0.5;
}

function cake(eggs) {
  return Math.floor(eggs / 3);
}

function cake2(eggs, flour) {
  return Math.min(Math.floor(eggs / 4), Math.floor(flour / 250));
}

function cake3(eggs, flour, sugar, butter) {
  return Math.min(
    Math.floor(eggs / 4),
    Math.floor(flour / 250),
    Math.floor(sugar / 250),
    Math.floor(butter / 250)
  );
}

function roundToMultiple(n, multipleOf) {
  return Math.round(n / multipleOf) * multipleOf;
}

function middle(a, b, c) {
  let som = a + b + c;
  return som - Math.min(a, b, c) - Math.max(a, b, c);
}

//Extra oefeningen

function boxArea(width, height, depth) {
  return width * height * 2 + width * depth * 2 + height * depth * 2;
}

//returns hoeveel percent k is van n
function toPercent(k, n) {
  return (k * 100) / n;
}

//returns hoeveel p% van n is
function percentOf(p, n) {
  return (p * n) / 100;
}

function totalMinutes(hours, minutes) {
  return hours * 60 + minutes;
}

function timeDifference(h1, m1, h2, m2) {
  let t1 = totalMinutes(h1, m1);
  let t2 = totalMinutes(h2, m2);
  return t2 - t1;
}

//returns de laatste cijfer van getal n
function lastDigit(n) {
  return n % 10;
}

function dropLastDigit(n) {
  return (n - lastDigit(n)) / 10;
}

function penultimateDigit(n) {
  return lastDigit(dropLastDigit(n));
}

function celsiusToFahrenheit(celsius) {
  return celsius * 1.8 + 32;
}

function fahrenheitToCelsius(fahrenheit) {
  return (fahrenheit - 32) / 1.8;
}

function nextPlayer(currentPlayer, playerCount) {
  if (currentPlayer === playerCount - 1) {
    return 0;
  }
  return currentPlayer + 1;
}

function previousPlayer(currentPlayer, playerCount) {
  if (currentPlayer === 0) {
    return playerCount - 1;
  }
  return currentPlayer - 1;
}

function nextPlayer2(currentPlayer, playerCount) {
  if (currentPlayer === playerCount) {
    return 1;
  }
  return currentPlayer + 1;
}

function previousPlayer2(currentPlayer, playerCount) {
  if (currentPlayer === 1) {
    return playerCount;
  }
  return currentPlayer - 1;
}

function vat(amount) {
  return amount * 1.21;
}

function coins(amount) {
  let x = amount;
  //How many possible 5€ coins
  let a = Math.floor(x / 5);
  x -= a * 5;
  //How many possible 2€ coins
  let b = Math.floor(x / 2);
  x -= b * 2;
  //x is now how many possible 1€ coins
  return a + b + x;
}

function abs(n) {
  return Math.max(n, -n);
}

function sign(n) {
  return abs(n) / n;
}
