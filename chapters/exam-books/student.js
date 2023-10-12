/* Cristina Marques r0780830, 08/01/2010, UCLL */
/* EXAMEN FUNCTIES */
function titles(books) {
  return books.map(x => x.title);
}

function titlesBetween(books, startYear, endYear) {
  return titles(books.filter(x => x.publicationYear >= startYear && x.publicationYear <= endYear));
}

function bookCountBetween(books, startYear, endYear) {
  return titlesBetween(books, startYear, endYear).length;
}

function yearsActive(books) {
  let years = getYears(books);
  let min = Math.min(...years);
  let max = Math.max(...years);
  return max - min + 1;
}

function bookCountByAuthor(books) {
  //voorbeeld: {auteur1: aantal1, auteur2: aantal2}
  let result = {};
  for (const book of books) {
      if (!(book.author in result)) result[book.author] = 0;
      result[book.author]++;
  }
  return result;
}

function capitalizeTitle(title) {
  let result = [...title]; //Because arrays are easier to handle than strings
  let beginWord = true; //A word must begin with an UpperCase, also after a space
  for (let i = 0; i < result.length; ++i) {
      if (beginWord) {
          result[i] = result[i].toUpperCase();
          beginWord = false;
      } else {
          if (result[i] === ' ') {
              beginWord = true;
          } else {
              result[i] = result[i].toLowerCase();
          }
      }
  }
  return result.join(''); //Join back into string
}

function distribute(xs, n) {
  let result = makeEmpty2dArray(n);
  let current = 0;
  for (let i = 0; i < xs.length; ++i) {
      result[current].push(xs[i]);
      current < n - 1 ? current++ : current = 0;
  }
  return result;
}

function center(pageWidth, lines) {
  let pageHeight = lines.length;
  let result = makeEmpty2dArray(pageHeight); //So we can push to result
  for (let i = 0; i < pageHeight; ++i) {
      let letters = lines[i].length;
      let spatiesLeft = Math.floor((pageWidth - letters) / 2)
      let spatiesRight = pageWidth - letters - spatiesLeft;
      while (spatiesLeft > 0) {
          result[i].push(' ');
          --spatiesLeft;
      }
      for (const l of lines[i]) { //letters
          result[i].push(l);
      }
      while (spatiesRight > 0) {
          result[i].push(' ');
          --spatiesRight;
      }
  }
  return result;
}

function mask(string) {
  if (string.length === 0) return '';
  let left = string[0];
  if (left !== ' ') left = '*';
  return left + mask(string.substring(1));
}

/* HULPFUNCTIES */
function getYears(books) {
  return books.map(x => x.publicationYear);
}

function makeEmpty2dArray(n) {
  let result = [];
  for (let i = 0; i < n; ++i) {
      result.push([]);
  }
  return result;
}

// :-)