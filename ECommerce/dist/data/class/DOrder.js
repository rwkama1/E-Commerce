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
exports.DOrder = void 0;
const Order_1 = require("../../shared/entity/Order");
const dataexception_1 = require("../../shared/exceptions/dataexception");
const Conection_1 = require("../Conection");
class DOrder {
    constructor() { }
    static getInstance() {
        if (!DOrder.instancia) {
            DOrder.instancia = new DOrder();
        }
        return DOrder.instancia;
    }
    addOrder(dtorder) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                var randomenumber = Math.floor(Math.random() * (9999999999 + 1));
                dtorder.id = randomenumber;
                var now = new Date();
                dtorder.date = now;
                let cn = yield Conection_1.Conexion.uri().connect();
                const collection = cn.db("ECommerce").collection("Order");
                const result = yield collection.insertOne(dtorder);
                cn.close();
            }
            catch (e) {
                throw new dataexception_1.DataException("Order could not be added" + e.message);
            }
        });
    }
    deleteOrder(dtorder) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let query = { _id: dtorder.id };
                let cn = yield Conection_1.Conexion.uri().connect();
                const collection = cn.db("ECommerce").collection("Order");
                const result = yield collection.deleteOne(dtorder);
                cn.close();
            }
            catch (e) {
                throw new dataexception_1.DataException("Order could not be deleted" + e.message);
            }
        });
    }
    updatestateOrder(dtorder) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let cn = yield Conection_1.Conexion.uri().connect();
                let query = { _id: dtorder.id };
                var newvalues = { $set: { _state: dtorder.state } };
                const colorder = cn.db("ECommerce").collection("Order");
                const result = yield colorder.updateOne(query, newvalues);
                cn.close();
            }
            catch (e) {
                throw new dataexception_1.DataException("Order could not be updated" + e.message);
            }
        });
    }
    //***************************************************** */
    getOrder(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let orderobj = null;
            try {
                let cn = yield Conection_1.Conexion.uri().connect();
                const collection = cn.db("ECommerce").collection("Order");
                const getorder = yield collection.findOne({ _id: id });
                if (getorder == null) {
                    return null;
                }
                orderobj = new Order_1.Order(getorder._id, getorder._date, getorder._state, getorder._total, getorder._client, getorder._listOrderDetails);
                return orderobj;
                cn.close();
            }
            catch (e) {
                throw new dataexception_1.DataException("Order could not be searched");
            }
        });
    }
    listpendingOrders() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let cn = yield Conection_1.Conexion.uri().connect();
                const collection = cn.db("ECommerce").collection("Order");
                const result = yield collection.find({ _state: 'Pending' }).toArray();
                let array = [];
                for (var order of result) {
                    var orderobj = new Order_1.Order(order._id, order._date, order._state, order._total, order._client, order._listOrderDetails);
                    array.push(orderobj);
                }
                return array;
                cn.close();
            }
            catch (e) {
                throw new dataexception_1.DataException("Orders could not be listed" + e.message);
            }
        });
    }
    listdeliveredOrders() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let cn = yield Conection_1.Conexion.uri().connect();
                const collection = cn.db("ECommerce").collection("Order");
                const result = yield collection.find({ _state: 'Delivered' }).toArray();
                let array = [];
                for (var order of result) {
                    var orderobj = new Order_1.Order(order._id, order._date, order._state, order._total, order._client, order._listOrderDetails);
                    array.push(orderobj);
                }
                return array;
                cn.close();
            }
            catch (e) {
                throw new dataexception_1.DataException("Orders could not be listed" + e.message);
            }
        });
    }
    listClientOrders(identitycard) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let cn = yield Conection_1.Conexion.uri().connect();
                const collection = cn.db("ECommerce").collection("Order");
                const result = yield collection.find({ "_client._identitycard": identitycard }).toArray();
                let array = [];
                for (var order of result) {
                    var orderobj = new Order_1.Order(order._id, order._date, order._state, order._total, order._client, order._listOrderDetails);
                    array.push(orderobj);
                }
                return array;
                cn.close();
            }
            catch (e) {
                throw new dataexception_1.DataException("Orders could not be listed" + e.message);
            }
        });
    }
    getOrders() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let cn = yield Conection_1.Conexion.uri().connect();
                const collection = cn.db("ECommerce").collection("Order");
                const result = yield collection.find({}).toArray();
                let array = [];
                for (var order of result) {
                    var orderobj = new Order_1.Order(order._id, order._date, order._state, order._total, order._client, order._listOrderDetails);
                    array.push(orderobj);
                }
                cn.close();
                return array;
            }
            catch (e) {
                throw new dataexception_1.DataException("Orders could not be listed" + e.message);
            }
        });
    }
    listOrdersbyDate(date1, date2) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let cn = yield Conection_1.Conexion.uri().connect();
                const collection = cn.db("ECommerce").collection("Order");
                const result = yield collection.find({ $and: [{ _date: { '$gte': date1 } }, { _date: { '$lte': date2 } }, { _state: 'Delivered' }] }).toArray();
                let array = [];
                for (var order of result) {
                    var orderobj = new Order_1.Order(order._id, order._date, order._state, order._total, order._client, order._listOrderDetails);
                    array.push(orderobj);
                }
                return array;
                cn.close();
            }
            catch (e) {
                throw new dataexception_1.DataException("Orders could not be listed" + e.message);
            }
        });
    }
}
exports.DOrder = DOrder;
//# sourceMappingURL=DOrder.js.map