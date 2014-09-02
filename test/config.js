
module.exports = function () {

    port: 9999,
    directories: ['./files'],

    referers: {
        whitelist: [], // can specify regexp patterns, if anything here, everything is blacklisted
        blacklist: [] // can specify regexp patterns
    },

    ips: {
        whitelist: [], // can specify regexp patterns, if anything here, everything is blacklisted
        blacklist: [] // can specify regexp patterns
    },

    limits: {

        per: 'day', // hour, day, 
        user: {
            size: 1024,
            count: 11,
        },
        ip: {
            size: 1024,
            count: 11,
        }
        
    }

}
