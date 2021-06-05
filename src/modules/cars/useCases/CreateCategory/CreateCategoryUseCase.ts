import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";



interface IRequest{
    name: string;
    description: string;
}

class CreateCategoryUseCase{

constructor(private categoriesRepository: ICategoriesRepository){
    
}

    execute({name, description}: IRequest): void{


        const categoriesRepository = CategoriesRepository.getInstance();
        const categoryAlreadyExists = this.categoriesRepository.findByName(name);


 if (categoryAlreadyExists) {
     throw new Error("CATEGORIA JÁ CRIADA")
  
 }
   this.categoriesRepository.create({ name, description });
    }


}


export {CreateCategoryUseCase}