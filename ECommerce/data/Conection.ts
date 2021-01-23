 import { MongoClient } from "mongodb";
import { DataException } from "../shared/exceptions/dataexception";

 export class Conexion {
    static _uri = "mongodb+srv://rwkamandriw:IF3JJQIm00NdGzcq@carlosrodriguezcluster.eaywr.mongodb.net/ECommerce?retryWrites=true&w=majority";
    static uri() {
        try {
         const clientcon = new MongoClient(this._uri, { useNewUrlParser: true, useUnifiedTopology: true })
         return clientcon;
        } catch (error) {
            throw new DataException("Could not connect to MongoDB" + error.message);
        }
       
    }
}



