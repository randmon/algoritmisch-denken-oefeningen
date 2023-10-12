function isPositive(x) {
  return x >= 0;
}

function isNegative(x) {
  return x <= 0;
}

function isDivisibleBy(x, y) {
  return x % y === 0;
}

function inRange(x, min, max) {
  return x >= min && x <= max;
}

function pingPong(score1, score2) {
  return score1 >= 11 && score1 - score2 >= 2;
}

function freeTicket(age) {
  return age < 12 || age >= 65;
}

function has30Days(month) {
  return [4, 6, 9, 11].includes(month);
}

function has31Days(month) {
  return [1, 3, 5, 7, 8, 10, 12].includes(month);
}

function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

function has28Days(month, year) {
  return month === 2 && !isLeapYear(year);
}

function has29Days(month, year) {
  return month === 2 && isLeapYear(year);
}

function isValidDate(day, month, year) {
  if (day > 31 || day < 1 || month > 12 || month < 1) {
    return false;
  } else if (has31Days(month)) {
    return day <= 31;
  } else if (has30Days(month)) {
    return day <= 30;
  } else if (has29Days(month, year)) {
    return day <= 29;
  } else {
    return day <= 28;
  }
}

function majority(x, y, z) {
  return (x && y) || (x && z) || (y && z);
}

function isHigherCard(x, y) {
  return (x === 1 && y !== 1) || (x > y && y !== 1);
}

function earlier(h1, m1, h2, m2) {
  return h1 * 60 + m1 < h2 * 60 + m2;
}

function isInteger(x) {
  return x % 1 === 0;
}

function isPerfectSquare(x) {
  return isInteger(Math.sqrt(x));
}

function isLiquidWaterAt(temperature) {
  return temperature > 0 && temperature < 100;
}
