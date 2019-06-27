'use strict'

// assignValue_ConvertToArrayIfKeyExisted
module.exports = function (object, key, value) {
  if (!object[key]) {
    object[key] = value
  } else if (Array.isArray(object[key])) {
    object[key].push(value)
  } else {
    let oldvalue = object[key]
    object[key] = []
    object[key].push(oldvalue)
    object[key].push(value)
    oldvalue = null
  }
}
