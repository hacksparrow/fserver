
var express = require('express');
var fserver = express();

// fserver middleware
fserver.referer = require('./modules/referer');
fserver.ip = require('./modules/ip');
fserver.files = require('./modules/files');

module.exports = fserver;
