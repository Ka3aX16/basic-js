import { NotImplementedError } from '../extensions/index.js';

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
export default function deleteDigit(n) {
  const row = n.toString();
  for (let i = 0; i < row.length - 1; i++) {
    if (+row[i] < +row[i + 1]) {
      return +(row.slice(0, i) + row.slice(i + 1, row.length));
    }
  }
  return +(row.slice(0, row.length - 1));
}
