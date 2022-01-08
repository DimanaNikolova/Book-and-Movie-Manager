const serverConfig = {
    development: {
        PORT: 5000,
        DB_CONNECTION: 'mongodb+srv://dimana:dimana@moviesandbooksmanager.bt1pz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
        CLIENT_HOST: 'http://localhost:3000',
    }
};

module.exports = serverConfig[process.env.NODE_ENV.trim()];
