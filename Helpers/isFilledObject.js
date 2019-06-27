'use strict'

module.exports = function isFilledObject (subject) {
  return this.isObject(subject) && Object.keys(subject).length
}
