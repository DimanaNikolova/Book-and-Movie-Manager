const mongoose = require('mongoose');
const serverConfig = require('./server');

const initDatabase = async () => {
    console.log(
        `[config/mongoose.js]  connection : ${serverConfig.DB_CONNECTION}`
    );

    let result = mongoose.connect(serverConfig.DB_CONNECTION, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    const db = mongoose.connection;

    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function () {
        console.log(`[config/mongoose.js]  connected to DB`);
    });

    return result;
};

module.exports = {
    initDatabase,
};
