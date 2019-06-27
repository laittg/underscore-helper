'use strict'

/**
 * Check for a valid .js file
 * @param {string} filename
 * @returns null if not match, or the file name (without extension)
 */
module.exports = function (filename) {
  var match = filename.match(/^([a-z].*)\.js$/)
  return match ? match[1] : null
}
