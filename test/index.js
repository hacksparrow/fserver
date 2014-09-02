var fserver = require('../');
var conf =  require('./config');

// middleware
fserver.use(fserver.referer(conf.referers));
fserver.use(fserver.limiter(conf.limiter));
fserver.use(fserver.ip(conf.ips));

// directories to serve files from
fserver.serve(conf.directories);

fserver.get('/', function (req, res) {
    res.send(conf.hostname);
})

fserver.listen(conf.port, function () {
    console.log('fserver started at %s', conf.port);
})
