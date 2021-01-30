"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FactoryLogic = void 0;
const LArticle_1 = require("./class/LArticle");
const LCategory_1 = require("./class/LCategory");
const LUser_1 = require("./class/LUser");
class FactoryLogic {
    static getLCategory() {
        return (LCategory_1.LCategory.getInstance());
    }
    static getLArticle() {
        return (LArticle_1.LArticle.getInstance());
    }
    static getLUser() {
        return (LUser_1.LUser.getInstance());
    }
}
exports.FactoryLogic = FactoryLogic;
//# sourceMappingURL=FactoryLogic.js.map