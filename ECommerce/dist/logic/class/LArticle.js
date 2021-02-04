"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LArticle = void 0;
const FactoryData_1 = require("../../data/FactoryData");
const logicexception_1 = require("../../shared/exceptions/logicexception");
const LCategory_1 = require("./LCategory");
class LArticle {
    constructor() { }
    static getInstance() {
        if (!LArticle.instancia) {
            LArticle.instancia = new LArticle();
        }
        return LArticle.instancia;
    }
    //Validations
    //************************************
    validateBarCode(barcode) {
        if (barcode.trim() === "") {
            throw new logicexception_1.LogicException("The barcode cannot be empty");
        }
    }
    validateAddArticle(dtart) {
        return __awaiter(this, void 0, void 0, function* () {
            this.validateBarCode(dtart.barcode);
            if (dtart.category == null) {
                throw new logicexception_1.LogicException("The Category is null");
            }
            var searobjcat = yield LCategory_1.LCategory.getInstance().getCategory(dtart.category.name);
            if (searobjcat == null) {
                throw new logicexception_1.LogicException("That Category does not exists in the system");
            }
            var objart = yield this.getArticle(dtart.barcode);
            if (objart != null) {
                throw new logicexception_1.LogicException("That Article already exists in the system");
            }
            if (dtart == null) {
                throw new logicexception_1.LogicException("The Article is empty ");
            }
            if (dtart.description.trim() === "") {
                throw new logicexception_1.LogicException("The description cannot be empty");
            }
            if (dtart.img.trim() === "") {
                throw new logicexception_1.LogicException("The img cannot be empty");
            }
            if (!(dtart.img.trim().match(/\.(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF)$/))) {
                throw new logicexception_1.LogicException("Only images files are allowed");
            }
            if (dtart.name.trim() === "") {
                throw new logicexception_1.LogicException("The name cannot be empty");
            }
            if (dtart.price < 1) {
                throw new logicexception_1.LogicException("The price must be greater than 0");
            }
            if (dtart.stock < 1) {
                throw new logicexception_1.LogicException("The stock must be greater than 0");
            }
        });
    }
    validateUpdateArticle(dtart) {
        return __awaiter(this, void 0, void 0, function* () {
            this.validateBarCode(dtart.barcode);
            if (dtart.category == null) {
                throw new logicexception_1.LogicException("The Category is null");
            }
            var searobjcat = yield LCategory_1.LCategory.getInstance().getCategory(dtart.category.name);
            if (searobjcat == null) {
                throw new logicexception_1.LogicException("That Category does not exists in the system");
            }
            var objart = yield this.getArticle(dtart.barcode);
            if (objart == null) {
                throw new logicexception_1.LogicException("That Article does not exists in the system");
            }
            if (dtart == null) {
                throw new logicexception_1.LogicException("The Article is empty ");
            }
            if (dtart.description.trim() === "") {
                throw new logicexception_1.LogicException("The description cannot be empty");
            }
            if (dtart.img.trim() === "") {
                throw new logicexception_1.LogicException("The img cannot be empty");
            }
            if (!(dtart.img.trim().match(/\.(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF)$/))) {
                throw new logicexception_1.LogicException("Only images files are allowed");
            }
            if (dtart.name.trim() === "") {
                throw new logicexception_1.LogicException("The name cannot be empty");
            }
            if (dtart.price < 1) {
                throw new logicexception_1.LogicException("The price must be greater than 0");
            }
            if (dtart.stock < 1) {
                throw new logicexception_1.LogicException("The stock must be greater than 0");
            }
        });
    }
    validateDeleteArticle(dtart) {
        return __awaiter(this, void 0, void 0, function* () {
            this.validateBarCode(dtart.barcode);
            let sobjart = yield this.getArticle(dtart.barcode);
            if (dtart == null) {
                throw new logicexception_1.LogicException("The Article is empty ");
            }
            if (sobjart == null) {
                throw new logicexception_1.LogicException("That Article does not exists in the system");
            }
        });
    }
    validatequantity(quantity) {
        if (quantity < 1) {
            throw new logicexception_1.LogicException("The quantity must be greater than 0");
        }
    }
    //*********************************************** */
    //Functions
    getArticle(barcode) {
        return __awaiter(this, void 0, void 0, function* () {
            this.validateBarCode(barcode);
            var sarticle = yield FactoryData_1.FactoryData.getDArticle().getArticle(barcode);
            return sarticle;
        });
    }
    addArticle(dtart) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.validateAddArticle(dtart);
            FactoryData_1.FactoryData.getDArticle().addArticle(dtart);
        });
    }
    updateArticle(dtart) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.validateUpdateArticle(dtart);
            FactoryData_1.FactoryData.getDArticle().updateArticle(dtart);
        });
    }
    deleteArticle(dtart) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.validateDeleteArticle(dtart);
            FactoryData_1.FactoryData.getDArticle().deleteArticle(dtart);
        });
    }
    registerStock(barcode, quantity) {
        return __awaiter(this, void 0, void 0, function* () {
            this.validatequantity(quantity);
            var searcharticle = yield this.getArticle(barcode);
            if (searcharticle == null) {
                throw new logicexception_1.LogicException("That Article does not exists in the system");
            }
            searcharticle.stock += quantity;
            FactoryData_1.FactoryData.getDArticle().updateStock(searcharticle);
        });
    }
    deStock(barcode, quantity) {
        return __awaiter(this, void 0, void 0, function* () {
            this.validatequantity(quantity);
            var searcharticle = yield this.getArticle(barcode);
            if (searcharticle == null) {
                throw new logicexception_1.LogicException("That Article does not exists in the system");
            }
            searcharticle.stock -= quantity;
            FactoryData_1.FactoryData.getDArticle().updateStock(searcharticle);
        });
    }
    getArticlesByNameLetter(expression) {
        return __awaiter(this, void 0, void 0, function* () {
            if (expression === undefined) {
                return this.getArticles();
            }
            var listexp = yield FactoryData_1.FactoryData.getDArticle().getArticlesByNameLetter(expression);
            return listexp;
        });
    }
    getArticles() {
        return __awaiter(this, void 0, void 0, function* () {
            var list = yield FactoryData_1.FactoryData.getDArticle().getArticles();
            return list;
        });
    }
    orderArticlesbyPrice() {
        return __awaiter(this, void 0, void 0, function* () {
            var list = yield FactoryData_1.FactoryData.getDArticle().orderArticlesbyPrice();
            return list;
        });
    }
    orderArticlesbyCategory() {
        return __awaiter(this, void 0, void 0, function* () {
            var list = yield FactoryData_1.FactoryData.getDArticle().orderArticlesbyCategory();
            return list;
        });
    }
    filterArticlesbyCategory(namecategory) {
        return __awaiter(this, void 0, void 0, function* () {
            var searchcat = yield LCategory_1.LCategory.getInstance().getCategory(namecategory);
            if (searchcat == null) {
                throw new logicexception_1.LogicException("That Category does not exists in the system");
            }
            var list = yield FactoryData_1.FactoryData.getDArticle().filterArticlesbyCategory(namecategory);
            return list;
        });
    }
}
exports.LArticle = LArticle;
//# sourceMappingURL=LArticle.js.map