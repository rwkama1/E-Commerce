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
exports.DAdministrator = void 0;
const Administrator_1 = require("../../shared/entity/Administrator");
const dataexception_1 = require("../../shared/exceptions/dataexception");
const Conection_1 = require("../Conection");
class DAdministrator {
    constructor() { }
    static getInstance() {
        if (!DAdministrator.instancia) {
            DAdministrator.instancia = new DAdministrator();
        }
        return DAdministrator.instancia;
    }
    addAdmin(dtadmin) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let cn = yield Conection_1.Conexion.uri().connect();
                const collection = cn.db("ECommerce").collection("Admin");
                const result = yield collection.insertOne(dtadmin);
                cn.close();
            }
            catch (e) {
                throw new dataexception_1.DataException("Admin could not be added" + e.message);
            }
        });
    }
    getAdminbyusername(username) {
        return __awaiter(this, void 0, void 0, function* () {
            let admobj = null;
            try {
                let cn = yield Conection_1.Conexion.uri().connect();
                const collection = cn.db("ECommerce").collection("Admin");
                const Admin = yield collection.findOne({ _username: username });
                if (Admin == null) {
                    return null;
                }
                admobj = new Administrator_1.Administrator(Admin._identitycard, Admin._completename, Admin._password, Admin._username, Admin._position);
                return admobj;
                cn.close();
            }
            catch (e) {
                throw new dataexception_1.DataException("Client could not be searched");
            }
        });
    }
    getAdmin(idcard) {
        return __awaiter(this, void 0, void 0, function* () {
            let admobj = null;
            try {
                let cn = yield Conection_1.Conexion.uri().connect();
                const collection = cn.db("ECommerce").collection("Admin");
                const Admin = yield collection.findOne({ _identitycard: idcard });
                if (Admin == null) {
                    return null;
                }
                admobj = new Administrator_1.Administrator(Admin._identitycard, Admin._completename, Admin._password, Admin._username, Admin._position);
                return admobj;
                cn.close();
            }
            catch (e) {
                throw new dataexception_1.DataException("Admin could not be searched");
            }
        });
    }
    loginAdmin(username, password) {
        return __awaiter(this, void 0, void 0, function* () {
            let admobj = null;
            try {
                let cn = yield Conection_1.Conexion.uri().connect();
                const collection = cn.db("ECommerce").collection("Admin");
                const Admin = yield collection.findOne({ _username: username, _password: password });
                if (Admin == null) {
                    return null;
                }
                admobj = new Administrator_1.Administrator(Admin._identitycard, Admin._completename, Admin._password, Admin._username, Admin._position);
                return admobj;
                cn.close();
            }
            catch (e) {
                throw new dataexception_1.DataException("Client could not be searched");
            }
        });
    }
    updateAdmin(dtadmin) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let cn = yield Conection_1.Conexion.uri().connect();
                let query = { _identitycard: dtadmin.identitycard };
                var newvalues = { $set: { _completename: dtadmin.completename,
                        _password: dtadmin.password,
                        _position: dtadmin.position,
                    } };
                const coladvert = cn.db("ECommerce").collection("Admin");
                const result = yield coladvert.updateOne(query, newvalues);
                cn.close();
            }
            catch (e) {
                throw new dataexception_1.DataException("Admin could not be updated" + e.message);
            }
        });
    }
    deleteAdmin(dtadmin) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let cn = yield Conection_1.Conexion.uri().connect();
                let query = { _identitycard: dtadmin.identitycard };
                const colcat = cn.db("ECommerce").collection("Admin");
                const result = yield colcat.deleteOne(query);
                cn.close();
            }
            catch (e) {
                throw new dataexception_1.DataException("Admin could not be deleted" + e.message);
            }
        });
    }
    getAdmins() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let cn = yield Conection_1.Conexion.uri().connect();
                const collection = cn.db("ECommerce").collection("Admin");
                const result = yield collection.find({}).toArray();
                let array = [];
                for (var Admin of result) {
                    var admobj = new Administrator_1.Administrator(Admin._identitycard, Admin._completename, Admin._password, Admin._username, Admin._position);
                    array.push(admobj);
                }
                return array;
                cn.close();
            }
            catch (e) {
                throw new dataexception_1.DataException("Admins could not be listed" + e.message);
            }
        });
    }
}
exports.DAdministrator = DAdministrator;
//# sourceMappingURL=DAdministrator.js.map