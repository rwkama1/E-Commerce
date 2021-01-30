import { Client } from "../../shared/entity/Client";
import { DataException } from "../../shared/exceptions/dataexception";
import { Conexion } from "../Conection";
import { IDClient } from "../interfaces/IDClient";


export class DClient implements IDClient {

    private static instancia: DClient;
    private constructor() { }
    public static getInstance(): DClient {
        if (!DClient.instancia) {
            DClient.instancia = new DClient();
        }

        return DClient.instancia;
    }
    public async addClient(dtclient: Client) {
        try {

           let cn = await Conexion.uri().connect();
            const collection = cn.db("ECommerce").collection("Client");
            const result = await collection.insertOne(dtclient);
            cn.close();

        }
        catch (e) {
            throw new DataException("Client could not be added" + e.message);
        }
    }
     public async getClient(idcard:string) {

        let cliobj= null;
        try {
            let cn = await Conexion.uri().connect();
            const collection = cn.db("ECommerce").collection("Client");
            const client = await collection.findOne({_identitycard:idcard});

            if (client == null) 
            { return null; }
            cliobj = new Client(client._identitycard,
                client._completename,client._password,client._username,client._shippingaddress,
                client._creditcardnumber
               );
            return cliobj;
            cn.close();

        }
        catch (e) {
            throw new DataException("Client could not be searched");
        }

    }
    public async getClientbyusername(username:string) {

        let cliobj= null;
        try {
            let cn = await Conexion.uri().connect();
            const collection = cn.db("ECommerce").collection("Client");
            const client = await collection.findOne({_username:username});

            if (client == null) 
            { return null; }
           
            cliobj = new Client(client._identitycard,
                client._completename,client._password,
                client._username,client._shippingaddress,
                client._creditcardnumber
               );
           
            return cliobj;
            cn.close();

        }
        catch (e) {
            throw new DataException("Client could not be searched");
        }

    }
    
    // public async updateArticle(dtart: Article) {
    //     try {

    //         let cn = await Conexion.uri().connect();
    //         let query = { _barcode: dtart.barcode };
    //         var newvalues = { $set: { _name: dtart.name,
    //             _price: dtart.price,
    //             _img: dtart.img,
    //             _category: dtart.category,
    //             _description: dtart.description
    //            } };
    //         const coladvert = cn.db("ECommerce").collection("Article");
    //         const result = await coladvert.updateOne(query,newvalues);


    //         cn.close();

    //     }
    //     catch (e) {
    //         throw new DataException("Article could not be updated" + e.message);
    //     }

    // }
    // public async deleteArticle(dtart: Article) {
    //     try {

    //         let cn = await Conexion.uri().connect();
    //         let query = { _barcode: dtart.barcode };
    //         const colcat = cn.db("ECommerce").collection("Article");
    //         const result = await colcat.deleteOne(query);
    //         cn.close();

    //     }
    //     catch (e) {
    //         throw new DataException("Article could not be deleted" + e.message);
    //     }

    // }
    // public async updateStock(dtart: Article) {
    //     try {

    //         let cn = await Conexion.uri().connect();
    //         let query = { _barcode: dtart.barcode };
    //         var newvalues = { $set: { 
    //             _stock: dtart.stock
    //            } };
    //         const coladvert = cn.db("ECommerce").collection("Article");
    //         const result = await coladvert.updateOne(query,newvalues);


    //         cn.close();

    //     }
    //     catch (e) {
    //         throw new DataException("Article could not be updated" + e.message);
    //     }

    // }
}