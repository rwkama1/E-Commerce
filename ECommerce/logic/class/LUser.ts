import { User } from "../../shared/entity/User";
import { LogicException } from "../../shared/exceptions/logicexception";
import { ILUser } from "../interfaces/ILUser";

export class LUser implements ILUser {

    private static instancia: LUser;
    private constructor() { }
    public static getInstance(): LUser {
        if (!LUser.instancia) {
            LUser.instancia = new LUser();
        }

        return LUser.instancia;
    }
     //Validations************************************
     private validateIdCard(idcard: string)
     {
         if (idcard.trim() === "") {
             throw new LogicException("The identity card cannot be empty");
         }
     }
    //  private  async validateAddUser(dtuser:User)
    //  {
    //      this.validateIdCard(dtuser.identitycard);
    //      let objsearchcat = await this.getCategory(dtcat.name);
    //      if (dtuser == null)
    //      {
    //          throw new LogicException("The User is empty ");
    //      }
    //      if (objsearchcat != null) {
    //          throw new LogicException("That Category already exists in the system");
    //      }
    //      if (dtcat.description.trim() === "")
    //      {
    //          throw new LogicException("The description cannot be empty");
    //      }
      
       
    //  }

}