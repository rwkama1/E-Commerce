import { Administrator } from "../../shared/entity/Administrator";
import { DataException } from "../../shared/exceptions/dataexception";
import { Conexion } from "../Conection";
import { IDAdministrator } from "../interfaces/IDAdministrator";

export class DAdministrator implements IDAdministrator {

    private static instancia: DAdministrator;
    private constructor() { }
    public static getInstance(): DAdministrator {
        if (!DAdministrator.instancia) {
            DAdministrator.instancia = new DAdministrator();
        }

        return DAdministrator.instancia;
    }
    public async addAdmin(dtadmin: Administrator) {
        try {

           let cn = await Conexion.uri().connect();
            const collection = cn.db("ECommerce").collection("Admin");
            const result = await collection.insertOne(dtadmin);
            cn.close();

        }
        catch (e) {
            throw new DataException("Admin could not be added" + e.message);
        }
    }
    public async getAdminbyusername(username:string) {

        let admobj= null;
        try {
            let cn = await Conexion.uri().connect();
            const collection = cn.db("ECommerce").collection("Admin");
            const Admin = await collection.findOne({_username:username});

            if (Admin == null) 
            { return null; }
           
            admobj = new Administrator(Admin._identitycard,
                Admin._completename,Admin._password,
                Admin._username,Admin._position);
    
           
            return admobj;
            cn.close();

        }
        catch (e) {
            throw new DataException("Client could not be searched");
        }

    }  
     public async getAdmin(idcard:string) {

        let admobj= null;
        try {
            let cn = await Conexion.uri().connect();
            const collection = cn.db("ECommerce").collection("Admin");
            const Admin = await collection.findOne({_identitycard:idcard});

            if (Admin == null) 
            { return null; }
            admobj = new Administrator(Admin._identitycard,
                Admin._completename,Admin._password,
                Admin._username,Admin._position,
    
               );
            return admobj;
            cn.close();

        }
        catch (e) {
            throw new DataException("Admin could not be searched");
        }

    }
    public async loginAdmin(username:string,password:string) {

        let admobj= null;
        try {
            let cn = await Conexion.uri().connect();
            const collection = cn.db("ECommerce").collection("Admin");
            const Admin = await collection.findOne({_username:username,_password:password});

            if (Admin == null) 
            { return null; }
           
            admobj = new Administrator(Admin._identitycard,
                Admin._completename,Admin._password,
                Admin._username,Admin._position);
    
           
            return admobj;
            cn.close();

        }
        catch (e) {
            throw new DataException("Client could not be searched");
        }

    }  
    public async updateAdmin(dtadmin: Administrator) {
        try {

            let cn = await Conexion.uri().connect();
            let query = { _identitycard:dtadmin.identitycard };
            var newvalues = { $set: { _completename: dtadmin.completename,
                _password: dtadmin.password,
                _position: dtadmin.position,
  
               } };
            const coladvert = cn.db("ECommerce").collection("Admin");
            const result = await coladvert.updateOne(query,newvalues);
            cn.close();

        }
        catch (e) {
            throw new DataException("Admin could not be updated" + e.message);
        }

    }
    public async deleteAdmin(dtadmin: Administrator) {
        try {

            let cn = await Conexion.uri().connect();
            let query = { _identitycard: dtadmin.identitycard };
            const colcat = cn.db("ECommerce").collection("Admin");
            const result = await colcat.deleteOne(query);
            cn.close();

        }
        catch (e) {
            throw new DataException("Admin could not be deleted" + e.message);
        }

    }
    public async getAdmins() {
      

        try {
            let cn = await Conexion.uri().connect();
            const collection = cn.db("ECommerce").collection("Admin");
            const result = await collection.find({}).toArray();

            let array = [];
            for (var Admin of result) {
              var  admobj = new Administrator(Admin._identitycard,
                    Admin._completename,Admin._password,
                    Admin._username,Admin._position);
                   array.push(admobj);
            }

            return array;
            cn.close();

        }
        catch (e) {
            throw new DataException("Admins could not be listed" + e.message);
        }

    }
   
}