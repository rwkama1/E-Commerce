import { FactoryData } from "../../data/FactoryData";
import { Administrator } from "../../shared/entity/Administrator";
import { Client } from "../../shared/entity/Client";
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
        var numbers = /^[0-9]+$/;
         if (!idcard.trim().match(numbers)) {
                throw new LogicException("The identity card must have only numbers");
            }
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
         if (dtuser instanceof Client) 
         {
            let client = dtuser as Client;
            var numbers = /^[0-9]+$/;
            if (!client.creditcardnumber.trim().match(numbers)) {
                throw new LogicException("The credit card number must have only numbers");
            }
            if (client.creditcardnumber.trim() === "") {
                throw new LogicException("The credit card number cannot be empty");
            }
            if (client.shippingaddress.trim() === "") {
                throw new LogicException("The shipping address cannot be empty");
            }

         }
         if (dtuser instanceof Administrator) 
         {
            let admin = dtuser as Administrator;
            if (admin.position.trim() === "") {
                throw new LogicException("The position cannot be empty");
            }
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
     private  async validateUpdateUser(dtuser:User)
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
         if (dtuser instanceof Client) 
         {
            let client = dtuser as Client;
            var numbers = /^[0-9]+$/;
            if (!client.creditcardnumber.trim().match(numbers)) {
                throw new LogicException("The credit card number must have only numbers");
            }
            if (client.creditcardnumber.trim() === "") {
                throw new LogicException("The credit card number cannot be empty");
            }
            if (client.shippingaddress.trim() === "") {
                throw new LogicException("The shipping address cannot be empty");
            }

         }
         if (dtuser instanceof Administrator) 
         {
            let admin = dtuser as Administrator;
            if (admin.position.trim() === "") {
                throw new LogicException("The position cannot be empty");
            }
         }
         this.validateIdCard(dtuser.identitycard);
      
         let idcardsearch = await this.getUser(dtuser.identitycard);
         if (idcardsearch == null) {
             throw new LogicException("That User does not exists in the system");
         }
        
    
     }
     private  async validateDeleteUser(dtuser:User)
     {
        if (dtuser == null)
        {
            throw new LogicException("The User is empty ");
        }
        this.validateIdCard(dtuser.identitycard);
        let sobjcli = await this.getUser(dtuser.identitycard);
        if (sobjcli == null) {
            throw new LogicException("That User does not exists in the system");
        }
    
     }
     //********************************************** */
     //USER
     public async getUser(idcard: string) {
        this.validateIdCard(idcard);
        var suser: User;
         suser = await FactoryData.getDClient().getClient(idcard);
         if (suser == null)
         {
             suser = await FactoryData.getDAdmin().getAdmin(idcard);
         }
         
        return suser
    }
    public async getUserByusername(username: string) {
        this.validateUserName(username);
        var suser: User;
         suser = await FactoryData.getDClient().getClientbyusername(username);
         if (suser == null)
         {
             suser = await FactoryData.getDAdmin().getAdminbyusername(username);
         }
        return suser;
    }
    public async addUser(dtuser: User) {

        await this.validateAddUser(dtuser);
        if (dtuser instanceof Client)
        {
            FactoryData.getDClient().addClient(dtuser);
        }
        if (dtuser instanceof Administrator)
        {
            FactoryData.getDAdmin().addAdmin(dtuser);
        }
       
      
    }
    public async updateUser(dtuser: User) {

        await this.validateUpdateUser(dtuser);
        if (dtuser instanceof Client)
        {
            FactoryData.getDClient().updateClient(dtuser);
        }
        if (dtuser instanceof Administrator)
        {
            FactoryData.getDAdmin().updateAdmin(dtuser);
        }
       
      
    }
    public async deleteUser(dtuser: User) {

        await this.validateDeleteUser(dtuser);

        if (dtuser instanceof Client)
        {
            FactoryData.getDClient().deleteClient(dtuser);
        }
        if (dtuser instanceof Administrator)
        {
            FactoryData.getDAdmin().deleteAdmin(dtuser);
        }
       
      
    }
    public async loginUser(username:string,password:string) {
       
            this.validateLogin(username,password);

            var suser: User;
            suser = await FactoryData.getDClient().loginClient(username,password);
            if(suser==null)
            {
                suser = await FactoryData.getDAdmin().loginAdmin(username,password);
            }
            if(suser==null)
            {
                throw new LogicException("Wrong username or password");

            }
            return suser;
    }
    public async getClients()  {
        var list = await FactoryData.getDClient().getClients();
         return list;
      }
    public async getAdmins()  {
        var list = await FactoryData.getDAdmin().getAdmins();
         return list;
      }
}