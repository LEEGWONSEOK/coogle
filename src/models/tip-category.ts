import { DataTypes, Model } from 'sequelize';
import { dbType } from './index';
import { sequelize } from './sequelize';

class TipCategory extends Model {
  public readonly id!: number;
  public title!: string;
  public readonly createAt!: Date;
}

TipCategory.init(
  {
    title: {
      type: DataTypes.STRING(30),
      comment: '팁 카테고리 제목',
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
    modelName: 'TipCategory',
    tableName: 'tipCategory',
    charset: 'utf8mb4',
    collate: 'utf8mb4_general_ci',
  }
);

export const associate = (db: dbType) => {
  db.TipCategory.hasMany(db.Tip, { foreignKey: 'category' });
};

export default TipCategory;
