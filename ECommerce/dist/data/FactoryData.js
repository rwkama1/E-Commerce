"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FactoryData = void 0;
const DCategory_1 = require("./class/DCategory");
class FactoryData {
    static getDCategory() {
        return (DCategory_1.DCategory.getInstance());
    }
}
exports.FactoryData = FactoryData;
//# sourceMappingURL=FactoryData.js.map