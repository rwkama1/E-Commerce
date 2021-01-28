import { Article } from "../../shared/entity/Article";

export interface ILArticle {
    getArticle(barcode: string) ;
    addArticle(dtart: Article);
    deleteArticle(dtart: Article);
    updateArticle(dtart: Article);
    registerStock(barcode: string,quantity:number) ;
    getArticlesByNameLetter(expression: string) ;
    orderArticlesbyPrice();
    getArticles() ;
   
}