const Sequelize = require('sequelize');

module.exports = class User extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        id: {
          primaryKey: true,
          type: Sequelize.INTEGER,
          allowNull: false,
          unique: true,
          autoIncrement: true,
          comment: '유저 ID',
        },
        email: {
          type: Sequelize.STRING(40),
          allowNull: true,
          unique: true,
        },
        nickname: {
          type: Sequelize.STRING(15),
          allowNull: false,
          unique: true,
        },
        role: {
          type: Sequelize.ENUM('admin', 'general'),
          allowNull: true,
        },
      },
      {
        sequelize,
        timestamps: false,
        underscored: true,
        modelName: 'User',
        tableName: 'users',
        paranoid: false,
        charset: 'utf8mb4',
        collate: 'utf8mb4_general_ci',
      }
    );
  }

  // static associate(db) {
  //   // User vs Post   >>   1:N
  //   db.User.hasMany(db.Post);

  //   // User vs User   >>   N:M
  //   db.User.belongsToMany(db.User, {
  //     foreignKey: 'followingId', // ForeignKey 이름 변경(누가 팔로워고 팔로잉인지 확인하기 위해 라벨링)
  //     as: 'Followers', // Followers인 이유? => 팔로워들을 가져올려면 팔로잉을 알아야 된다
  //     through: 'follows',
  //   });
  //   db.User.belongsToMany(db.User, {
  //     foreignKey: 'followerId',
  //     as: 'Followings',
  //     through: 'follows',
  //   });
  // }
};
