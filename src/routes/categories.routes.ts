/* eslint-disable linebreak-style */

import { response, Router } from 'express';

import { CategoriesRepository } from '../modules/cars/repositories/implementations/CategoriesRepository';
import { createCategoryController } from '../modules/cars/useCases/CreateCategory';
import { listCategoriesController } from '../modules/cars/useCases/ListCategory';
import multer from 'multer';
import { importCategoryController } from '../modules/cars/useCases/importCategory';


const categoriesRoutes = Router();

const upload = multer({
  dest: "./tmp",
});

const categoriesRepository = CategoriesRepository.getInstance();
const categories = [] = [];

categoriesRoutes.post('/', (request, response) => {
  return createCategoryController.handle(request, response);
});

categoriesRoutes.get('/', (request, response) => {
 return listCategoriesController.handle(request, response);
});


categoriesRoutes.post("/import", upload.single("file"), (request, response)=>{

 return importCategoryController.handle(request, response);

})

export { categoriesRoutes };
