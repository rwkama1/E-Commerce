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
const FactoryData_1 = require("../../data/FactoryData");
const Order_1 = require("../../shared/entity/Order");
const logicexception_1 = require("../../shared/exceptions/logicexception");
const LArticle_1 = require("./LArticle");
const LUser_1 = require("./LUser");
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
        if (state != "Pending") {
            throw new logicexception_1.LogicException("The state must be 'Pending'");
        }
    }
    validateArticle(article) {
        if (article == null) {
            throw new logicexception_1.LogicException("That Article does not exists in the system");
        }
    }
    validateClient(client) {
        if (client == null) {
            throw new logicexception_1.LogicException("That Client does not exists in the system");
        }
    }
    validateStockQuantity(article, quantity) {
        if (article.stock < quantity) {
            throw new logicexception_1.LogicException("The quantity entered is greater than the stock of the item");
        }
    }
    //********************************* */
    //FUNCTIONS
    startOrder() {
        return __awaiter(this, void 0, void 0, function* () {
            var vorder = new Order_1.Order(0, null, "Pending", 0, null, []);
            this.order = yield vorder;
            return "A new order was started";
        });
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
            this.validateStockQuantity(article, quantity);
            dataOrderDetails = dataorder.registerOrderDetail(article, quantity);
            return dataOrderDetails;
        });
    }
    removeItemonOrder(barcode) {
        return __awaiter(this, void 0, void 0, function* () {
            var getdataorder = this.order;
            this.validateBarCode(barcode);
            var article = yield LArticle_1.LArticle.getInstance().getArticle(barcode);
            this.validateArticle(article);
            getdataorder.removeOrderDetail(barcode);
            return "The Order detail with barcode: " + barcode + " was deleted";
        });
    }
    closeOrder() {
        return __awaiter(this, void 0, void 0, function* () {
            var dataOrder;
            dataOrder = yield this.order;
            if (this.order != null) {
                var clstate = this.order.state;
                this.validateState(clstate);
                dataOrder.close();
            }
            else {
                throw new logicexception_1.LogicException("The Order is null");
            }
            return dataOrder;
        });
    }
    cancelOrder() {
        var canceldataOrders = this.order;
        if (canceldataOrders != null) {
            this.order = null;
            return "The Order was canceled";
        }
    }
    saveOrder(client) {
        return __awaiter(this, void 0, void 0, function* () {
            this.validateClient(client);
            var dataOrders;
            dataOrders = this.order;
            dataOrders.client = client;
            if (this.order != null) {
                var haveorderdetails = dataOrders.haveOrderDetails();
                if (haveorderdetails) {
                    yield FactoryData_1.FactoryData.getDOrder().addOrder(dataOrders);
                    this.order = null;
                    return "The order was saved in the database";
                }
                else {
                    throw new logicexception_1.LogicException("The order has no ordered items");
                }
            }
            else {
                throw new logicexception_1.LogicException("The Order is null");
            }
        });
    }
    deliverOrder(dtorder) {
        return __awaiter(this, void 0, void 0, function* () {
            this.validateState(dtorder.state);
            dtorder.state = "Delivered";
            for (var ordetails of dtorder.listOrderDetails) {
                yield LArticle_1.LArticle.getInstance().deStock(ordetails._article._barcode, ordetails._quantity);
            }
            yield FactoryData_1.FactoryData.getDOrder().updatestateOrder(dtorder);
            return "The Order was delivered";
        });
    }
    personalOrder(dtorder) {
        return __awaiter(this, void 0, void 0, function* () {
            if (dtorder.state == "Pending") {
                yield FactoryData_1.FactoryData.getDOrder().deleteOrder(dtorder);
                return "The Order was deleted";
            }
            if (dtorder.state == "Delivered") {
                yield FactoryData_1.FactoryData.getDOrder().addOrder(dtorder);
                return "The Order was duplicated";
            }
        });
    }
    //Get Orders
    getPendingOrders() {
        return __awaiter(this, void 0, void 0, function* () {
            var list = yield FactoryData_1.FactoryData.getDOrder().listpendingOrders();
            return list;
        });
    }
    getDeliveredOrders() {
        return __awaiter(this, void 0, void 0, function* () {
            var list = yield FactoryData_1.FactoryData.getDOrder().listdeliveredOrders();
            return list;
        });
    }
    getOrder(id) {
        return __awaiter(this, void 0, void 0, function* () {
            var searchorder = yield FactoryData_1.FactoryData.getDOrder().getOrder(id);
            if (searchorder == null) {
                throw new logicexception_1.LogicException("That Order does not exists in the system");
            }
            return searchorder;
        });
    }
    getClientOrders(identitycard) {
        return __awaiter(this, void 0, void 0, function* () {
            var searchclient = yield LUser_1.LUser.getInstance().getUser(identitycard);
            if (searchclient == null) {
                throw new logicexception_1.LogicException("That Client does not exists in the system");
            }
            var list = yield FactoryData_1.FactoryData.getDOrder().listClientOrders(identitycard);
            return list;
        });
    }
    getAllOrders() {
        return __awaiter(this, void 0, void 0, function* () {
            var list = yield FactoryData_1.FactoryData.getDOrder().getOrders();
            return list;
        });
    }
    getOrdersbyDates(date1, date2) {
        return __awaiter(this, void 0, void 0, function* () {
            var list = yield FactoryData_1.FactoryData.getDOrder().listOrdersbyDate(date1, date2);
            return list;
        });
    }
}
exports.LOrder = LOrder;
//# sourceMappingURL=LOrder.js.map