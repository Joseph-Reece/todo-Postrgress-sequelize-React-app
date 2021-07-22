const express = require("express");
const cors = require("cors");
const logger = require('morgan');
const dotEnv = require("dotenv")


dotEnv.config()

// Log requests to the console.
const app = express()

app.use(logger('dev'));

app.use(express.json({ limit: '30mb', extended: true }))

app.use(express.urlencoded({ limit: '50mb', extended: true }));

app.use(cors())

// Require our routes into the application.
require('./server/routes')(app);

app.get('/', (req, res) => {
    res.send('Hello World!')
  })

// set port, listen for requests
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port http://127.0.0.1:${PORT}.`);
});