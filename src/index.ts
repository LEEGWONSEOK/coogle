/* module import */
import express from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import hpp from 'hpp';
import helmet from 'helmet';
import routes from './routes';

//import { sequelize } from './models';

//const { sequelize } = require('./models');
//const { errorHandler } = require('./middlewares/error-handler');

dotenv.config();
const { env } = process;
const port = env.PORT;
const app = express();

app.use(morgan('dev'));

// sequelize
//   .sync({ force: true })
//   .then(() => {
//     log('DB 연결을 성공했습니다.');
//   })
//   .catch((err: Error) => {
//     log('DB 연결을 실패했습니다.');
//     error(err);
//   });

/* 호출 방지 */
app.get('/favicon.ico', (req, res) => res.status(204));

/* API 라우터 */
app.use('/api', routes);

app.get('/', (req, res) => {
  res.status(200).json({ message: '??연결이 잘 되었는지?' });
});

/* ErrorHandler */
app.get('*', (req, res) => {
  res.status(404).json({ message: '404 Not Found' });
});
//app.use(errorHandler);

// jenkins test

/* Server 연결 */
app.listen(port, () => {
  console.log(`Express Server가 포트 '${port}'에서 실행중입니다.`);
});
