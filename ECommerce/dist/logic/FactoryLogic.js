"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FactoryLogic = void 0;
const LCategory_1 = require("./class/LCategory");
class FactoryLogic {
    static getLCategory() {
        return (LCategory_1.LCategory.getInstance());
    }
}
exports.FactoryLogic = FactoryLogic;
//# sourceMappingURL=FactoryLogic.js.map