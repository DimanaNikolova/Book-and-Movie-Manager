const { MongoClient } = require('mongodb');
const serverConfig = require('./server');

let db;

const initDb = async () => {
    
    const client = await MongoClient.connect(serverConfig.DB_CONNECTION);
    db = client.db();


    return db;
};

module.exports = {
    initDb,
};
