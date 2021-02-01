"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = void 0;
const OrderDetail_1 = require("./OrderDetail");
class Order {
    constructor(pstate, ptotal, pclient, plistordersdetails) {
        this._state = "";
        this._total = 0;
        this._client = null;
        this._listOrderDetails = [];
        this.state = pstate;
        this.total = ptotal;
        this.client = pclient;
        this.listOrderDetails = plistordersdetails;
    }
    get state() {
        return this._state;
    }
    set state(value) {
        this._state = value;
    }
    get total() {
        return this._total;
    }
    set total(value) {
        this._total = value;
    }
    get client() {
        return this._client;
    }
    set client(value) {
        this._client = value;
    }
    get listOrderDetails() {
        return this._listOrderDetails;
    }
    set listOrderDetails(value) {
        this._listOrderDetails = value;
    }
    quantityofarticles() {
        return this.listOrderDetails.length;
    }
    registerOrderDetail(article, quantity) {
        var detail = new OrderDetail_1.OrderDetail(quantity, article);
        var odetails = this.listOrderDetails;
        odetails.push(detail);
        return detail;
    }
    close() {
        var details = this.listOrderDetails;
        var vtotal = 0;
        for (var d of details) {
            vtotal += d.getAmount;
        }
        this.total = vtotal;
    }
    haveOrderDetails() {
        var varhdetails = this.listOrderDetails;
        var haveod = varhdetails.length > 0;
        return haveod;
    }
}
exports.Order = Order;
//# sourceMappingURL=Order.js.map