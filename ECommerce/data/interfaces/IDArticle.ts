import { Article } from "../../shared/entity/Article";

export interface IDArticle {

    addArticle(dtcat: Article);
    getArticle(barcode:string);
    updateArticle(dtart: Article);
    
}