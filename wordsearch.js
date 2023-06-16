const wordSearch = (letters, word) => {
  const horizontalJoin = letters.map(ls => ls.join(''));
  const verticalJoin = letters[0].map((col, i) => letters.map(row => row[i]).join(''));

  for (const l of horizontalJoin) {
    if (l.includes(word)) {
      return true;
    }
  }
  for (const j of verticalJoin) {
    if (j.includes(word)) {
      return true;
    }
  }
  return false;
};

module.exports = wordSearch;