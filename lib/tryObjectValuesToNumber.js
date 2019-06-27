'use strict'

module.exports = function tryObjectValuesToNumber (object) {
  for (const key in object) {
    object[key] = this.tryStringToNumber(object[key])
  }
}
