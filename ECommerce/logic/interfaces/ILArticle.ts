import { Article } from "../../shared/entity/Article";

export interface ILArticle {
    getArticle(barcode: string) ;
    addArticle(dtart: Article);
    // getCategory(name: string);
    // addCategory(dtcategory: Category);
    // updateCategory(dtcategory: Category);
    // deleteCategory(dtcategory: Category);
    // getCategorysByNameLetter(expression: string) ;
    // getCategories();
   
}