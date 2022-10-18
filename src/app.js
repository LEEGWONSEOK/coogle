// @ts-check

const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
const routes = require('./routes');

dotenv.config();
const app = express();
app.use(morgan('dev'));
const PORT = 8080;

/* 호출 방지 */
app.get('/favicon.ico', (req, res) => res.status(204));

app.use('/api', routes);

app.listen(PORT, () => {
  console.log(`The Express server is listening at port : ${PORT}`);
});
