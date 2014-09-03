// responsible for making file serving possible
var express = require('express');

module.exports = function (fserver) {

    return function (directories) {



        return {

            // mode can be stream, download
            serveAs: function (mode) {

                directories.forEach(function (directory) {

                    if (mode == 'download') {
                        fserver.use(express.static(directory, { index: false, setHeaders: function (res, path) {
                                res.attachment(path);
                            }
                        }))
                    }
                    // default is octet-stream
                    else fserver.use(express.static(directory))

                })

            },

            // default serve option - stream
            serve: function () {
                directories.forEach(function (directory) {
                    fserver.use(express.static(directory))
                })
            }

        }




    }

}
