// generic access control

module.exports = function (referers) {

    return function (req, res, next) {
    
        next();
    }

}
