import { Order } from "../../shared/entity/Order";

export interface IDOrder {
    addOrder(dtorder:Order );
    getOrder(id:string);
    listpendingOrders();
    updatestateOrder(dtorder:Order);
}