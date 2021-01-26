import { FactoryData } from "../../data/FactoryData";
import { Article } from "../../shared/entity/Article";
import { LogicException } from "../../shared/exceptions/logicexception";
import { ILArticle } from "../interfaces/ILArticle";

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
        let objart = await this.getArticle(dtart.barcode);
        if (dtart == null)
        {
            throw new LogicException("The Article is empty ");
        }
        if (objart != null) {
            throw new LogicException("That Article already exists in the system");
        }
        if (dtart.description.trim() === "")
        {
            throw new LogicException("The description cannot be empty");
        }
        if (dtart.img.trim() === "")
        {
            throw new LogicException("The img cannot be empty");
        }
        if (dtart.img.trim().match(/\.(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF)$/))
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
    // private  async validateUpdateCategory(dtcat:Category)
    // {
    //     this.validateName(dtcat.name);
    //     let objsearchcat = await this.getCategory(dtcat.name);
    //     if (dtcat == null)
    //     {
    //         throw new LogicException("The Category is empty ");
    //     }
    //     if (objsearchcat == null) {
    //         throw new LogicException("That Category does not exists in the system");
    //     }
    //     if (dtcat.description.trim() === "")
    //     {
    //         throw new LogicException("The description cannot be empty");
    //     }


    // }
    // private  async validateDeleteCategory(dtcat:Category)
    // {
    //     this.validateName(dtcat.name);
    //     let objsearchcat = await this.getCategory(dtcat.name);
    //     if (dtcat === null)
    //     {
    //         throw new LogicException("The Category is empty ");
    //     }
    //     if (objsearchcat === null) {
    //         throw new LogicException("That Category does not exists in the system");
    //     }
    // }
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
    // public async updateCategory(dtcategory: Category) {
    //     await this.validateUpdateCategory(dtcategory);
    //     FactoryData.getDCategory().updateCategory(dtcategory);
    // }
    // public async deleteCategory(dtcategory: Category) {
    //     await this.validateDeleteCategory(dtcategory);
    //     FactoryData.getDCategory().deleteCategory(dtcategory);
    // }
    // public async getCategorysByNameLetter(expression: string)  {
    //     if(expression===undefined)
    //        {return FactoryData.getDCategory().getCategories();}
    //   var listexp = await FactoryData.getDCategory().getCategorysByNameLetter(expression);
    //    return listexp;
    // }
    // public async getCategories()  {
    //     var list = await FactoryData.getDCategory().getCategories();
    //      return list;
    //   }

    }