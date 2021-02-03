import { Order } from "../../shared/entity/Order";

export interface IDOrder {
    addOrder(dtorder:Order );
    getOrder(id:number);
    listpendingOrders();
    updatestateOrder(dtorder:Order);
    getOrders();
}