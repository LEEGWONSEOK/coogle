import User, { associate as associateUser } from './user';
import Recipe, { associate as associateRecipe } from './recipe';
import Review, { associate as associateReview } from './review';
import Tip, { associate as associateTip } from './tip';
import RecipeContent, {
  associate as associateRecipeContent,
} from './recipe-content';
import RecipeIngredient, {
  associate as associateRecipeIngredient,
} from './recipe-ingredient';
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
  RecipeContent,
  RecipeIngredient,
  RecipeCategory,
  TipCategory,
};

export type dbType = typeof db;

associateUser(db);
associateRecipe(db);
associateReview(db);
associateTip(db);
associateRecipeContent(db);
associateRecipeIngredient(db);
associateRecipeCategory(db);
associateTipCategory(db);
