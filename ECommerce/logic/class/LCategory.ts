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


}
// var cat = new Category("Monitor",
// "Es aquel dispositivo usado por usuarios para que estos puedan comunicarse a través de diferentes partes del ordenador usando datos.En la actualidad existen muchos tipos de monitor de computadora y poseen funciones similares pero con una ejecución diferente");
// var cat = new Category("Conectividad",
//  "Es la capacidad de un dispositivo de conectarse y comunicarse con otro");

// LCategory.getInstance().updateCategory(cat).then(data => {
//    console.log(data)
// });