import { Category } from "./Category";

export class Article
{
    public _barcode: string = "";
    private _name: string = "";
    private _price: number = 0.0;
    private _stock: number = 0;
    private _description: string = "";
    private _img: string = ""; 
    private _category: Category = null; 

    public get category(): Category {
        return this._category;
    }
    public set category(value: Category) {
        this._category = value;
    }

    public get barcode(): string {
        return this._barcode;
    }
    public set barcode(value: string) {
        this._barcode = value;
    }
    
    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }
  
    public get price(): number {
        return this._price;
    }
    public set price(value: number) {
        this._price = value;
    }
    
    public get stock(): number {
        return this._stock;
    }
    public set stock(value: number) {
        this._stock = value;
    }
   
    public get description(): string {
        return this._description;
    }
    public set description(value: string) {
        this._description = value;
    }
    
    public get img(): string {
        return this._img;
    }
    public set img(value: string) {
        this._img = value;
    }

    constructor(pbarcode:string,pname:string,pprice:number,
        pstock:number,pdescription:string,pimg:string,pcategory:Category)
    {
        this.barcode=pbarcode;
        this.name=pname;
        this.price=pprice;
        this.stock=pstock;
        this.img=pimg;
        this.category=pcategory;
        this.description=pdescription;
    }
}