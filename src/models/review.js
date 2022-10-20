const Sequelize = require('sequelize');

module.exports = class Review extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        id: {
          primaryKey: true,
          type: Sequelize.INTEGER,
          allowNull: false,
          unique: true,
          autoIncrement: true,
          comment: '리뷰 ID',
        },
        content: {
          type: Sequelize.STRING(200),
          allowNull: true,
          comment: '리뷰 내용',
        },
        score: {
          type: Sequelize.INTEGER,
          allowNull: true,
          comment: '평점(개인)',
        },
      },
      {
        sequelize,
        timestamps: true,
        underscored: true,
        modelName: 'Review',
        tableName: 'reviews',
        paranoid: false,
        charset: 'utf8mb4',
        collate: 'utf8mb4_general_ci',
      }
    );
  }
};
