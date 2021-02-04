import { Client } from "../../shared/entity/Client";
import { Order } from "../../shared/entity/Order";

export interface ILOrder {
      startOrder();
      registerItemonOrder(barcode:string, quantity:number);
      removeItemonOrder(barcode:string);
      closeOrder();  
      cancelOrder();
      saveOrder(client:Client);
      deliverOrder(dtorder:Order);
      personalOrder(dtorder:Order);
//Get Orders
      getPendingOrders();
      getOrder(id: number) ;
      getDeliveredOrders();
      getClientOrders(identitycard:string);
      getAllOrders();
      getOrdersbyDates(date1:Date,date2:Date);
}