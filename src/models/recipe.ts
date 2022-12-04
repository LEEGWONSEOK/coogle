import { DataTypes, Model, Sequelize } from 'sequelize';
import { dbType } from './index';
import { sequelize } from './sequelize';

class Recipe extends Model {
  public readonly id!: number;
  public title!: string;
  public description!: string;
  public score!: number;
  public level!: string;
  public author!: number;
  public category!: number;
  public readonly createAt!: Date;
}

Recipe.init(
  {
    title: {
      type: DataTypes.STRING(30),
      allowNull: false,
      comment: '레시피 제목',
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
      comment: '레시피 설명',
    },
    score: {
      type: DataTypes.FLOAT,
      defaultValue: 0.0,
      comment: '레시피 평점',
    },
    level: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: '쉬움',
      comment: '레시피 난이도(쉬움, 보통, 어려움)',
    },
    createAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.fn('now'),
      comment: '생성일',
    },
  },
  {
    sequelize,
    underscored: true,
    timestamps: false,
    modelName: 'Recipe',
    tableName: 'recipe',
    charset: 'utf8mb4',
    collate: 'utf8mb4_general_ci',
  }
);

export const associate = (db: dbType) => {
  db.Recipe.belongsTo(db.User, { foreignKey: 'author' });
  db.Recipe.hasMany(db.Review, { foreignKey: 'recipe' });
  db.Recipe.hasMany(db.RecipeContent, { foreignKey: 'recipe_id' });
  db.Recipe.hasMany(db.RecipeIngredient, { foreignKey: 'recipe_id' });
  db.Recipe.belongsTo(db.RecipeCategory, { foreignKey: 'category' });
};

export default Recipe;
