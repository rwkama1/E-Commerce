import { Category } from "../../shared/entity/Category";
import { DataException } from "../../shared/exceptions/dataexception";
import { Conexion } from "../Conection";
import { IDCategory } from "../interfaces/IDCategory";

export class DCategory implements IDCategory {

    private static instancia: DCategory;
    private constructor() { }
    public static getInstance(): DCategory {
        if (!DCategory.instancia) {
            DCategory.instancia = new DCategory();
        }

        return DCategory.instancia;
    }
    public async addCategory(dtcat: Category) {
        try {

           let cn = await Conexion.uri().connect();
            const collection = cn.db("ECommerce").collection("Category");
            const result = await collection.insertOne(dtcat);
            cn.close();

        }
        catch (e) {
            throw new DataException("Category could not be added" + e.message);
        }
    }
    public async updateCategory(dtcat: Category) {
        try {

            let cn = await Conexion.uri().connect();
            let query = { _name: dtcat.name };
            var newvalues = { $set: { _description: dtcat.description } };
            const coladvert = cn.db("ECommerce").collection("Category");
            const result = await coladvert.updateOne(query,newvalues);


            cn.close();

        }
        catch (e) {
            throw new DataException("Category could not be updated" + e.message);
        }

    }
    public async deleteCategory(dtcat: Category) {
        try {

            let cn = await Conexion.uri().connect();
            let query = { _name: dtcat.name };
            const colcat = cn.db("ECommerce").collection("Category");
            const result = await colcat.deleteOne(query);
            cn.close();

        }
        catch (e) {
            throw new DataException("Category could not be deleted" + e.message);
        }

    }
    public async getCategory(name:string) {

        let categoryobj= null;
        try {
            let cn = await Conexion.uri().connect();
            const collection = cn.db("ECommerce").collection("Category");
            const category = await collection.findOne({_name:name});

            if (category == null) { return null; }
            categoryobj = new Category(category._name,category._description);
            return categoryobj;
            cn.close();

        }
        catch (e) {
            throw new DataException("Category could not be searched");
        }

    }
    public async getCategorysByNameLetter(expression: string) {
   
        try {
            var cn = await Conexion.uri().connect();
            var query = { _name: { $regex: expression } }
            const collection = cn.db("ECommerce").collection("Category");
            const result = await collection.find(query).toArray();
    
            let array = [];
            for (var p of result) {
                var obj = new Category(p._name,p._description)
                array.push(obj);
            }
    
            return array;
            cn.close();
    
        }
        catch (e) {
            throw new DataException("Category could not be listed" + e.message);
        }
    
    }
    public async getCategories() {
      

        try {
            let cn = await Conexion.uri().connect();
            const collection = cn.db("ECommerce").collection("Category");
            const result = await collection.find({}).toArray();

            let array = [];
            for (var p of result) {
                var obj = new Category(p._name,p._description)
                array.push(obj);
            }

            return array;
            cn.close();

        }
        catch (e) {
            throw new DataException("Categories could not be listed" + e.message);
        }

    }
    
    
}

//TESTING
// var cat = new Category("Monitor",
// "Es aquel dispositivo usado por usuarios para que estos puedan comunicarse a través de diferentes partes del ordenador usando datos.En la actualidad existen muchos tipos de monitor de computadora y poseen funciones similares pero con una ejecución diferente");

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