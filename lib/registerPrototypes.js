'use strict'

module.exports = function registerPrototypes (MODULE, baseDir, methodsFolder, isPrototype) {
  this.listdirSync(baseDir, methodsFolder, filterJsFilename, (method, fullpath) => {
    if (isPrototype) {
      MODULE.prototype[method] = require(fullpath)
    } else {
      MODULE[method] = require(fullpath)
    }
  })
}
