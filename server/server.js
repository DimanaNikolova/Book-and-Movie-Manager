let express = require('express');

const serverConfig = require('./config/server');

let cors = require('cors');
// const { authMiddleware } = require('./middleware/authMiddleware.js');
const { initApplication } = require('./config/init.js');

const routes = require('./routes');
const app = express();

app.use(cors());
// app.use(authMiddleware);
app.use(routes);

initApplication()
    .then(() =>
        app.listen(serverConfig.PORT, () => {
            console.log(
                `Server is up and running on port ${serverConfig.PORT}...`
            );
        })
    )
    .catch((err) => {
        console.log('Init Error:', err);
    });
