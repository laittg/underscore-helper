'use strict'

var path = require('path')
var fs = require('fs')

var helpers = {
  filterJsFilename,
  listdirSync,
  registerPrototypes
}

registerPrototypes(helpers, __dirname, './Helpers')

module.exports = helpers

/**
 * Core Helpers
 */

/**
 * Check for a valid .js file
 * @param {string} filename
 * @returns null if not match, or the file name (without extension)
 */
function filterJsFilename (filename) {
  var match = filename.match(/^([a-z].*)\.js$/)
  return match ? match[1] : null
}

/**
 * List folder structure using a json object
 * {
 *  file1: "/full/path/file1.ext",
 *  file2: "/full/path/file2.ext",
 *  dir1: {
 *    file1_1: "/full/path/dir1/file1_1.ext"
 *  }
 * }
 * @param {*} base base dir, usually __dirname
 * @param {*} dir the relative dir inside the base dir
 * @param {*} fileFilter file filter function, e.g. filterJsFilename
 * @param {*} action callback if fileFilter match
 */
function listdirSync (base, dir, fileFilter, action) {
  var list = {}
  var basedir = path.resolve(base, dir)
  fs.readdirSync(basedir).forEach(file => {
    var fullpath = path.resolve(basedir, file)
    var stat = fs.statSync(fullpath)
    if (stat.isDirectory()) {
      list[file] = this.listdirSync(null, fullpath, fileFilter, action)
    } else if (fileFilter) {
      let result = fileFilter(file)
      if (result) {
        list[result] = fullpath
        if (action) action(result, fullpath)
      } else {
        // fileFilter returns false, ignore this file
      }
    } else {
      list[file] = fullpath
    }
  })
  return Object.keys(list).length ? list : null
}

// load methods
function registerPrototypes (MODULE, baseDir, methodsFolder, isPrototype) {
  listdirSync(baseDir, methodsFolder, filterJsFilename, (method, fullpath) => {
    if (isPrototype) {
      MODULE.prototype[method] = require(fullpath)
    } else {
      MODULE[method] = require(fullpath)
    }
  })
}
