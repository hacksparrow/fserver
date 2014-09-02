var expect = require('chai').expect;
var supertest = require('supertest');

describe('files module', function () {


    it('should serve files', function (done) {

        var fserver = require('../');
        var config =  require('./config');

        fserver.use(fserver.referer(config.referers));
        //fserver.use(fserver.limiter(config.limiter));
        //fserver.use(fserver.ip(config.ips));
        fserver.use(fserver.files(config.directories));

        var request = supertest(fserver);
        request.get('/files').expect(200);

    })


})
