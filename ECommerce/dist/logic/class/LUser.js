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
exports.LUser = void 0;
const FactoryData_1 = require("../../data/FactoryData");
const Administrator_1 = require("../../shared/entity/Administrator");
const Client_1 = require("../../shared/entity/Client");
const logicexception_1 = require("../../shared/exceptions/logicexception");
const bcrypt = require('bcrypt');
class LUser {
    constructor() { }
    static getInstance() {
        if (!LUser.instancia) {
            LUser.instancia = new LUser();
        }
        return LUser.instancia;
    }
    //Validations************************************
    validateIdCard(idcard) {
        var numbers = /^[0-9]+$/;
        if (!idcard.trim().match(numbers)) {
            throw new logicexception_1.LogicException("The identity card must have only numbers");
        }
        if (idcard.trim() === "") {
            throw new logicexception_1.LogicException("The identity card cannot be empty");
        }
    }
    validateLogin(username, password) {
        this.validateUserName(username);
        if (password.trim() === "") {
            throw new logicexception_1.LogicException("The password cannot be empty");
        }
    }
    validateUserName(username) {
        if (username.trim() === "") {
            throw new logicexception_1.LogicException("The username cannot be empty");
        }
    }
    validateAddUser(dtuser) {
        return __awaiter(this, void 0, void 0, function* () {
            if (dtuser == null) {
                throw new logicexception_1.LogicException("The User is empty ");
            }
            if (dtuser.completename.trim() === "") {
                throw new logicexception_1.LogicException("The complete name cannot be empty");
            }
            if (dtuser.password.trim() === "") {
                throw new logicexception_1.LogicException("The password cannot be empty");
            }
            if (dtuser instanceof Client_1.Client) {
                let client = dtuser;
                var numbers = /^[0-9]+$/;
                if (!client.creditcardnumber.trim().match(numbers)) {
                    throw new logicexception_1.LogicException("The credit card number must have only numbers");
                }
                if (client.creditcardnumber.trim() === "") {
                    throw new logicexception_1.LogicException("The credit card number cannot be empty");
                }
                if (client.shippingaddress.trim() === "") {
                    throw new logicexception_1.LogicException("The shipping address cannot be empty");
                }
            }
            if (dtuser instanceof Administrator_1.Administrator) {
                let admin = dtuser;
                if (admin.position.trim() === "") {
                    throw new logicexception_1.LogicException("The position cannot be empty");
                }
            }
            this.validateIdCard(dtuser.identitycard);
            this.validateUserName(dtuser.username);
            let idcardsearch = yield this.getUser(dtuser.identitycard);
            if (idcardsearch != null) {
                throw new logicexception_1.LogicException("That User already exists in the system");
            }
            let usernamesearch = yield this.getUserByusername(dtuser.username);
            if (usernamesearch != null) {
                throw new logicexception_1.LogicException("That User Name already exists in the system");
            }
        });
    }
    validateUpdateUser(dtuser) {
        return __awaiter(this, void 0, void 0, function* () {
            if (dtuser == null) {
                throw new logicexception_1.LogicException("The User is empty ");
            }
            if (dtuser.completename.trim() === "") {
                throw new logicexception_1.LogicException("The complete name cannot be empty");
            }
            if (dtuser.password.trim() === "") {
                throw new logicexception_1.LogicException("The password cannot be empty");
            }
            if (dtuser instanceof Client_1.Client) {
                let client = dtuser;
                var numbers = /^[0-9]+$/;
                if (!client.creditcardnumber.trim().match(numbers)) {
                    throw new logicexception_1.LogicException("The credit card number must have only numbers");
                }
                if (client.creditcardnumber.trim() === "") {
                    throw new logicexception_1.LogicException("The credit card number cannot be empty");
                }
                if (client.shippingaddress.trim() === "") {
                    throw new logicexception_1.LogicException("The shipping address cannot be empty");
                }
            }
            if (dtuser instanceof Administrator_1.Administrator) {
                let admin = dtuser;
                if (admin.position.trim() === "") {
                    throw new logicexception_1.LogicException("The position cannot be empty");
                }
            }
            this.validateIdCard(dtuser.identitycard);
            let idcardsearch = yield this.getUser(dtuser.identitycard);
            if (idcardsearch == null) {
                throw new logicexception_1.LogicException("That User does not exists in the system");
            }
        });
    }
    validateDeleteUser(dtuser) {
        return __awaiter(this, void 0, void 0, function* () {
            if (dtuser == null) {
                throw new logicexception_1.LogicException("The User is empty ");
            }
            this.validateIdCard(dtuser.identitycard);
            let sobjcli = yield this.getUser(dtuser.identitycard);
            if (sobjcli == null) {
                throw new logicexception_1.LogicException("That User does not exists in the system");
            }
        });
    }
    //********************************************** */
    //USER
    getUser(idcard) {
        return __awaiter(this, void 0, void 0, function* () {
            this.validateIdCard(idcard);
            var suser;
            suser = yield FactoryData_1.FactoryData.getDClient().getClient(idcard);
            if (suser == null) {
                suser = yield FactoryData_1.FactoryData.getDAdmin().getAdmin(idcard);
            }
            return suser;
        });
    }
    getUserByusername(username) {
        return __awaiter(this, void 0, void 0, function* () {
            this.validateUserName(username);
            var suser;
            suser = yield FactoryData_1.FactoryData.getDClient().getClientbyusername(username);
            if (suser == null) {
                suser = yield FactoryData_1.FactoryData.getDAdmin().getAdminbyusername(username);
            }
            return suser;
        });
    }
    addUser(dtuser) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.validateAddUser(dtuser);
            var hashedpassword = yield bcrypt.hash(dtuser.password, 5);
            dtuser.password = hashedpassword;
            if (dtuser instanceof Client_1.Client) {
                FactoryData_1.FactoryData.getDClient().addClient(dtuser);
            }
            if (dtuser instanceof Administrator_1.Administrator) {
                FactoryData_1.FactoryData.getDAdmin().addAdmin(dtuser);
            }
        });
    }
    updateUser(dtuser) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.validateUpdateUser(dtuser);
            var hashedpassword = yield bcrypt.hash(dtuser.password, 5);
            dtuser.password = hashedpassword;
            if (dtuser instanceof Client_1.Client) {
                FactoryData_1.FactoryData.getDClient().updateClient(dtuser);
            }
            if (dtuser instanceof Administrator_1.Administrator) {
                FactoryData_1.FactoryData.getDAdmin().updateAdmin(dtuser);
            }
        });
    }
    deleteUser(dtuser) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.validateDeleteUser(dtuser);
            if (dtuser instanceof Client_1.Client) {
                FactoryData_1.FactoryData.getDClient().deleteClient(dtuser);
            }
            if (dtuser instanceof Administrator_1.Administrator) {
                FactoryData_1.FactoryData.getDAdmin().deleteAdmin(dtuser);
            }
        });
    }
    loginUser(username, password) {
        return __awaiter(this, void 0, void 0, function* () {
            this.validateLogin(username, password);
            var suser;
            suser = yield FactoryData_1.FactoryData.getDClient().getClientbyusername(username);
            if (suser == null) {
                suser = yield FactoryData_1.FactoryData.getDAdmin().getAdminbyusername(username);
            }
            if (suser) {
                var match = yield bcrypt.compare(password, suser.password);
                if (match) {
                    return suser;
                }
                else {
                    throw new logicexception_1.LogicException("Incorrect password");
                }
            }
            else {
                throw new logicexception_1.LogicException("That User does not exist in the system");
            }
        });
    }
    getClients() {
        return __awaiter(this, void 0, void 0, function* () {
            var list = yield FactoryData_1.FactoryData.getDClient().getClients();
            return list;
        });
    }
    getAdmins() {
        return __awaiter(this, void 0, void 0, function* () {
            var list = yield FactoryData_1.FactoryData.getDAdmin().getAdmins();
            return list;
        });
    }
}
exports.LUser = LUser;
//# sourceMappingURL=LUser.js.map