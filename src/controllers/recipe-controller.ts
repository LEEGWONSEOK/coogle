import express, { Request, Response, NextFunction } from 'express';
import RecipeService from '../services/recipe-service';

// const createRecipe = async (req: Request, res: Response) => {
//   const { recipeId } = req.params;
//   try {
//     const data = await RecipeService.getRecipe(recipeId);
//     return res.status(200).json(data);
//   } catch (err) {
//     return res.status(500).json(err);
//   }
// };

/* 단일 레시피 불러오기 */
const getRecipe = async (req: Request, res: Response) => {
  const { recipeId } = req.params;
  try {
    const result = await RecipeService.getRecipe(recipeId);
    return res.status(200).json(result);
  } catch (err) {
    return res.status(500).json(err);
  }
};

/* 카테고리별 전체 레시피 불러오기 */
const getRecipesByCategory = async (req: Request, res: Response) => {
  const { categoryId } = req.params;
  const queryInfo = req.query;
  const filter = String(queryInfo.filter);
  const page = Number(queryInfo.page);
  const perpage = Number(queryInfo.perpage);
  try {
    const result = await RecipeService.getRecipesByCategory(
      categoryId,
      filter,
      page,
      perpage
    );
    return res.status(200).json(result);
  } catch (err) {
    return res.status(500).json(err);
  }
};

export default {
  getRecipe,
  getRecipesByCategory,
};
