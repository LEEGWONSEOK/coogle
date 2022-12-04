import express, { Request, Response, NextFunction } from 'express';
import RecipeController from '../controllers/recipe-controller';

const router = express.Router({ mergeParams: true });

// 레시피 전체 조회(카테고리별)
router.get('/category/:categoryId', RecipeController.getRecipesByCategory);
// GET /api/recipes/category/{category_id}?filter=newest&page={페이지 번호}&perpage={페이지당 개수}

// 레시피 검색 조회
//router.get('/', RecipeController.getRecipeBySearch);
// GET /api/recipes?search={검색내용}&page={페이지 번호}&perpage={페이지당 개수}

// 레시피 상세 조회
router.get('/:recipeId', RecipeController.getRecipe);
// GET /api/recipes/{recipe_id}

// 레시피 생성
//router.post('/', RecipeController.createRecipe);
// POST /api/recipes

// 레시피 수정
//router.patch('/:recipeId', RecipeController.updateRecipe);
// PATCH /api/recipes/{recipe_id}

// 레시피 삭제
//router.delete('/:recipeId', RecipeController.deleteRecipe);
// DELETE /api/recipes/{recipe_id}

export default router;
