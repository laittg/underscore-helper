'use strict'

module.exports = function mergeObjects (target, source) {
  if (!this.isObject(target)) {
    return source
  } else if (!this.isObject(source)) {
    return target
  } else {
    return Object.assign(target, source)
  }
}
