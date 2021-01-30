"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
const User_1 = require("./User");
class Client extends User_1.User {
    constructor(pidentitycard, pcompletename, ppasword, pusername, pshippingaddress, pcreditcard) {
        super(pidentitycard, pcompletename, ppasword, pusername);
        this._shippingaddress = "";
        this._creditcardnumber = "";
        this.shippingaddress = pshippingaddress;
        this.creditcardnumber = pcreditcard;
    }
    get shippingaddress() {
        return this._shippingaddress;
    }
    set shippingaddress(value) {
        this._shippingaddress = value;
    }
    get creditcardnumber() {
        return this._creditcardnumber;
    }
    set creditcardnumber(value) {
        this._creditcardnumber = value;
    }
}
exports.Client = Client;
//# sourceMappingURL=Client.js.map