"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(pidentitycard, pcompletename, ppasword, pusername) {
        this._identitycard = "";
        this._password = "";
        this._username = "";
        this._completename = "";
        this.identitycard = pidentitycard;
        this.username = pusername;
        this.completename = pcompletename;
        this.password = ppasword;
    }
    get identitycard() {
        return this._identitycard;
    }
    set identitycard(value) {
        this._identitycard = value;
    }
    get completename() {
        return this._completename;
    }
    set completename(value) {
        this._completename = value;
    }
    get username() {
        return this._username;
    }
    set username(value) {
        this._username = value;
    }
    get password() {
        return this._password;
    }
    set password(value) {
        this._password = value;
    }
}
exports.User = User;
//# sourceMappingURL=User.js.map