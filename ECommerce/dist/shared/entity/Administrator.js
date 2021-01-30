"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Administrator = void 0;
const User_1 = require("./User");
class Administrator extends User_1.User {
    constructor(pidentitycard, pcompletename, ppasword, pusername, pposition) {
        super(pidentitycard, pcompletename, ppasword, pusername);
        this._position = "";
        this.position = pposition;
    }
    get position() {
        return this._position;
    }
    set position(value) {
        this._position = value;
    }
}
exports.Administrator = Administrator;
//# sourceMappingURL=Administrator.js.map