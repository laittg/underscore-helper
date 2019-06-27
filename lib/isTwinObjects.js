'use strict'

module.exports = function isTwinObjects (target, source) {
  var targetEmpty = !this.isFilledObject(target)
  var sourceEmpty = !this.isFilledObject(source)
  if (targetEmpty && sourceEmpty) return true
  if (targetEmpty || sourceEmpty) return false
  return JSON.stringify(target) === JSON.stringify(source)
}
