var express = require('express');
var fserver = express();

// fserver middleware
fserver.access = require('./middleware/access');
fserver.referer = require('./middleware/referer');
fserver.ip = require('./middleware/ip');
fserver.limiter = require('./middleware/limiter');
fserver.serve = require('./middleware/serve')(fserver);

module.exports = fserver;
