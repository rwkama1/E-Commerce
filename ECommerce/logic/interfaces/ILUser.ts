import { User } from "../../shared/entity/User";

export interface ILUser {
    addUser(dtuser: User);
    getUserByusername(username: string);
    getUser(idcard: string) ;
    loginUser(username:string,password:string);
    // getArticle(barcode: string) ;
    // addArticle(dtart: User);
}
    