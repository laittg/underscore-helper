'use strict'

// mergeObjects_IfEmptySetNull
module.exports = function (target, source) {
  var merged = this.mergeObjects(target, source)
  if (this.isFilledObject(merged)) {
    return merged
  } else {
    return null
  }
}
