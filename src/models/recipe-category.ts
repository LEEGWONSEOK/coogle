import Sequelize from 'sequelize';

module.exports = class RecipeCategory extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        id: {
          primaryKey: true,
          type: Sequelize.INTEGER,
          allowNull: false,
          unique: true,
          autoIncrement: true,
          comment: '레시피 카테고리 ID',
        },
        title: {
          type: Sequelize.STRING(40),
          allowNull: true,
          comment: '레시피 카테고리 이름',
        },
      },
      {
        sequelize,
        timestamps: false,
        underscored: true,
        modelName: 'RecipeCategory',
        tableName: 'recipe_categorys',
        paranoid: false,
        charset: 'utf8mb4',
        collate: 'utf8mb4_general_ci',
      }
    );
  }
};
