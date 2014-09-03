var express = require('express');
var fserver = express();

fserver.disable('x-powered-by');

// fserver middleware
fserver.access = require('./middleware/access');
fserver.referer = require('./middleware/referer');
fserver.ip = require('./middleware/ip');
fserver.limiter = require('./middleware/limiter');
fserver.directories = require('./middleware/serve')(fserver); // named directories because it returns an interface for setting dirs

module.exports = fserver;
