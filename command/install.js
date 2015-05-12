'use strict';

var npm = require('npm');
var _ = require('lodash');
var Promise = require('bluebird');
var log = require('../lib/log');

var info = function (args) {
  return new Promise(function (resolve, reject) {
    npm.commands.info(args, true, function (e, r) {
      if (e) {
        reject(e);
      }
      else {
        resolve(r);
      }
    });
  });
};

var findModule = function (name) {
  return info([name])
    .then(function (res) {
      var found = false;
      _.each(res, function (mod) {
        if (_.includes(mod.keywords, 'sprity')) {
          found = mod.name;
        }
      });
      return found;
    })
    .catch(function () {
      return false;
    });
};

var install = function (name) {
  return new Promise(function (resolve, reject) {
    npm.commands.install([name], function (e) {
      if (e) {
        reject(e);
      }
      else {
        resolve(name);
      }
    });
  });
};

var command = function (opts) {
  npm.load({usage: false}, function (err) {
    if (err) {
      log.error(err.toString());
    }
    else {
      findModule(opts.name)
        .then(function (found) {
          if (!found) {
            return findModule('sprity-' + opts.name);
          }
          else {
            return found;
          }
        })
        .then(function (found) {
          if (!found) {
            throw new Error(opts.name + ' could not be found or is not compatible with sprity');
          }
          else {
            return install(found);
          }
        })
        .then(function (name) {
          log.success('Successfully installed ' + name);
        })
        .catch(function (e) {
          log.error(e.toString());
        });
    }
  });
};

module.exports = function (parser) {
  parser.command('install')
    .option('name', {
      position: 1,
      required: true,
      help: 'name of the image engine or style processor to install (e.g. canvas, sass)'
    })
    .callback(command)
    .help('install image processing engine');
};
