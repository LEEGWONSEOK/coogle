const Sequelize = require('sequelize');

module.exports = class Recipe extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        id: {
          primaryKey: true,
          type: Sequelize.INTEGER,
          allowNull: false,
          unique: true,
          autoIncrement: true,
          comment: '레시피 ID',
        },
        title: {
          type: Sequelize.STRING(40),
          allowNull: true,
          comment: '레시피 제목',
        },
        description: {
          type: Sequelize.STRING(200),
          allowNull: false,
          comment: '레시피 설명',
        },
        content: {
          type: Sequelize.JSON,
          allowNull: true,
          comment: '레시피 내용',
        },
        ingredient: {
          type: Sequelize.JSON,
          allowNull: true,
          comment: '레시피 식재료',
        },
        condiment: {
          type: Sequelize.JSON,
          allowNull: true,
          comment: '레시피 조미료',
        },
        score: {
          type: Sequelize.INTEGER,
          allowNull: true,
          comment: '평점(평균값)',
        },
        level: {
          type: Sequelize.INTEGER,
          allowNull: true,
          comment: '요리 난이도(1:쉬움, 2:보통, 3:어려움)',
        },
      },
      {
        sequelize,
        timestamps: true,
        underscored: true,
        modelName: 'Recipe',
        tableName: 'recipes',
        paranoid: false,
        charset: 'utf8mb4',
        collate: 'utf8mb4_general_ci',
      }
    );
  }
};
