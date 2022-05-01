const { NotImplementedError } = require('../extensions/index.js');

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
function repeater(str, options = {repeatTimes: 1, separator: '+', addition: '', additionRepeatTimes: 1, additionSeparator: '|'}) {
  let resultStr = '';
  let additionStr = '';

  options.repeatTimes = options.repeatTimes === undefined ? 1 : options.repeatTimes;
  options.additionRepeatTimes = options.additionRepeatTimes === undefined ? 1 : options.additionRepeatTimes;
  options.separator = options.separator === undefined ? '+' : options.separator;
  options.additionSeparator = options.additionSeparator === undefined ? '|' : options.additionSeparator;


  if (options.addition !== undefined) {
    for (let i = 0; i < options.additionRepeatTimes; i++) {
      if (i + 1 === options.additionRepeatTimes) {
        additionStr += options.addition;
        break;
      }
      additionStr += options.addition + options.additionSeparator;
    }
  }
  

  for (let i = 0; i < options.repeatTimes; i++) {
    if (i + 1 === options.repeatTimes) {
      resultStr += str + additionStr;
      break;
    }
    resultStr += str + additionStr + options.separator;
  }
  return resultStr;
}

console.log(repeater('la', { repeatTimes: 3 }));

module.exports = {
  repeater
};
