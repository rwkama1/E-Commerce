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
exports.LCategory = void 0;
const FactoryData_1 = require("../../data/FactoryData");
const logicexception_1 = require("../../shared/exceptions/logicexception");
class LCategory {
    constructor() { }
    static getInstance() {
        if (!LCategory.instancia) {
            LCategory.instancia = new LCategory();
        }
        return LCategory.instancia;
    }
    validateName(name) {
        if (name.trim() === "") {
            throw new logicexception_1.LogicException("The name cannot be empty");
        }
    }
    validateAddCategory(dtcat) {
        return __awaiter(this, void 0, void 0, function* () {
            this.validateName(dtcat.name);
            let objsearchcat = yield this.getCategory(dtcat.name);
            if (dtcat == null) {
                throw new logicexception_1.LogicException("The Category is empty ");
            }
            if (objsearchcat != null) {
                throw new logicexception_1.LogicException("That Category already exists in the system");
            }
            if (dtcat.description.trim() === "") {
                throw new logicexception_1.LogicException("The description cannot be empty");
            }
        });
    }
    validateUpdateCategory(dtcat) {
        return __awaiter(this, void 0, void 0, function* () {
            this.validateName(dtcat.name);
            let objsearchcat = yield this.getCategory(dtcat.name);
            if (dtcat == null) {
                throw new logicexception_1.LogicException("The Category is empty ");
            }
            if (objsearchcat == null) {
                throw new logicexception_1.LogicException("That Category does not exists in the system");
            }
            if (dtcat.description.trim() === "") {
                throw new logicexception_1.LogicException("The description cannot be empty");
            }
        });
    }
    getCategory(name) {
        return __awaiter(this, void 0, void 0, function* () {
            this.validateName(name);
            var searchcategory = yield FactoryData_1.FactoryData.getDCategory().getCategory(name);
            return searchcategory;
        });
    }
    addCategory(dtcategory) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.validateAddCategory(dtcategory);
            FactoryData_1.FactoryData.getDCategory().addCategory(dtcategory);
        });
    }
    updateCategory(dtcategory) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.validateUpdateCategory(dtcategory);
            FactoryData_1.FactoryData.getDCategory().updateCategory(dtcategory);
        });
    }
}
exports.LCategory = LCategory;
// var cat = new Category("Monitor",
// "Es aquel dispositivo usado por usuarios para que estos puedan comunicarse a través de diferentes partes del ordenador usando datos.En la actualidad existen muchos tipos de monitor de computadora y poseen funciones similares pero con una ejecución diferente");
// var cat = new Category("Conectividad",
//  "Es la capacidad de un dispositivo de conectarse y comunicarse con otro");
// LCategory.getInstance().updateCategory(cat).then(data => {
//    console.log(data)
// });
//# sourceMappingURL=LCategory.js.map