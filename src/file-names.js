const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(arr) {
  let count = 0;
  let arrCount = [];
  for(let i = 0; i < arr.length; i++) {
    count = 0;
    for(let j = 0; j <= i; j++) {
      if (arr[i] === arr[j]) {
        count++;
      }
    }
    if (count > 1) {
      arrCount.push(`${arr[i]}(${count - 1})`);
    } else {
      arrCount.push(arr[i]);
    }
  }
  let isCoincidence = false;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        isCoincidence = true;
        break;
      }
    }
    if (isCoincidence) {
      break;
    }
  }

  if (isCoincidence === true) {
    return renameFiles(arrCount);
  } else {
    return arrCount;
  }
}

renameFiles(['a', 'b', 'cd', 'b ', 'a(3)'])

module.exports = {
  renameFiles
};