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
exports.DArticle = void 0;
const Article_1 = require("../../shared/entity/Article");
const dataexception_1 = require("../../shared/exceptions/dataexception");
const Conection_1 = require("../Conection");
class DArticle {
    constructor() { }
    static getInstance() {
        if (!DArticle.instancia) {
            DArticle.instancia = new DArticle();
        }
        return DArticle.instancia;
    }
    addArticle(dtart) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let cn = yield Conection_1.Conexion.uri().connect();
                const collection = cn.db("ECommerce").collection("Article");
                const result = yield collection.insertOne(dtart);
                cn.close();
            }
            catch (e) {
                throw new dataexception_1.DataException("Article could not be added" + e.message);
            }
        });
    }
    getArticle(barcode) {
        return __awaiter(this, void 0, void 0, function* () {
            let artobj = null;
            try {
                let cn = yield Conection_1.Conexion.uri().connect();
                const collection = cn.db("ECommerce").collection("Article");
                const article = yield collection.findOne({ _barcode: barcode });
                if (article == null) {
                    return null;
                }
                artobj = new Article_1.Article(article._barcode, article._name, article._price, article._stock, article._description, article._img, article._category);
                return artobj;
                cn.close();
            }
            catch (e) {
                throw new dataexception_1.DataException("Article could not be searched");
            }
        });
    }
    updateArticle(dtart) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let cn = yield Conection_1.Conexion.uri().connect();
                let query = { _barcode: dtart.barcode };
                var newvalues = { $set: { _name: dtart.name,
                        _price: dtart.price,
                        _img: dtart.img,
                        _category: dtart.category,
                        _description: dtart.description,
                        _stock: dtart.stock } };
                const coladvert = cn.db("ECommerce").collection("Article");
                const result = yield coladvert.updateOne(query, newvalues);
                cn.close();
            }
            catch (e) {
                throw new dataexception_1.DataException("Article could not be updated" + e.message);
            }
        });
    }
}
exports.DArticle = DArticle;
//# sourceMappingURL=DArticle.js.map