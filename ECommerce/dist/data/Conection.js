"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Conexion = void 0;
const mongodb_1 = require("mongodb");
const dataexception_1 = require("../shared/exceptions/dataexception");
class Conexion {
    static uri() {
        try {
            const clientcon = new mongodb_1.MongoClient(this._uri, { useNewUrlParser: true, useUnifiedTopology: true });
            return clientcon;
        }
        catch (error) {
            throw new dataexception_1.DataException("Could not connect to MongoDB" + error.message);
        }
    }
}
exports.Conexion = Conexion;
Conexion._uri = "mongodb+srv://rwkamandriw:IF3JJQIm00NdGzcq@carlosrodriguezcluster.eaywr.mongodb.net/ECommerce?retryWrites=true&w=majority";
//# sourceMappingURL=Conection.js.map