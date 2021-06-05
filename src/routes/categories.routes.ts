/* eslint-disable linebreak-style */

import { response, Router } from 'express';

import { CategoriesRepository } from '../modules/cars/repositories/implementations/CategoriesRepository';
import { createCategoryController } from '../modules/cars/useCases/CreateCategory';
import { listCategoriesController } from '../modules/cars/useCases/ListCategory';


const categoriesRoutes = Router();
const categoriesRepository = CategoriesRepository.getInstance();
const categories = [] = [];

categoriesRoutes.post('/', (request, response) => {
  return createCategoryController.handle(request, response);
});

categoriesRoutes.get('/', (request, response) => {
 return listCategoriesController.handle(request, response);
});
// eslint-disable-next-line import/prefer-default-export
export { categoriesRoutes };
