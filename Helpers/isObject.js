'use strict'

module.exports = function isObject (subject) {
  return subject && subject.constructor === Object
}
