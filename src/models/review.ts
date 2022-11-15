import { DataTypes, Model } from 'sequelize';
import { dbType } from './index';
import { sequelize } from './sequelize';

class Review extends Model {
  public readonly id!: number;
  public review!: string;
  public score!: number;
  public author!: number;
  public recipe!: number;
  public readonly createAt!: Date;
}

Review.init(
  {
    review: {
      type: DataTypes.TEXT,
      comment: '리뷰 내용',
    },
    score: {
      type: DataTypes.INTEGER,
      comment: '리뷰 점수',
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
    modelName: 'Review',
    tableName: 'review',
    charset: 'utf8mb4',
    collate: 'utf8mb4_general_ci',
  }
);

export const associate = (db: dbType) => {
  db.Review.belongsTo(db.User, { foreignKey: 'author' });
  db.Review.belongsTo(db.Recipe, { foreignKey: 'recipe' });
};

export default Review;
