
module.exports = {

    appDir: __dirname,
    hostname: 'www.example.com',

    port: 9999,
    directories: ['public'],

    referers: {
        whitelist: ['www.example.com'],
        blacklist: []
    },

    ips: {
        whitelist: [],
        blacklist: []
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
