'use strict';

const files = require('./lib/files');

const inputFieldName = process.argv[2];
const buffer = process.argv[3];

files.loadFile(inputFieldName, buffer);
