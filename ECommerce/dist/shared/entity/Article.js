"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Article = void 0;
class Article {
    constructor(pbarcode, pname, pprice, pstock, pdescription, pimg, pcategory) {
        this._barcode = "";
        this._name = "";
        this._price = 0.0;
        this._stock = 0;
        this._description = "";
        this._img = "";
        this._category = null;
        this.barcode = pbarcode;
        this.name = pname;
        this.price = pprice;
        this.stock = pstock;
        this.img = pimg;
        this.category = pcategory;
        this.description = pdescription;
    }
    get category() {
        return this._category;
    }
    set category(value) {
        this._category = value;
    }
    get barcode() {
        return this._barcode;
    }
    set barcode(value) {
        this._barcode = value;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get price() {
        return this._price;
    }
    set price(value) {
        this._price = value;
    }
    get stock() {
        return this._stock;
    }
    set stock(value) {
        this._stock = value;
    }
    get description() {
        return this._description;
    }
    set description(value) {
        this._description = value;
    }
    get img() {
        return this._img;
    }
    set img(value) {
        this._img = value;
    }
}
exports.Article = Article;
//# sourceMappingURL=Article.js.map