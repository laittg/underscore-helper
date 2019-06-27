'use strict'

module.exports = function isSingleKeyObject (object, checkKeys) {
  if (!object) return false

  var objectKeys = Object.keys(object)

  if (objectKeys.length !== 1) return false

  var thekey = objectKeys[0]

  if (!Array.isArray(checkKeys)) return thekey === checkKeys ? thekey : false

  for (let index = 0; index < checkKeys.length; index++) {
    if (thekey === checkKeys[index]) return thekey
  }

  return false
}
