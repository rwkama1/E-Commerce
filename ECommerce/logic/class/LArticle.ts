import { FactoryData } from "../../data/FactoryData";
import { Article } from "../../shared/entity/Article";
import { Category } from "../../shared/entity/Category";
import { LogicException } from "../../shared/exceptions/logicexception";
import { ILArticle } from "../interfaces/ILArticle";
import { LCategory } from "./LCategory";

export class LArticle implements ILArticle {

    private static instancia: LArticle;
    private constructor() { }
    public static getInstance(): LArticle {
        if (!LArticle.instancia) {
            LArticle.instancia = new LArticle();
        }

        return LArticle.instancia;
    }
    //Validations
    //************************************
    private validateBarCode(barcode: string)
    {
        if (barcode.trim() === "") {
            throw new LogicException("The barcode cannot be empty");
        }
    }
    private  async validateAddArticle(dtart:Article)
    {
        this.validateBarCode(dtart.barcode);
        if (dtart.category==null)
        {
            throw new LogicException("The Category is null");
        }
        var searobjcat=await LCategory.getInstance().getCategory(dtart.category.name);
        if (searobjcat == null) {
            throw new LogicException("That Category does not exists in the system");
        }
        
        var objart = await this.getArticle(dtart.barcode);
        if (objart != null) {
            throw new LogicException("That Article already exists in the system");
        }
        if (dtart == null)
        {
            throw new LogicException("The Article is empty ");
        }
       
       
        if (dtart.description.trim() === "")
        {
            throw new LogicException("The description cannot be empty");
        }
        if (dtart.img.trim() === "")
        {
            throw new LogicException("The img cannot be empty");
        }
        if (!(dtart.img.trim().match(/\.(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF)$/)))
        {
            throw new LogicException("Only images files are allowed");
        }
        if (dtart.name.trim() === "")
        {
            throw new LogicException("The name cannot be empty");
        }
        if (dtart.price<1)
        {
            throw new LogicException("The price must be greater than 0");
        }
        if (dtart.stock<1)
        {
            throw new LogicException("The stock must be greater than 0");
        }
       
        

    }
    private  async validateUpdateArticle(dtart:Article)
    {
        this.validateBarCode(dtart.barcode);
        if (dtart.category==null)
        {
            throw new LogicException("The Category is null");
        }
        var searobjcat=await LCategory.getInstance().getCategory(dtart.category.name);
        if (searobjcat == null) {
            throw new LogicException("That Category does not exists in the system");
        }
        var objart = await this.getArticle(dtart.barcode);
        if (objart == null) {
            throw new LogicException("That Article does not exists in the system");
        }
        if (dtart == null)
        {
            throw new LogicException("The Article is empty ");
        }
     
        if (dtart.description.trim() === "")
        {
            throw new LogicException("The description cannot be empty");
        }
        if (dtart.img.trim() === "")
        {
            throw new LogicException("The img cannot be empty");
        }
        if (!(dtart.img.trim().match(/\.(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF)$/)))
        {
            throw new LogicException("Only images files are allowed");
        }
        if (dtart.name.trim() === "")
        {
            throw new LogicException("The name cannot be empty");
        }
        if (dtart.price<1)
        {
            throw new LogicException("The price must be greater than 0");
        }
        if (dtart.stock<1)
        {
            throw new LogicException("The stock must be greater than 0");
        }
       
        

    }
    private  async validateDeleteArticle(dtart:Article)
    {
        this.validateBarCode(dtart.barcode);
        let sobjart = await this.getArticle(dtart.barcode);
        if (dtart == null)
        {
            throw new LogicException("The Article is empty ");
        }
        if (sobjart == null) {
            throw new LogicException("That Article does not exists in the system");
        }
    }
    private  validatequantity(quantity:number)
    {
        if (quantity<1)
        {
            throw new LogicException("The quantity must be greater than 0");
        }
       
    }
   
    
    //*********************************************** */
    //Functions
    public async getArticle(barcode: string) {
        this.validateBarCode(barcode);
        var sarticle = await FactoryData.getDArticle().getArticle(barcode);
        return sarticle
    }
    public async addArticle(dtart: Article) {
        await this.validateAddArticle(dtart);
        FactoryData.getDArticle().addArticle(dtart);
    }
    public async updateArticle(dtart: Article) {
        await this.validateUpdateArticle(dtart);
        FactoryData.getDArticle().updateArticle(dtart);
    }
    public async deleteArticle(dtart: Article) {
        await this.validateDeleteArticle(dtart);
        FactoryData.getDArticle().deleteArticle(dtart);
    }
    public async registerStock(barcode: string,quantity:number) {
        this.validatequantity(quantity);
        var searcharticle= await this.getArticle(barcode);
        if(searcharticle==null)
        {
            throw new LogicException("That Article does not exists in the system");
        }
        searcharticle.stock += quantity;
        FactoryData.getDArticle().updateStock(searcharticle);
    }
    public async deStock(barcode: string,quantity:number) {
        this.validatequantity(quantity);
        var searcharticle= await this.getArticle(barcode);
        if(searcharticle==null)
        {
            throw new LogicException("That Article does not exists in the system");
        }
        searcharticle.stock -= quantity;
        FactoryData.getDArticle().updateStock(searcharticle);
    }
    public async getArticlesByNameLetter(expression: string)  {
        if(expression===undefined)
           {return this.getArticles();}
       var listexp = await FactoryData.getDArticle().getArticlesByNameLetter(expression);
       return listexp;
    }
    public async getArticles()  {
        var list = await FactoryData.getDArticle().getArticles();
         return list;
      }
      public async orderArticlesbyPrice()  {
        var list = await FactoryData.getDArticle().orderArticlesbyPrice();
         return list;
      }
      public async  orderArticlesbyCategory()  {
        var list = await FactoryData.getDArticle().orderArticlesbyCategory();
         return list;
      }
      public async  filterArticlesbyCategory(namecategory:string)  {
          var searchcat=await LCategory.getInstance().getCategory(namecategory);
          if(searchcat==null)
          {
              throw new LogicException("That Category does not exists in the system")
          }
          var list = await FactoryData.getDArticle().filterArticlesbyCategory(namecategory);
         return list;
      }
     

    }