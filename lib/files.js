'use strict';

const fs = require('fs'); // node js library
const util = require('util'); // npm for promisify?

require('./logger.js');

const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

const files = {};

files.loadFile = async file => {
  const buffer = await readFile(file);
} 

files.saveFile = async (file, buffer, error) => {
try{
  await writeFile(file, buffer);
  console.log('File written/saved');
} catch (error) {
  logger.error(error);
}
}

files.convertBuffer = async buffer => {
  buffer = await readFile(file);
  buffer.toSring().toUpperCase();
  return Buffer.from(buffer);
}

files.alterFile = async file => {git
  const buffer = await readFile(file);
  
  // convert the buffer into a uppercased version of its string representation
  // save the file
  // on success emit a success status ("0" in UNIX means "success")
  // const status = {
  //   status: 0,
  //   file: file,
  //   message: 'Saved Properly'
  // }
  // events.emit('save', status)
  // on failure emit a failure status
  // const status = { status: 1 }, etc.
}


module.exports = files;
