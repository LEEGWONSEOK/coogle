import { DataTypes, Model } from 'sequelize';
import { dbType } from './index';
import { sequelize } from './sequelize';

class Tip extends Model {
  public readonly id!: number;
  public title!: string;
  public content!: number;
  public category!: number;
  public readonly createAt!: Date;
}

Tip.init(
  {
    title: {
      type: DataTypes.STRING(30),
      comment: '팁 제목',
    },
    content: {
      type: DataTypes.TEXT,
      comment: '팁 내용',
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
    modelName: 'Tip',
    tableName: 'tip',
    charset: 'utf8mb4',
    collate: 'utf8mb4_general_ci',
  }
);

export const associate = (db: dbType) => {
  db.Tip.belongsTo(db.TipCategory, { foreignKey: 'category' });
};

export default Tip;
