import { Article } from "../../shared/entity/Article";
import { Category } from "../../shared/entity/Category";
import { DataException } from "../../shared/exceptions/dataexception";
import { Conexion } from "../Conection";
import { IDArticle } from "../interfaces/IDArticle";

export class DArticle implements IDArticle {

    private static instancia: DArticle;
    private constructor() { }
    public static getInstance(): DArticle {
        if (!DArticle.instancia) {
            DArticle.instancia = new DArticle();
        }

        return DArticle.instancia;
    }
    public async addArticle(dtart: Article) {
        try {

           let cn = await Conexion.uri().connect();
            const collection = cn.db("ECommerce").collection("Article");
            const result = await collection.insertOne(dtart);
            cn.close();

        }
        catch (e) {
            throw new DataException("Article could not be added" + e.message);
        }
    }
     public async getArticle(barcode:string) {

        let artobj= null;
        try {
            let cn = await Conexion.uri().connect();
            const collection = cn.db("ECommerce").collection("Article");
            const article = await collection.findOne({_barcode:barcode});

            if (article == null) { return null; }
             artobj = new Article(article._barcode,
                article._name,article._price,article._stock,article._description,article._img,
                article._category
               );
            return artobj;
            cn.close();

        }
        catch (e) {
            throw new DataException("Article could not be searched");
        }

    }
    public async updateArticle(dtart: Article) {
        try {

            let cn = await Conexion.uri().connect();
            let query = { _barcode: dtart.barcode };
            var newvalues = { $set: { _name: dtart.name,
                _price: dtart.price,
                _img: dtart.img,
                _category: dtart.category,
                _description: dtart.description
               } };
            const coladvert = cn.db("ECommerce").collection("Article");
            const result = await coladvert.updateOne(query,newvalues);


            cn.close();

        }
        catch (e) {
            throw new DataException("Article could not be updated" + e.message);
        }

    }
    public async deleteArticle(dtart: Article) {
        try {

            let cn = await Conexion.uri().connect();
            let query = { _barcode: dtart.barcode };
            const colcat = cn.db("ECommerce").collection("Article");
            const result = await colcat.deleteOne(query);
            cn.close();

        }
        catch (e) {
            throw new DataException("Article could not be deleted" + e.message);
        }

    }
    public async updateStock(dtart: Article) {
        try {

            let cn = await Conexion.uri().connect();
            let query = { _barcode: dtart.barcode };
            var newvalues = { $set: { 
                _stock: dtart.stock
               } };
            const coladvert = cn.db("ECommerce").collection("Article");
            const result = await coladvert.updateOne(query,newvalues);


            cn.close();

        }
        catch (e) {
            throw new DataException("Article could not be updated" + e.message);
        }

    }
   //****************************************** */
    public async getArticlesByNameLetter(expression: string) {
   
        try {
            var cn = await Conexion.uri().connect();
            var query = { _name: { $regex: expression } }
            const collection = cn.db("ECommerce").collection("Article");
            const result = await collection.find(query).toArray();
    
            let array = [];
            for (var article of result) {
                var artobj = new Article(article._barcode,
                    article._name,article._price,article._stock,article._description,article._img,
                    article._category
                   );
                   array.push(artobj);
            }
    
            return array;
            cn.close();
    
        }
        catch (e) {
            throw new DataException("Articles could not be listed" + e.message);
        }
    
    }
    public async getArticles() {
      

        try {
            let cn = await Conexion.uri().connect();
            const collection = cn.db("ECommerce").collection("Article");
            const result = await collection.find({}).toArray();

            let array = [];
            for (var article of result) {
                var artobj = new Article(article._barcode,
                    article._name,article._price,article._stock,article._description,article._img,
                    article._category
                   );
                   array.push(artobj);
            }

            return array;
            cn.close();

        }
        catch (e) {
            throw new DataException("Articles could not be listed" + e.message);
        }

    }
    public async orderArticlesbyPrice() {
      

        try {
            let cn = await Conexion.uri().connect();
            const collection = cn.db("ECommerce").collection("Article");
            const result = await collection.find({}).sort({ _price : 1 }).toArray();

            let array = [];
            for (var article of result) {
                var artobj = new Article(article._barcode,
                    article._name,article._price,article._stock,article._description,article._img,
                    article._category
                   );
                   array.push(artobj);
            }

            return array;
            cn.close();

        }
        catch (e) {
            throw new DataException("Articles could not be listed" + e.message);
        }

    }
    public async orderArticlesbyCategory() {
      

        try {
            
            let cn = await Conexion.uri().connect();
            const collection = cn.db("ECommerce").collection("Article");
            const result = await collection.find({}).sort({ _category : 1 }).toArray();

            let array = [];
            for (var article of result) {
                var artobj = new Article(article._barcode,
                    article._name,article._price,article._stock,article._description,article._img,
                    article._category
                   );
                   array.push(artobj);
            }

            return array;
            cn.close();

        }
        catch (e) {
            throw new DataException("Articles could not be listed" + e.message);
        }

    }
    public async filterArticlesbyCategory(namecategory:string) {
      

        try {
            
            let cn = await Conexion.uri().connect();
            const collection = cn.db("ECommerce").collection("Article");
            const result = await collection.find({"_category._name" : namecategory }).toArray();

            let array = [];
            for (var article of result) {
                var artobj = new Article(article._barcode,
                    article._name,article._price,article._stock,article._description,article._img,
                    article._category
                   );
                   array.push(artobj);
            }

            return array;
            cn.close();

        }
        catch (e) {
            throw new DataException("Articles could not be listed" + e.message);
        }

    }
    
}
