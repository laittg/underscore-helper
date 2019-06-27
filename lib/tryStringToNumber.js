'use strict'

module.exports = function tryStringToNumber (str) {
  if (!str || str.length > 9) return str
  if (str === 'false') return false
  if (str === 'true') return true
  // try to convert to number
  var num = +str
  // check if the result is not consistent
  return num.toString() !== str ? str : num
}
