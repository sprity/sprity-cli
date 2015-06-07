'use strict';

var sprity = require('sprity');
var log = require('../lib/log');
var scmd = require('./sprity-command');

var command = function (opts) {
  opts.cli = true;
  opts.logger = log;
  if (opts['no-sort']) {
    opts.sort = false;
  }

  sprity.create(opts, function (err) {
    if (err) {
      log.error(err.toString());
      if (err.reason) {
        log.debug(err.reason);
      }
    }
    else {
      log.success('Sprite created in ' + opts.out);
    }
  });
};

module.exports = function (parser) {
  scmd(parser, 'create')
    .callback(command)
    .help('create sprites');
};
