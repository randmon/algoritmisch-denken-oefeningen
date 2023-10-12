function min2(x, y) {
  return Math.min(x, y);
}

function abs(n) {
  return Math.abs(n);
}

function sign(n) {
  if (n > 0) {
    return 1;
  } else if (n < 0) {
    return -1;
  } else {
    return 0;
  }
}

//Dagen en maanden
function has30Days(month) {
  return month === 4 || month === 6 || month === 9 || month === 11;
}

function has31Days(month) {
  return (
    month === 1 ||
    month === 3 ||
    month === 5 ||
    month === 7 ||
    month === 8 ||
    month === 10 ||
    month === 12
  );
}

function has29Days(month, year) {
  return month === 2 && isLeapYear(year);
}

function has28Days(month, year) {
  return month === 2 && !isLeapYear(year);
}

function isLeapYear(year) {
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      return year % 400 === 0;
    }
    return true;
  }
  return false;
}

function daysInMonth(month, year) {
  if (has31Days(month)) {
    return 31;
  } else if (has30Days(month)) {
    return 30;
  } else if (has29Days(month, year)) {
    return 29;
  } else {
    return 28;
  }
}

function passPercentage(a, b, c) {
  let count = 0;
  if (a >= 10) ++count;
  if (b >= 10) ++count;
  if (c >= 10) ++count;
  return Math.round((count * 100) / 3);
}

function democracy(a, b, c, d, e) {
  let resultaat = 0;
  let stemmers = [a, b, c, d, e];
  stemmers.forEach((stemmer) => {
    if (stemmer) ++resultaat;
  });
  return resultaat >= stemmers.length / 2;
}

function totalOrderCost(amount) {
  let totaal = amount;
  if (amount < 100) {
    totaal += 10;
  } else if (amount >= 200) {
    totaal -= amount * 0.1;
  }
  return totaal;
}

function quadrants(x, y) {
  if (x === 0 || y === 0) return 0;
  if (x > 0) {
    if (y > 0) return 1;
    else return 2;
  } else {
    if (y > 0) return 4;
    else return 3;
  }
}

function ticket(age) {
  if (age < 12) return 0;
  if (age >= 18) return 40;
  return 30;
}

function calculateDistance(x1, y1, x2, y2) {
  return Math.pow(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2), 1 / 5);
}

function closest(x, y) {
  let dist1 = calculateDistance(x, y, -40, 30);
  let dist2 = calculateDistance(x, y, 60, 20);
  let dist3 = calculateDistance(x, y, 0, -50);

  let closest = Math.min(dist1, dist2, dist3);
  if (closest === dist1) return 1;
  if (closest === dist2) return 2;
  if (closest === dist3) return 3;
}

function darts(x, y) {
  if (x > 100 || x < -100 || y > 75 || y < -75) {
    return 0; //buiten het bord
  } else if (y > -1 && y < 5) {
    return 20;
  } else {
    let resultaat;
    if (y > 5) {
      //bovenste grijze vakjes
      if (x < -50) resultaat = 1;
      else if (x < 0) resultaat = 7;
      else if (x < 50) resultaat = 8;
      else resultaat = 4;
    } else {
      //onderste grijze vakjes
      if (x < -50) resultaat = 5;
      else if (x < 0) resultaat = 3;
      else if (x < 50) resultaat = 2;
      else resultaat = 6;
    }
    if (Math.abs(y) > 55) {
      //groene vakjes
      resultaat *= 2;
    }
    return resultaat;
  }
}

function min3(x, y, z) {
  return min2(x, min2(y, z));
}

function min4(a, b, c, d) {
  return min2(min2(a, b), min2(c, d));
}

function winner(score1, score2, score3) {
  let scores = [score1, score2, score3];
  highscore = Math.max(score1, score2, score3);
  let resultaat = "";
  for (let i = 0; i < scores.length; i++) {
    if (scores[i] === highscore) {
      resultaat += i + 1;
    }
  }
  return parseInt(resultaat);
}
