import express from 'express';
import Recipe from '../models/recipe';
import sequelize, { Op } from 'sequelize';

const getRecipe = async (recipeId: string) => {
  try {
    console.log('recipe-service');
    const data = await Recipe.findOne({
      raw: true,
      where: { id: recipeId },
    });
    return data;
  } catch (error: any) {
    console.log(error);
    throw new Error(error);
  }
};

const getRecipesByCategory = async (
  categoryId: string,
  filter: string,
  page: number,
  perpage: number
) => {
  try {
    let offset: number = 0;
    if (page > 1) {
      offset = perpage * (page - 1);
    }
    if (filter === 'newest') {
      const data = await Recipe.findAll({
        raw: true,
        offset: offset,
        limit: perpage,
        where: { category: categoryId },
        order: [['create_at', 'DESC']],
      });
      return data;
    } else if (filter === 'popularity') {
      const data = await Recipe.findAll({
        raw: true,
        where: { category: categoryId },
      });
      return data;
    } else {
      const data = await Recipe.findAll({
        raw: true,
        where: { category: categoryId },
      });
      return data;
    }
  } catch (error: any) {
    console.log(error);
    throw new Error(error);
  }
};

// const getRecipes = async () => {
//   try {
//     console.log('recipes-service');
//     const data = await Recipe.findAll({
//       raw: true,
//       where: { id: recipeId },
//     });
//     return data;
//   } catch (error: any) {
//     console.log(error);
//     throw new Error(error);
//   }
// };

export default {
  getRecipe,
  getRecipesByCategory,
};
