/* Module import */
import express, { Request, Response, NextFunction } from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import hpp from 'hpp';
import helmet from 'helmet';
import indexRoutes from './routes';
import { sequelize } from './models';

dotenv.config();

/* APP variables */
const { env } = process;
const PORT: number = parseInt(env.PORT as string) || 8080;
const HOST: string = env.HOST || 'localhost';
const app: express.Application = express();

/* APP configuration */
app.use(morgan('dev'));
app.use(cors());

/* Sequelize-DB connect test */
sequelize
  .sync({ force: false })
  .then(() => {
    console.log('DB 연결을 성공했습니다.');
  })
  .catch((err: Error) => {
    console.log('DB 연결을 실패했습니다.');
    console.error(err);
  });

/* 호출 방지 */
app.get('/favicon.ico', (req, res) => res.status(204));

/* API 라우터 */
app.use('/api', indexRoutes);

app.get('/', (req, res) => {
  res.status(200).json({ message: '??연결이 잘 되었는지?' });
});

/* ErrorHandler */
app.get('*', (req, res) => {
  res.status(404).json({ message: '404 Not Found' });
});
//app.use(errorHandler);

// jenkins test2

/* Server 연결 */
app.listen(PORT, HOST, () => {
  console.log(`Express Server가 포트 '${HOST}:${PORT}'에서 실행중입니다.`);
});
