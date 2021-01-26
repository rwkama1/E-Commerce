import { Article } from "../../shared/entity/Article";

export interface IDArticle {

    addArticle(dtcat: Article);
    getArticle(barcode:string);
    // updateCategory(dtcat: Category);
    // deleteCategory(dtcat: Category);
    // getCategorysByNameLetter(expression: string);
    // getCategories();
  
}