'use strict';

const events = require('./events.js');

const logger = {};

logger.save = payload => {
  console.log(payload);
}

logger.err = payload => {
  console.log(payload);
}

// add an events.on for file save that calls logger.save
// add an events.on for file error that calls logger.err

module.exports = logger;
