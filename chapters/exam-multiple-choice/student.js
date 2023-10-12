const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function choices(nChoices) {
  if (nChoices > 26 || nChoices < 1) return undefined;
  return letters.slice(0, nChoices);
}

function isValidAnswer(answer, nChoices) {
  let i = letters.indexOf(answer);
  if (i < 0) {
    return answer === "?";
  }
  return i < nChoices;
}

function isValidExam(answers, nChoices) {
  for (let i = 0; i < answers.length; ++i) {
    if (letters.indexOf(answers[i]) > nChoices) return false;
  }
  return true;
}

function grade(expected, actual, penalty) {
  if (expected === actual) return 1;
  else if (actual === "?") return 0;
  return penalty;
}

function gradeStudent(expected, actual, penalty) {
  let result = new Array(expected.length);
  for (let i = 0; i < expected.length; ++i) {
    result[i] = grade(expected[i], actual[i], penalty);
  }
  return result;
}

function gradeClass(expected, actual, penalty) {
  let result = [];
  actual.forEach((student) => {
    result.push(gradeStudent(expected, student, penalty));
  });
  return result;
}

function calculateGrade(points) {
  let som = points.reduce((a, b) => a + b);
  return Math.round((som / points.length) * 20);
}

function totalForStudent(gradeMatrix, studentIndex) {
  let result = calculateGrade(gradeMatrix[studentIndex]);
  if (result <= 0) return 0;
  return result;
}

function countCorrectAnswers(gradeMatrix, questionIndex) {
  return gradeMatrix.map((x) => x[questionIndex]).filter((x) => x === 1).length;
}

function easiestQuestions(gradeMatrix) {
  let result = [];
  let max = 0;
  for (let i = 0; i < gradeMatrix[0].length; ++i) {
    let x = countCorrectAnswers(gradeMatrix, i);
    if (x > max) {
      max = x;
      result = [i];
    } else if (x === max) result.push(i);
  }
  return result;
}

function bestStudent(gradeMatrix) {
  if (gradeMatrix.length === 1) return 0;
  let max = bestStudent(gradeMatrix.slice(0, gradeMatrix.length - 1));
  if (
    calculateGrade(gradeMatrix[max]) <
    calculateGrade(gradeMatrix[gradeMatrix.length - 1])
  ) {
    return gradeMatrix.length - 1;
  } else {
    return max;
  }
}
