const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  arrDepth = 1
  nestedArrDepth = 1

  calculateDepth(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] instanceof Array) {
        this.nestedArrDepth++;

        if (this.nestedArrDepth > this.arrDepth) {
          this.arrDepth = this.nestedArrDepth
          if (i + 1 === arr.length)
            this.nestedArrDepth = 1
        }
        
        this.calculateDepth(arr[i])
      }
    }
    return this.arrDepth
  }
}

depthCalculator = new DepthCalculator()
console.log(depthCalculator.calculateDepth([1, 2, 3, 4, [1, 2, [1, 2, [[[]]]]], 5, [1, [[[[[[]]]]]]]]))


module.exports = {
  DepthCalculator
};
