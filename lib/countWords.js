'use strict'

module.exports = function (text) {
  var t = text.replace(/[.,-_?!]/g, '').trim()
  if (!t) return 0
  var spaces = t.match(/\s+/g)
  if (!spaces) return 1
  return spaces.length + 1
}
