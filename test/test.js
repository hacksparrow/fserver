var fserver = require('../');
var config =  require('./config');

fserver.use(fserver.limiter(config.limits));
fserver.use(fserver.referers(config.referers));
fserver.use(fserver.ips(config.ips));
fserver.use(fserver.files(config.directories));

fserver.listen(config.port, function () {
    console.log('fserver listening on', config.port);
})
