import { DataTypes, Model } from 'sequelize';
import { dbType } from './index';
import { sequelize } from './sequelize';

class Recipe extends Model {
  public readonly id!: number;
  public title!: string;
  public description!: string;
  public content!: string;
  public ingredient!: string;
  public condiment: string;
  public score: number;
  public level!: number;
  public readonly createAt!: Date;
}

Recipe.init(
  {
    title: {
      type: DataTypes.STRING(20),
      allowNull: false,
      comment: '레시피 제목',
    },
    description: {
      type: DataTypes.STRING(200),
      comment: '레시피 설명',
    },
    content: {
      type: DataTypes.JSON,
      comment: '레시피 내용',
    },
    ingredient: {
      type: DataTypes.JSON,
      comment: '레시피 식재료',
    },
  },
  {
    sequelize,
    underscored: true,
    modelName: 'Recipe',
    tableName: 'recipe',
    charset: 'utf8',
    collate: 'utf8_general_ci',
  }
);

export const associate = (db: dbType) => {};

export default Recipe;
