'use strict';

const fs = {};

fs.readFile = (file, callback) => {
  if (!file) {
    callback(undefined, Buffer.from('file contents go here'))
  }
}

fs.writeFile = (file, buffer, callback) => {
  if(!file){
    callback(new Error('Invalid File'))
  } else if(!Buffer.isBuffer(buffer)) {
    callback(new Error('Invalid Buffer'))
  } else {
    callback(undefined, undefined)
  }
}

module.exports = fs;
