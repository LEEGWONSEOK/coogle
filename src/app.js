// @ts-check

/* module import */
const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
const routes = require('./routes');

const { sequelize } = require('./models');
const { errorHandler } = require('./middlewares/error-handler');

const { env } = process;

const port = env.PORT;
const app = express();
const { log, error } = console;

dotenv.config();
app.use(morgan('dev'));

sequelize
  .sync({ force: true })
  .then(() => {
    log('DB 연결을 성공했습니다.');
  })
  .catch((err) => {
    log('DB 연결을 실패했습니다.');
    error(err);
  });

/* 호출 방지 */
app.get('/favicon.ico', (req, res) => res.status(204));

/* API 라우터 */
app.use('/api', routes);

/* ErrorHandler */
app.get('*', (req, res) => {
  res.status(404).json({ message: '404 Not Found' });
});
app.use(errorHandler);

/* Server 연결 */
app.listen(port, () => {
  log(`Express Server가 포트 '${port}'에서 실행중입니다.`);
});
