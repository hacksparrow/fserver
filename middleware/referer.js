// access control via Referer (not reliable, but hey atleast you can do something)

module.exports = function (referers) {

    return function (req, res, next) {

        // referer domain
        var referer = req.get('referer').split('/')[2];

        if ('whitelist' in referers && referers.whitelist.length) {
            if (referers.whitelist.indexOf(referer) > -1) { next(); }
            else { res.status(404).end(); }
        }
        else if ('blacklist' in referers && referers.blacklist.length) {
            if (referers.blacklist.indexOf(referer) > -1) { res.status(404).end(); }
            else { next(); }
        }
        else { next(); }

    }

}
