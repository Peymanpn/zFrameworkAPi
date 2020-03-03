var config = {
    port: 5001,
    
    secret: 'nemomolamoral',
    tokenExpiresInSeconds: 86400, // expires in 24 hours

    sqlConfig: {
        user: 'SA',
        password: '4RF3ed2WS1qa',
        server: '139.162.207.107', // You can use 'localhost\\instance' to connect to named instance
        database: 'eManage',

        options: {
            encrypt: true // Use this if you're on Windows Azure
        }
    }
}

module.exports = config;