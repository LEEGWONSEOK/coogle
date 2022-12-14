import { DataTypes, Model, Sequelize } from 'sequelize';
import { dbType } from './index';
import { sequelize } from './sequelize';

class RecipeCategory extends Model {
  public readonly id!: number;
  public title!: string;
  public readonly createAt!: Date;
}

RecipeCategory.init(
  {
    title: {
      type: DataTypes.STRING(30),
      comment: '레시피 카테고리 제목',
    },
    createAt: {
      type: DataTypes.DATE,
      defaultValue: Sequelize.fn('now'),
      comment: '생성일',
    },
  },
  {
    sequelize,
    underscored: true,
    timestamps: false,
    modelName: 'RecipeCategory',
    tableName: 'recipe_category',
    charset: 'utf8mb4',
    collate: 'utf8mb4_general_ci',
  }
);

export const associate = (db: dbType) => {
  db.RecipeCategory.hasMany(db.Recipe, { foreignKey: 'category' });
};

export default RecipeCategory;
