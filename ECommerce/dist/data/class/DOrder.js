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
}
exports.DOrder = DOrder;
//# sourceMappingURL=DOrder.js.map