function firstChar(string) {
  return string[0];
}

function lastChar(string) {
  return string[string.length - 1];
}

function isEmptyString(string) {
  return string.length === 0;
}

function formatTime(h, m, s, ms) {
  return `${h}:${m}:${s}.${ms}`;
}

function repeat(n, string) {
  let result = "";
  for (let i = 0; i < n; ++i) {
    result += string;
  }
  return result;
}

function join(strings, separator) {
  let result = "";
  if (strings.length > 0) {
    result += strings[0];
  }
  for (let i = 1; i < strings.length; ++i) {
    result += separator + strings[i];
  }
  return result;
}

function prefix(str, n) {
  return str.substr(0, n);
}

function suffix(str, n) {
  return str.substr(str.length - n);
}

function startsWith(beginning, string) {
  return prefix(string, beginning.length) === beginning;
}

function endsWith(ending, string) {
  return suffix(string, ending.length) === ending;
}

function isSubstringOf(substring, string) {
  if (substring === "") return true;
  for (let i = 0; i < string.length; ++i) {
    if (string.substr(i, substring.length) === substring) {
      return true;
    }
  }
  return false;
}

function split(string, separator) {
  let result = [];
  let s = "";
  for (let i = 0; i < string.length; ++i) {
    if (string[i] !== separator) {
      s += string[i];
    } else {
      result.push(s);
      s = "";
    }
  }
  result.push(s);
  return result;
}

function split2(string, separator) {
  let result = [];
  let s = "";
  for (let i = 0; i < string.length; ++i) {
    if (string[i] !== separator) {
      s += string[i];
    } else {
      if (!isEmptyString(s)) result.push(s);
      s = "";
    }
  }
  if (!isEmptyString(s)) result.push(s);
  return result;
}

function split3(string, separators) {
  let result = [];
  let s = "";
  for (let i = 0; i < string.length; ++i) {
    if (!isSubstringOf(string[i], separators)) {
      s += string[i];
    } else {
      if (!isEmptyString(s)) result.push(s);
      s = "";
    }
  }
  if (!isEmptyString(s)) result.push(s);
  return result;
}

function countHowManyTimesIn(string, char) {
  let result = 0;
  for (let i = 0; i < string.length; ++i) {
    if (string[i] === char) {
      ++result;
    }
  }
  return result;
}

function balanced(string) {
  let l = "(";
  let r = ")";
  return countHowManyTimesIn(string, l) === countHowManyTimesIn(string, r);
}

function removeSpaces(string) {
  let result = "";
  for (let char of string) {
    if (char !== " ") result += char;
  }
  return result;
}

function equalIgnoringSpaces(s1, s2) {
  return removeSpaces(s1) === removeSpaces(s2);
}
