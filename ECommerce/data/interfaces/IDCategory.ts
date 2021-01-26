import { Category } from "../../shared/entity/Category";

export interface IDCategory {

    addCategory(dtcat: Category);
    getCategory(name:string);
    updateCategory(dtcat: Category);
    deleteCategory(dtcat: Category);
    getCategorysByNameLetter(expression: string);
    getCategories();
  
}