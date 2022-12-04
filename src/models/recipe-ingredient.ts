import { DataTypes, Model, Sequelize } from 'sequelize';
import { dbType } from './index';
import { sequelize } from './sequelize';

class RecipeIngredient extends Model {
  public readonly id!: number;
  public title!: string;
  public amount!: string;
  public type!: string;
  public readonly createAt!: Date;
}

RecipeIngredient.init(
  {
    title: {
      type: DataTypes.STRING(100),
      allowNull: false,
      comment: '레시피 재료명',
    },
    amount: {
      type: DataTypes.STRING(10),
      allowNull: false,
      comment: '레시피 내용 순서',
    },
    type: {
      type: DataTypes.STRING(20),
      allowNull: false,
      comment: '재료 또는 조미료 두가지',
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
    modelName: 'RecipeIngredient',
    tableName: 'recipe_ingredient',
    charset: 'utf8mb4',
    collate: 'utf8mb4_general_ci',
  }
);

export const associate = (db: dbType) => {
  db.RecipeIngredient.belongsTo(db.Recipe, { foreignKey: 'recipe_id' });
};

export default RecipeIngredient;
