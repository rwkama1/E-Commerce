import { Client } from "../../shared/entity/Client";

export interface IDClient {

    addClient(dtclient: Client);
    getClient(idcard:string);
}