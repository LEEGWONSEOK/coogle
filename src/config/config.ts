import dotenv from 'dotenv';

dotenv.config();

const { env } = process;

export default {
  development: {
    username: env.DB_USERNAME,
    password: env.DB_PASSWORD,
    database: env.DB_DATABASE,
    host: env.DB_HOST,
    dialect: 'mysql',
    logging: false,
  },
};
