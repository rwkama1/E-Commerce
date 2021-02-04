import { Client } from "../../shared/entity/Client";
import { Order } from "../../shared/entity/Order";

export interface IDOrder {
    addOrder(dtorder:Order );
    deleteOrder(dtorder:Order);
    /****************** */
    getOrder(id:number);
    listpendingOrders();
    updatestateOrder(dtorder:Order);
    getOrders();
    listdeliveredOrders();
    listClientOrders(identitycard:string);
    listOrdersbyDate(date1:Date,date2:Date);
}