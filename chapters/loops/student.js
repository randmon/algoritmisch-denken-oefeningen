function sum(n) {
  return sumRange(0, n);
}

function sumRange(from, to) {
  let resultaat = 0;
  for (let i = 0; i < to - from + 1; ++i) {
    resultaat += from + i;
  }
  return resultaat;
}

function factorial(n) {
  let resultaat = 1;
  for (let i = 0; i < n; ++i) {
    resultaat *= n - i;
  }
  return resultaat;
}

function multiply(a, b) {
  let resultaat = 0;
  for (let i = 0; i < b; ++i) {
    resultaat += a;
  }
  return resultaat;
}

function power(a, b) {
  let resultaat = 1;
  for (let i = 0; i < b; ++i) {
    resultaat = multiply(resultaat, a);
  }
  return resultaat;
}

function thanos(population, target) {
  let resultaat = 0;
  while (population > target) {
    population = Math.ceil(population / 2);
    ++resultaat;
  }
  return resultaat;
}

function amazon(n) {
  let kost1 = 50;
  let kost2 = 50;
  while (n > 0) {
    let next1 = kost2 * 0.95;
    let next2 = kost1 * 1.1;
    kost1 = next1;
    kost2 = next2;
    --n;
  }
  return kost2;
}

function digitSum(n) {
  let resultaat = 0;
  while (n > 0) {
    let lastDigit = n % 10;
    resultaat += lastDigit;
    n = Math.floor(n / 10);
  }
  return resultaat;
}

function divisibleBy3(n) {
  while (n > 10) {
    n = digitSum(n);
  }
  return n === 0 || n === 3 || n === 6 || n === 9;
}

function sum2(n) {
  return sumRange(1, n);
}

function factorial2(n) {
  return factorial(n);
}

function fibonacci(n) {
  let a = 0;
  let b = 1;
  for (let i = 0; i < n; i++) {
    let nextA = a + b;
    b = a;
    a = nextA;
  }
  return b;
}

function isDivisor(x, n) {
  return n % x === 0;
}

function countDivisors(n) {
  return getDivisors(n).length;
}

function getDivisors(n) {
  let divisors = [];
  for (let i = n; i > 0; i--) {
    if (isDivisor(i, n)) {
      divisors.push(i);
    }
  }
  return divisors;
}

function getCommonDivs(div1, div2) {
  let commonDivs = [];
  for (let i = 0; i < div1.length; i++) {
    for (let h = 0; h < div2.length; h++) {
      if (div1[i] === div2[h]) {
        commonDivs.push(div1[i]);
      }
    }
  }
  return commonDivs;
}

function gcd(x, y) {
  //grootste gemene deler
  let div1 = getDivisors(x);
  let div2 = getDivisors(y);
  return Math.max(...getCommonDivs(div1, div2));
}

function lcm(x, y) {
  //kleinste gemeen veelvoud
  let i = Math.max(x, y);
  while (!isDivisor(x, i) || !isDivisor(y, i)) {
    i++;
  }
  return i;
}

function isPrime(n) {
  for (let i = 2; i < n; i++) {
    if (isDivisor(i, n)) return false;
  }
  return n > 1;
}

function countPrimes(n) {
  let count = 0;
  for (let i = 0; i <= n; i++) {
    if (isPrime(i)) count++;
  }
  return count;
}

function power2(a, b) {
  return power(a, b);
}

function sumRange2(from, to) {
  return sumRange(from, to);
}

function invest(years) {
  return 1000 * 1.05 ** years + (100 / 0.05) * (1.05 ** years - 1);
}

function invest2(goal) {
  let x = 1000;
  let years = 0;
  while (x < goal) {
    years++;
    x = invest(years);
  }
  return years;
}

function pythagoreanTriples(n) {
  let count = 0;
  for (let a = 1; a <= n; a++) {
    for (let b = 1; b <= n; b++) {
      let c = Math.sqrt(a ** 2 + b ** 2);
      if (c % 1 === 0 && c <= n) {
        count++;
      }
    }
  }
  return count;
}

function pythagoreanTriples2(n) {
  let count = 0;
  for (let a = 1; a <= n; a++) {
    for (let b = a; b <= n; b++) {
      let c = Math.sqrt(a ** 2 + b ** 2);
      if (c % 1 === 0 && c <= n) {
        count++;
      }
    }
  }
  return count;
}

// DICE
let diceSpots = 6;

function dice3(targetSum) {
  return diceRecursive(3, targetSum);
}

function dice4(targetSum) {
  return diceRecursive(4, targetSum);
}

function dice2(targetSum) {
  let count = 0;
  for (let a = 1; a <= diceSpots; a++) {
    for (let b = 1; b <= diceSpots; b++) {
      if (a + b === targetSum) ++count;
    }
  }
  return count;
}

function diceRecursive(diceAmount, targetSum) {
  let total = 0;
  if (diceAmount > 2) {
    for (let i = 1; i <= diceSpots; i++) {
      let count2 = diceRecursive(diceAmount - 1, targetSum - i);
      total += count2;
    }
  } else {
    return dice2(targetSum);
  }
  return total;
}

function sqrt(n) {
  let x = 0;
  let min = 0;
  let max = n;
  const margin = 0.01;
  while (x ** 2 > n + margin || x ** 2 < n - margin) {
    x = min + (max - min) / 2;
    if (x ** 2 > n) {
      max = x;
    } else {
      min = x;
    }
  }
  return x;
}
