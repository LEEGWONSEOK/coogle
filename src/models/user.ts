import { DataTypes, Model, Sequelize } from 'sequelize';
import { dbType } from './index';
import { sequelize } from './sequelize';

class User extends Model {
  public readonly id!: number;
  public acount!: string;
  public nickname!: string;
  public readonly createAt!: Date;
}

User.init(
  {
    account: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true,
      defaultValue: 'account-test-01',
      comment: '계정',
    },
    nickname: {
      type: DataTypes.STRING(30),
      unique: true,
      comment: '닉네임',
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
