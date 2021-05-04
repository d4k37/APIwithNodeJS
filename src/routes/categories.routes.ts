/* eslint-disable linebreak-style */
import { Router } from 'express';

import { Category } from '../model/category';

const categoriesRoutes = Router();

const categories: Category[] = [];

categoriesRoutes.post('/', (request, response) => {
  const { name, description } = request.body;

  const category = new Category();
  Object.assign(category, { name, description, created_at: new Date() });
  categories.push(category);

  return response.status(201).json({ category });
});

// eslint-disable-next-line import/prefer-default-export
export { categoriesRoutes };
