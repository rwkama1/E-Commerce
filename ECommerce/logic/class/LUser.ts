import { FactoryData } from "../../data/FactoryData";
import { Client } from "../../shared/entity/Client";
import { User } from "../../shared/entity/User";
import { LogicException } from "../../shared/exceptions/logicexception";
import { ILUser } from "../interfaces/ILUser";
 const bcrypt = require('bcrypt');

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
     private validateLogin(username: string,password:string)
     {
         this.validateUserName(username);
         if (password.trim() === "") {
             throw new LogicException("The password cannot be empty");
         }
     }
     private  validateUserName(username: string)
     {
         if (username.trim() === "") {
             throw new LogicException("The username cannot be empty");
         }
        
     }
     private  async validateAddUser(dtuser:User)
     {
        if (dtuser == null)
        {
            throw new LogicException("The User is empty ");
        }
        if (dtuser.completename.trim() === "")
        {
            throw new LogicException("The complete name cannot be empty");
        }
        if (dtuser.password.trim() === "")
        {
            throw new LogicException("The password cannot be empty");
        }
         this.validateIdCard(dtuser.identitycard);
         this.validateUserName(dtuser.username);
         let idcardsearch = await this.getUser(dtuser.identitycard);
         if (idcardsearch != null) {
             throw new LogicException("That User already exists in the system");
         }
         let usernamesearch = await this.getUserByusername(dtuser.username);
         if (usernamesearch != null) {
            throw new LogicException("That User Name already exists in the system");
        }
    
     }
     //********************************************** */
     //USER
     public async getUser(idcard: string) {
        this.validateIdCard(idcard);
        var suser: User;
         suser = await FactoryData.getDClient().getClient(idcard);
        return suser
    }
    public async getUserByusername(username: string) {
        this.validateUserName(username);
        var suser: User;
         suser = await FactoryData.getDClient().getClientbyusername(username);
        return suser;
    }
    public async addUser(dtuser: User) {

        await this.validateAddUser(dtuser);
        var hashedpassword=await bcrypt.hash(dtuser.password,5);
        dtuser.password=hashedpassword;
        if (dtuser instanceof Client)
        {
            FactoryData.getDClient().addClient(dtuser);
        }
       
      
    }
    public async loginUser(username:string,password:string) {
       
            this.validateLogin(username,password);

            var suser: User;
            suser = await FactoryData.getDClient().getClientbyusername(username);
            if(suser)
            {
                var match=await bcrypt.compare(password,suser.password);
                if(match)
                {
                    return suser;
                }
                else
                {
                    throw new LogicException("Error authenticating user");
                }
            }
            else
            {
                throw new LogicException("That User does not exist in the system");

            }
           
      
       
      
    }

}