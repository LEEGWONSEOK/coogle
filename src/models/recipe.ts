import { DataTypes, Model } from 'sequelize';
import { dbType } from './index';
import { sequelize } from './sequelize';

class Recipe extends Model {
  public readonly id!: number;
  public title!: string;
  public description!: string;
  public content!: string;
  public ingredient!: string;
  public score!: number;
  public level!: number;
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
      comment: '레시피 설명',
    },
    content: {
      type: DataTypes.TEXT,
      comment: '레시피 내용',
    },
    ingredient: {
      type: DataTypes.TEXT,
      comment: '레시피 재료',
    },
    score: {
      type: DataTypes.FLOAT,
      comment: '레시피 평점',
    },
    level: {
      type: DataTypes.INTEGER,
      comment: '레시피 난이도',
    },
    createAt: {
      type: DataTypes.DATE,
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
  db.Recipe.belongsTo(db.RecipeCategory, { foreignKey: 'category' });
};

export default Recipe;
