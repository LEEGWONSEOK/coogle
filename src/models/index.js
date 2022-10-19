const Sequelize = require('sequelize');

const env = process.env.NODE_ENV || 'development';

const config = require('../config/config')[env]; // 설정파일 불러오기

// 만들 모델
const User = require('./user');
const Recipe = require('./recipe');
const RecipeCategory = require('./recipe-category');

const db = {};
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config,
  {
    logging: false,
  }
);

db.sequelize = sequelize;
db.User = User;
db.Recipe = Recipe;
db.RecipeCategory = RecipeCategory;

User.init(sequelize);
Recipe.init(sequelize);
RecipeCategory.init(sequelize);

// User.associate(db);

module.exports = db;
