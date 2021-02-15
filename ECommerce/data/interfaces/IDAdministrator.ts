import { Administrator } from "../../shared/entity/Administrator";

export interface IDAdministrator {

    addAdmin(dtadmin: Administrator);
    getAdmin(idcard:string);
    getAdminbyusername(username:string);
    loginAdmin(username:string,password:string);
    deleteAdmin(dtadmin: Administrator);
    updateAdmin(dtadmin: Administrator);
    getAdmins();
  
}