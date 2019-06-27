'use strict'

module.exports = function isInheritedObject (target, source) {
  var targetEmpty = !this.isFilledObject(target)
  var sourceEmpty = !this.isFilledObject(source)
  if (targetEmpty && sourceEmpty) return true // both are empty
  if (targetEmpty) return false // source {...} is not inherited of target {empty}
  if (sourceEmpty) return true // source {empty} is inherited of target {...}
  // both are not empty
  for (const key in source) {
    if (source[key] !== target[key]) return false // one key mismatch
  }
  return true
}
