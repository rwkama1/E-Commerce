"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FactoryLogic = void 0;
const LArticle_1 = require("./class/LArticle");
const LCategory_1 = require("./class/LCategory");
class FactoryLogic {
    static getLCategory() {
        return (LCategory_1.LCategory.getInstance());
    }
    static getLArticle() {
        return (LArticle_1.LArticle.getInstance());
    }
}
exports.FactoryLogic = FactoryLogic;
//# sourceMappingURL=FactoryLogic.js.map