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
            let objart = yield this.getArticle(dtart.barcode);
            if (dtart == null) {
                throw new logicexception_1.LogicException("The Article is empty ");
            }
            if (objart != null) {
                throw new logicexception_1.LogicException("That Article already exists in the system");
            }
            if (dtart.description.trim() === "") {
                throw new logicexception_1.LogicException("The description cannot be empty");
            }
            if (dtart.img.trim() === "") {
                throw new logicexception_1.LogicException("The img cannot be empty");
            }
            if (dtart.img.trim().match(/\.(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF)$/)) {
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
    // private  async validateUpdateCategory(dtcat:Category)
    // {
    //     this.validateName(dtcat.name);
    //     let objsearchcat = await this.getCategory(dtcat.name);
    //     if (dtcat == null)
    //     {
    //         throw new LogicException("The Category is empty ");
    //     }
    //     if (objsearchcat == null) {
    //         throw new LogicException("That Category does not exists in the system");
    //     }
    //     if (dtcat.description.trim() === "")
    //     {
    //         throw new LogicException("The description cannot be empty");
    //     }
    // }
    // private  async validateDeleteCategory(dtcat:Category)
    // {
    //     this.validateName(dtcat.name);
    //     let objsearchcat = await this.getCategory(dtcat.name);
    //     if (dtcat === null)
    //     {
    //         throw new LogicException("The Category is empty ");
    //     }
    //     if (objsearchcat === null) {
    //         throw new LogicException("That Category does not exists in the system");
    //     }
    // }
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
}
exports.LArticle = LArticle;
//# sourceMappingURL=LArticle.js.map