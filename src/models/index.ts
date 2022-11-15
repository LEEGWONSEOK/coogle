import User, { associate as associateUser } from './user';
import Recipe, { associate as associateRecipe } from './recipe';
import Review, { associate as associateReview } from './review';
import Tip, { associate as associateTip } from './tip';
import RecipeCategory, {
  associate as associateRecipeCategory,
} from './recipe-category';
import TipCategory, { associate as associateTipCategory } from './tip-category';

export * from './sequelize';

const db = {
  User,
  Recipe,
  Review,
  Tip,
  RecipeCategory,
  TipCategory,
};

export type dbType = typeof db;

associateUser(db);
associateRecipe(db);
associateReview(db);
associateTip(db);
associateRecipeCategory(db);
associateTipCategory(db);
