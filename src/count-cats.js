import { NotImplementedError } from '../extensions/index.js';

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
export default function countCats(hiddenEars) {
  var foundCats = [];
  for (var i = 0; i < hiddenEars.length; i++) {
    var cats = hiddenEars[i].filter(ears => ears === "^^");
    foundCats = [...foundCats, ...cats];
  }
  return foundCats.length;
};
