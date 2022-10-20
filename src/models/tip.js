const Sequelize = require('sequelize');

module.exports = class Tip extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        id: {
          primaryKey: true,
          type: Sequelize.INTEGER,
          allowNull: false,
          unique: true,
          autoIncrement: true,
          comment: '팁 ID',
        },
        title: {
          type: Sequelize.STRING(40),
          allowNull: true,
          comment: '팁 이름',
        },
        content: {
          type: Sequelize.STRING(400),
          allowNull: true,
          comment: '레시피 카테고리 이름',
        },
      },
      {
        sequelize,
        timestamps: true,
        underscored: true,
        modelName: 'Tip',
        tableName: 'tips',
        paranoid: false,
        charset: 'utf8mb4',
        collate: 'utf8mb4_general_ci',
      }
    );
  }
};
