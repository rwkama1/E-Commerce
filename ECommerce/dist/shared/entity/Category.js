"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Category = void 0;
class Category {
    constructor(pname, pdescription) {
        this._name = "";
        this._description = "";
        this.name = pname;
        this.description = pdescription;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get description() {
        return this._description;
    }
    set description(value) {
        this._description = value;
    }
}
exports.Category = Category;
//# sourceMappingURL=Category.js.map