const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
 function getEmailDomain(email) {
  let emailArr = email.split('');
  while (email.match(/@/g).length > 1) {
    emailArr = emailArr.slice(email.indexOf('@') + 1, email.length)
    email = emailArr.join('')
  }

  if (email.match(/@/g) !== null) {
    emailArr = emailArr.slice(email.indexOf('@') + 1, email.length)
    email = emailArr.join('')
  }
  return emailArr.join('');
  
}

module.exports = {
  getEmailDomain
};
