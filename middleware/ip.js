// access control via IPs

module.exports = function (referers) {

    return function (req, res, next) {
    
        next();
    }

}
