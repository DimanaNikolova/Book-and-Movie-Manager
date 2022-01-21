const { initDatabase } = require('./mongoose.js');

const initApplication = async () => {
    await initDatabase();
};

module.exports = {
    initApplication,
};
