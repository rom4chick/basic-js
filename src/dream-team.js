const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(mem) {
  let superName = '';
  if (Array.isArray(mem)) {

    for (let i = 0; i < mem.length; i++) {
      if (typeof mem[i] === 'string') { 
        mem[i] = mem[i].trim();
        superName += mem[i][0].toUpperCase();
      }
    }
    return superName.split('').sort().join('')
  }
  return false;
}

module.exports = {
  createDreamTeam
};