import dotenv from 'dotenv';

dotenv.config();

const { env } = process;

type Config = {
  username: string;
  password: string;
  database: string;
  host: string;
  [key: string]: string | boolean;
};
interface IConfigGroup {
  development: Config;
  test: Config;
  production: Config;
}
const config: IConfigGroup = {
  development: {
    username: env.DB_USERNAME!,
    password: env.DB_PASSWORD!,
    database: env.DB_DATABASE!,
    host: env.DB_HOST!,
    dialect: 'mysql'!,
    logging: false!,
  },
  test: {
    username: env.DB_USERNAME!,
    password: env.DB_PASSWORD!,
    database: env.DB_DATABASE!,
    host: env.DB_HOST!,
    dialect: 'mysql'!,
    logging: false!,
  },
  production: {
    username: env.DB_USERNAME!,
    password: env.DB_PASSWORD!,
    database: env.DB_DATABASE!,
    host: env.DB_HOST!,
    dialect: 'mysql'!,
    logging: false!,
  },
};

export default config;
