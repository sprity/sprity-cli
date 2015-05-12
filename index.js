#!/usr/bin/env node
'use strict';

var parser = require('nomnom');

require('./command/create')(parser);
require('./command/watch')(parser);
require('./command/install')(parser);

parser.script('sprity').parse();
