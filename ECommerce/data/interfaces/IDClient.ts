import { Client } from "../../shared/entity/Client";

export interface IDClient {

    addClient(dtclient: Client);
    getClient(idcard:string);
    loginClient(username:string,password:string);
    getClientbyusername(username:string);
    deleteClient(dtclient: Client);
    updateClient(dtclient: Client);
    getClients();
  
}