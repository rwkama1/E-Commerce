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
exports.DCategory = void 0;
const Category_1 = require("../../shared/entity/Category");
const dataexception_1 = require("../../shared/exceptions/dataexception");
const Conection_1 = require("../Conection");
class DCategory {
    constructor() { }
    static getInstance() {
        if (!DCategory.instancia) {
            DCategory.instancia = new DCategory();
        }
        return DCategory.instancia;
    }
    addCategory(dtcat) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let cn = yield Conection_1.Conexion.uri().connect();
                const collection = cn.db("ECommerce").collection("Category");
                const result = yield collection.insertOne(dtcat);
                cn.close();
            }
            catch (e) {
                throw new dataexception_1.DataException("Category could not be added" + e.message);
            }
        });
    }
    updateCategory(dtcat) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let cn = yield Conection_1.Conexion.uri().connect();
                let query = { _name: dtcat.name };
                var newvalues = { $set: { _description: dtcat.description } };
                const coladvert = cn.db("ECommerce").collection("Category");
                const result = yield coladvert.updateOne(query, newvalues);
                cn.close();
            }
            catch (e) {
                throw new dataexception_1.DataException("Category could not be updated" + e.message);
            }
        });
    }
    deleteCategory(dtcat) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let cn = yield Conection_1.Conexion.uri().connect();
                let query = { _name: dtcat.name };
                const colcat = cn.db("ECommerce").collection("Category");
                const result = yield colcat.deleteOne(query);
                cn.close();
            }
            catch (e) {
                throw new dataexception_1.DataException("Category could not be deleted" + e.message);
            }
        });
    }
    getCategory(name) {
        return __awaiter(this, void 0, void 0, function* () {
            let categoryobj = null;
            try {
                let cn = yield Conection_1.Conexion.uri().connect();
                const collection = cn.db("ECommerce").collection("Category");
                const category = yield collection.findOne({ _name: name });
                if (category == null) {
                    return null;
                }
                categoryobj = new Category_1.Category(category._name, category._description);
                return categoryobj;
                cn.close();
            }
            catch (e) {
                throw new dataexception_1.DataException("Category could not be searched");
            }
        });
    }
    getCategorysByNameLetter(expression) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                var cn = yield Conection_1.Conexion.uri().connect();
                var query = { _name: { $regex: expression } };
                const collection = cn.db("ECommerce").collection("Category");
                const result = yield collection.find(query).toArray();
                let array = [];
                for (var p of result) {
                    var obj = new Category_1.Category(p._name, p._description);
                    array.push(obj);
                }
                return array;
                cn.close();
            }
            catch (e) {
                throw new dataexception_1.DataException("Category could not be listed" + e.message);
            }
        });
    }
    getCategories() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let cn = yield Conection_1.Conexion.uri().connect();
                const collection = cn.db("ECommerce").collection("Category");
                const result = yield collection.find({}).toArray();
                let array = [];
                for (var p of result) {
                    var obj = new Category_1.Category(p._name, p._description);
                    array.push(obj);
                }
                return array;
                cn.close();
            }
            catch (e) {
                throw new dataexception_1.DataException("Categories could not be listed" + e.message);
            }
        });
    }
}
exports.DCategory = DCategory;
//# sourceMappingURL=DCategory.js.map