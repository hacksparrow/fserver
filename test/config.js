
module.exports = {

    appDir: __dirname,
    hostname: 'www.example.com',

    port: 9999,
    directories: ['public'],

    referers: {
        whitelist: ['www.example.com'], // can specify regexp patterns, if anything here, everything is blacklisted
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
