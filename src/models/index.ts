import Recipe, { associate as associateRecipe } from './recipe';
export * from './sequelize';

const db = {
  Recipe,
};

export type dbType = typeof db;

associateRecipe(db);
