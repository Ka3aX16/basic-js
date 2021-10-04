import { NotImplementedError } from '../extensions/index.js';

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater(str, options) {
	if (!options.hasOwnProperty('separator')) {
		options.separator = '+';
	 }
	 if (!options.hasOwnProperty('additionSeparator') && options.hasOwnProperty('additionRepeatTimes')) {
		options.additionSeparator = '|';
	 }
	 if (options.hasOwnProperty('addition') && options.addition === null) {
			options.addition = 'null';
	 }
	 let addArray = new Array(options.additionRepeatTimes).fill(options.addition);
	 let addString = addArr.join(options.additionSeparator);
	 let partStrting = str + addStr;
	 let resultArray = new Array(options.repeatTimes).fill(partStr);
	 let result = resultArr.join(options.separator);
  return result;
};
