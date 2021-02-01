"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LOrder = void 0;
const Order_1 = require("../../shared/entity/Order");
const logicexception_1 = require("../../shared/exceptions/logicexception");
const LArticle_1 = require("./LArticle");
class LOrder {
    constructor() { }
    static getInstance() {
        if (!LOrder.instancia) {
            LOrder.instancia = new LOrder();
        }
        return LOrder.instancia;
    }
    get order() {
        return this._order;
    }
    set order(value) {
        this._order = value;
    }
    //*********************************** */
    //VALIDATIONS
    validateBarCode(barcode) {
        if (barcode.trim() === "") {
            throw new logicexception_1.LogicException("The barcode cannot be empty");
        }
    }
    validateregisterItemonOrder(barcode, quantity, dataorder) {
        this.validateBarCode(barcode);
        if (quantity < 1) {
            throw new logicexception_1.LogicException("The quantity must be greater than 0");
        }
        if (dataorder == null) {
            throw new logicexception_1.LogicException("The Order is null");
        }
    }
    validateState(state) {
        if (state != "Open") {
            throw new logicexception_1.LogicException("The state must be 'Open'");
        }
    }
    validateArticle(article) {
        if (article == null) {
            throw new logicexception_1.LogicException("That Article does not exists in the system");
        }
    }
    //********************************* */
    //FUNCTIONS
    startOrder() {
        var vorder = new Order_1.Order("Open", 0, null, []);
        this.order = vorder;
    }
    registerItemonOrder(barcode, quantity) {
        return __awaiter(this, void 0, void 0, function* () {
            var dataOrderDetails;
            var dataorder = this.order;
            this.validateregisterItemonOrder(barcode, quantity, dataorder);
            var estado = dataorder.state;
            this.validateState(estado);
            var article = yield LArticle_1.LArticle.getInstance().getArticle(barcode);
            this.validateArticle(article);
            dataOrderDetails = dataorder.registerOrderDetail(article, quantity);
            return dataOrderDetails;
        });
    }
    closeOrder() {
        var dataOrder;
        dataOrder = this.order;
        if (this.order != null) {
            var clstate = this.order.state;
            this.validateState(clstate);
            dataOrder.close();
        }
        else {
            throw new logicexception_1.LogicException("The Order is null");
        }
        return dataOrder;
    }
}
exports.LOrder = LOrder;
//# sourceMappingURL=LOrder.js.map