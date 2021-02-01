"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderDetail = void 0;
class OrderDetail {
    constructor(pquantity, particle) {
        this._quantity = 0;
        this._article = null;
        this.quantity = pquantity;
        this.article = particle;
    }
    get quantity() {
        return this._quantity;
    }
    set quantity(value) {
        this._quantity = value;
    }
    get article() {
        return this._article;
    }
    set article(value) {
        this._article = value;
    }
    get getAmount() {
        var quantity = this.quantity;
        var article = this.article;
        var price = article.price;
        return quantity * price;
    }
}
exports.OrderDetail = OrderDetail;
//# sourceMappingURL=OrderDetail.js.map