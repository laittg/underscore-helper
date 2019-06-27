'use strict'

const alphanum = 'abcdefghijklmnopqrstuvwxyz0123456789'.split('')

module.exports = function isPrElement (name) {
  var last2 = name.substr(name.length - 2)
  var beforeLast2 = name.substr(name.length - 3, 1)
  return last2 === 'Pr' && alphanum.indexOf(beforeLast2) >= 0
}
