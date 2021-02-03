import { Client } from "../../shared/entity/Client";
import { Order } from "../../shared/entity/Order";

export interface ILOrder {
      startOrder();
      registerItemonOrder(barcode:string, quantity:number);
      removeItemonOrder(barcode:string);
      closeOrder();  
      saveOrder(client:Client);
      getPendingOrders();
      getOrder(id: number) ;
      deliverOrder(dtorder:Order);
}