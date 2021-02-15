import { User } from "../../shared/entity/User";

export interface ILUser {
    addUser(dtuser: User);
    getUser(idcard: string) ;
    loginUser(username:string,password:string);
    updateUser(dtuser: User);
    getClients();
    getAdmins();
    deleteUser(dtuser: User);
}
    