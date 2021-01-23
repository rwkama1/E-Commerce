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
}
exports.DCategory = DCategory;
//TESTING
var cat = new Category_1.Category("Monitor", "Es aquel dispositivo usado por usuarios para que estos puedan comunicarse a través de diferentes partes del ordenador usando datos.En la actualidad existen muchos tipos de monitor de computadora y poseen funciones similares pero con una ejecución diferente");
// DCategory.getInstance().addCategory(cat).then(data => {
//    console.log(data)
// });
// DCategory.getInstance().getCategory(cat.name).then(data => {
//     console.log(data)
//  });
// public async getAdvertisers(): Promise<Advertiser[]> {
//     try {
//         let cn = await Conexion.uri().connect();
//         const collection = cn.db("RadioTransmitter").collection("Advertiser");
//         const result = await collection.find({}).toArray();
//         let array = [];
//         for (var p of result) {
//             var obj = new Advertiser(p.RutAn,p.NomAn,p.DirAn,p.TelAn)
//             array.push(obj);
//         }
//         return array;
//         cn.close();
//     }
//     catch (e) {
//         throw new DataException("Advertisers could not be listed" + e.message);
//     }
// }
//     public async getAdvertisersByNameLetter(expression: string):Promise<Advertiser[]> {
//     try {
//         var cn = await Conexion.uri().connect();
//         var query = { NomAn: { $regex: expression } }
//         const collection = cn.db("RadioTransmitter").collection("Advertiser");
//         const result = await collection.find(query).toArray();
//         let array = [];
//         for (var p of result) {
//             var obj = new Advertiser(p.RutAn, p.NomAn, p.DirAn, p.TelAn)
//             array.push(obj);
//         }
//         return array;
//         cn.close();
//     }
//     catch (e) {
//         throw new DataException("Advertisers could not be listed" + e.message);
//     }
// }
// public async deleteAdvertiser(dtadvertiser: Advertiser) {
//     try {
//         var myquery = { RutAn: dtadvertiser.RutAnn };
//         let cn = await Conexion.uri().connect();
//         const coladvert = cn.db("RadioTransmitter").collection("Advertiser");
//         const result = await coladvert.deleteOne(myquery);
//         cn.close();
//     }
//     catch (e) {
//         throw new DataException("Advertiser could not be deleted" + e.message);
//     }
// }
// public async updateAdvertiser(dtadvertiser: Advertiser) {
//     try {
//         let cn = await Conexion.uri().connect();
//         let query = { RutAn: dtadvertiser.RutAnn };
//         var newvalues = { $set: { NomAn: dtadvertiser.NomAnn, DirAn: dtadvertiser.DirAnn,TelAn:dtadvertiser.TelAnn } };
//         const coladvert = cn.db("RadioTransmitter").collection("Advertiser");
//         const result = await coladvert.updateOne(query,newvalues);
//         cn.close();
//     }
//     catch (e) {
//         throw new DataException("Advertiser could not be updated" + e.message);
//     }
//     }
// }
//# sourceMappingURL=DCategory.js.map