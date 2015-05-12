'use strict';

var fs = require('vinyl-fs');
var sprity = require('sprity');
var log = require('../lib/log');
var scmd = require('./sprity-command');

var command = function (opts) {
  opts.cli = true;
  opts.logger = log;
  if (opts['no-sort']) {
    opts.sort = false;
  }
  log.log('Watching for file changes ...');
  fs.watch(opts.src, function () {
    sprity.create(opts, function () {
      log.success('Sprite created in ' + opts.out);
    });
  });
};

module.exports = function (parser) {
  scmd(parser, 'watch')
    .callback(command)
    .help('watch for image changes and create sprites on change');
};
