const { initDatabase } = require('./mongoose.js');
const { initDb } = require('./db.js');

const initApplication = async () => {
    await initDatabase();
    await initDb();
};

module.exports = {
    initApplication,
};
