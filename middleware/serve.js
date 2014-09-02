// responsible for making file serving possible

var express = require('express');

module.exports = function (fserver) {

    return function (directories) {

        directories.forEach(function (directory) {
            fserver.use(express.static(directory));
        })

        return fserver;
    }

}
