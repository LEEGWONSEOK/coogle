import { DataTypes, Model } from 'sequelize';
import { dbType } from './index';
import { sequelize } from './sequelize';

class User extends Model {
  public readonly id!: number;
  public email!: string;
  public nickname!: string;
  public readonly createAt!: Date;
}

User.init(
  {
    email: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true,
      comment: '유저 이메일',
    },
    nickname: {
      type: DataTypes.STRING(30),
      comment: '레시피 설명',
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
    modelName: 'User',
    tableName: 'user',
    charset: 'utf8mb4',
    collate: 'utf8mb4_general_ci',
  }
);

export const associate = (db: dbType) => {
  db.User.hasMany(db.Review, { foreignKey: 'author' });
  db.User.hasMany(db.Recipe, { foreignKey: 'author' });
};

export default User;
