import { Article } from "./Article";

export class OrderDetail 
{
    public _quantity: number = 0;
    public _article: Article = null;

    public get quantity(): number {
        return this._quantity;
    }
    public set quantity(value: number) {
        this._quantity = value;
    }
    
    public get article(): Article {
        return this._article;
    }
    public set article(value: Article) {
        this._article = value;
    }
    public get getAmount(): number {
        var quantity = this.quantity;
        var article = this.article;
        var price = article.price;
        
        return quantity * price;
    }

    constructor(pquantity:number,particle:Article)
    {
        this.quantity=pquantity;
        this.article=particle;
    }
}