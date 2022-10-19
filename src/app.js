// @ts-check

/* module import */
const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
const routes = require('./routes');
const { sequelize } = require('./models');

const PORT = 8080;
const app = express();
const { log, error } = console;

dotenv.config();
app.use(morgan('dev'));

sequelize
  .sync({ force: true }) // force: true >> 테이블 다 지우고 다시 생성(데이터 다 날아감, 실무X) / alter: true >> 데이터 유지 가능
  .then(() => {
    log('✅ DB connect!');
  })
  .catch((err) => {
    error(err);
  });

/* 호출 방지 */
app.get('/favicon.ico', (req, res) => res.status(204));

app.use('/api', routes);

app.listen(PORT, () => {
  log(`The Express server is listening at port : ${PORT}`);
});
