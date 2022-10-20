const Sequelize = require('sequelize');

const env = process.env.NODE_ENV || 'development';

const config = require('../config/config')[env];

const User = require('./user');
const Recipe = require('./recipe');
const RecipeCategory = require('./recipe-category');
const Tip = require('./tip');
const TipCategory = require('./tip-category');
const Review = require('./review');

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
db.Tip = Tip;
db.TipCategory = TipCategory;
db.Review = Review;

User.init(sequelize);
Recipe.init(sequelize);
RecipeCategory.init(sequelize);
Tip.init(sequelize);
TipCategory.init(sequelize);
Review.init(sequelize);

User.associate(db);
Recipe.associate(db);
// RecipeCategory.associate(db);
// Tip.associate(db);
// TipCategory.associate(db);
// Review.associate(db);

module.exports = db;
