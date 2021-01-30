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
exports.DClient = void 0;
const Client_1 = require("../../shared/entity/Client");
const dataexception_1 = require("../../shared/exceptions/dataexception");
const Conection_1 = require("../Conection");
class DClient {
    constructor() { }
    static getInstance() {
        if (!DClient.instancia) {
            DClient.instancia = new DClient();
        }
        return DClient.instancia;
    }
    addClient(dtclient) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let cn = yield Conection_1.Conexion.uri().connect();
                const collection = cn.db("ECommerce").collection("Client");
                const result = yield collection.insertOne(dtclient);
                cn.close();
            }
            catch (e) {
                throw new dataexception_1.DataException("Client could not be added" + e.message);
            }
        });
    }
    getClient(idcard) {
        return __awaiter(this, void 0, void 0, function* () {
            let cliobj = null;
            try {
                let cn = yield Conection_1.Conexion.uri().connect();
                const collection = cn.db("ECommerce").collection("Client");
                const client = yield collection.findOne({ _identitycard: idcard });
                if (client == null) {
                    return null;
                }
                cliobj = new Client_1.Client(client._identitycard, client._completename, client._password, client._username, client._shippingaddress, client._creditcardnumber);
                return cliobj;
                cn.close();
            }
            catch (e) {
                throw new dataexception_1.DataException("Client could not be searched");
            }
        });
    }
    getClientbyusername(username) {
        return __awaiter(this, void 0, void 0, function* () {
            let cliobj = null;
            try {
                let cn = yield Conection_1.Conexion.uri().connect();
                const collection = cn.db("ECommerce").collection("Client");
                const client = yield collection.findOne({ _username: username });
                if (client == null) {
                    return null;
                }
                cliobj = new Client_1.Client(client._identitycard, client._completename, client._password, client._username, client._shippingaddress, client._creditcardnumber);
                return cliobj;
                cn.close();
            }
            catch (e) {
                throw new dataexception_1.DataException("Client could not be searched");
            }
        });
    }
}
exports.DClient = DClient;
//# sourceMappingURL=DClient.js.map