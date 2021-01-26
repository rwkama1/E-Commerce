"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FactoryData = void 0;
const DArticle_1 = require("./class/DArticle");
const DCategory_1 = require("./class/DCategory");
class FactoryData {
    static getDCategory() {
        return (DCategory_1.DCategory.getInstance());
    }
    static getDArticle() {
        return (DArticle_1.DArticle.getInstance());
    }
}
exports.FactoryData = FactoryData;
//# sourceMappingURL=FactoryData.js.map