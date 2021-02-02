"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FactoryData = void 0;
const DAdministrator_1 = require("./class/DAdministrator");
const DArticle_1 = require("./class/DArticle");
const DCategory_1 = require("./class/DCategory");
const DClient_1 = require("./class/DClient");
const DOrder_1 = require("./class/DOrder");
class FactoryData {
    static getDCategory() {
        return (DCategory_1.DCategory.getInstance());
    }
    static getDArticle() {
        return (DArticle_1.DArticle.getInstance());
    }
    static getDClient() {
        return (DClient_1.DClient.getInstance());
    }
    static getDAdmin() {
        return (DAdministrator_1.DAdministrator.getInstance());
    }
    static getDOrder() {
        return (DOrder_1.DOrder.getInstance());
    }
}
exports.FactoryData = FactoryData;
//# sourceMappingURL=FactoryData.js.map