var fserver = require('../');
var conf =  require('./config');

// middleware
fserver.use(fserver.referer(conf.referers));
fserver.use(fserver.limiter(conf.limiter));
fserver.use(fserver.ip(conf.ips));
//fserver.use(fserver.serve(conf.directories));

// ready the dirs to serve files
// stream or download; defaults to stream, use.serve() for default stream
fserver.directories(conf.directories).serveAs('download'); 

fserver.get('/', function (req, res) {
    res.send(conf.hostname);
})

fserver.listen(conf.port, function () {
    console.log('fserver started at %s', conf.port);
})
