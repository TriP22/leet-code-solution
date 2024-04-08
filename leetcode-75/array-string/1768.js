/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
  let length1 = word1.length;
  let length2 = word2.length;

  let result = "";

  for (let i = 0; i < Math.min(length1, length2); i++) {
    result = result + (word1[i] ? word1[i] : "") + (word2[i] ? word2[i] : "");
  }

  if (length1 === length2) {
    return result;
  }
  return (
    result +
    (length2 > length1 ? word2 : word1).slice(
      Math.min(word1.length, word2.length)
    )
  );
};
