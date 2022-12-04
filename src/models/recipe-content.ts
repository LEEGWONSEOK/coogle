import { DataTypes, Model, Sequelize } from 'sequelize';
import { dbType } from './index';
import { sequelize } from './sequelize';

class RecipeContent extends Model {
  public readonly id!: number;
  public step!: string;
  public imageUrl!: string;
  public content!: string;
  public readonly createAt!: Date;
}

RecipeContent.init(
  {
    step: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: '레시피 내용 순서',
    },
    imageUrl: {
      type: DataTypes.STRING(100),
      allowNull: false,
      comment: '레시피 내용 이미지 URL',
    },
    content: {
      type: DataTypes.STRING(100),
      allowNull: false,
      comment: '레시피 내용',
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
    modelName: 'RecipeContent',
    tableName: 'recipe_content',
    charset: 'utf8mb4',
    collate: 'utf8mb4_general_ci',
  }
);

export const associate = (db: dbType) => {
  db.RecipeContent.belongsTo(db.Recipe, { foreignKey: 'recipe_id' });
};

export default RecipeContent;
