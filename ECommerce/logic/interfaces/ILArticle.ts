import { Article } from "../../shared/entity/Article";
import { Category } from "../../shared/entity/Category";

export interface ILArticle {
    getArticle(barcode: string) ;
    addArticle(dtart: Article);
    deleteArticle(dtart: Article);
    updateArticle(dtart: Article);
    registerStock(barcode: string,quantity:number) ;
    deStock(barcode: string,quantity:number);
    getArticlesByNameLetter(expression: string) ;
    orderArticlesbyPrice();
    orderArticlesbyCategory();
    getArticles() ;
    filterArticlesbyCategory(namecategory:string);
   
}