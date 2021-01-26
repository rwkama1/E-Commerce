import { Category } from "../../shared/entity/Category";

export interface ILCategory {
    getCategory(name: string);
    addCategory(dtcategory: Category);
    updateCategory(dtcategory: Category);
    deleteCategory(dtcategory: Category);
    getCategorysByNameLetter(expression: string) ;
    getCategories();
   
}