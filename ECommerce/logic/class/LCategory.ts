import { FactoryData } from "../../data/FactoryData";
import { Category } from "../../shared/entity/Category";
import { LogicException } from "../../shared/exceptions/logicexception";
import { ILCategory } from "../interfaces/ILCategory";

export class LCategory implements ILCategory {

    private static instancia: LCategory;
    private constructor() { }
    public static getInstance(): LCategory {
        if (!LCategory.instancia) {
            LCategory.instancia = new LCategory();
        }

        return LCategory.instancia;
    }
    //Validations************************************
    private validateName(name: string)
    {
        if (name.trim() === "") {
            throw new LogicException("The name cannot be empty");
        }
    }
    private  async validateAddCategory(dtcat:Category)
    {
        this.validateName(dtcat.name);
        let objsearchcat = await this.getCategory(dtcat.name);
        if (dtcat == null)
        {
            throw new LogicException("The Category is empty ");
        }
        if (objsearchcat != null) {
            throw new LogicException("That Category already exists in the system");
        }
        if (dtcat.description.trim() === "")
        {
            throw new LogicException("The description cannot be empty");
        }
     
      
    }
    private  async validateUpdateCategory(dtcat:Category)
    {
        this.validateName(dtcat.name);
        let objsearchcat = await this.getCategory(dtcat.name);
        if (dtcat == null)
        {
            throw new LogicException("The Category is empty ");
        }
        if (objsearchcat == null) {
            throw new LogicException("That Category does not exists in the system");
        }
        if (dtcat.description.trim() === "")
        {
            throw new LogicException("The description cannot be empty");
        }
     
      
    }
    private  async validateDeleteCategory(dtcat:Category)
    {
        this.validateName(dtcat.name);
        let objsearchcat = await this.getCategory(dtcat.name);
        if (dtcat === null)
        {
            throw new LogicException("The Category is empty ");
        }
        if (objsearchcat === null) {
            throw new LogicException("That Category does not exists in the system");
        }
    }
    //*********************************************** */
    //Functions
    public async getCategory(name: string) {
        this.validateName(name);
        var searchcategory = await FactoryData.getDCategory().getCategory(name);

        return searchcategory
    }
    public async addCategory(dtcategory: Category) {
        await this.validateAddCategory(dtcategory);
        FactoryData.getDCategory().addCategory(dtcategory);
    }
    public async updateCategory(dtcategory: Category) {
        await this.validateUpdateCategory(dtcategory);
        FactoryData.getDCategory().updateCategory(dtcategory);
    }
    public async deleteCategory(dtcategory: Category) {
        await this.validateDeleteCategory(dtcategory);
        FactoryData.getDCategory().deleteCategory(dtcategory);
    }
    public async getCategorysByNameLetter(expression: string)  {
        if(expression===undefined)
           {return this.getCategories();}
      var listexp = await FactoryData.getDCategory().getCategorysByNameLetter(expression);
       return listexp;
    }
    public async getCategories()  {
        var list = await FactoryData.getDCategory().getCategories();
         return list;
      }
    
    }


