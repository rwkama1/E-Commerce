export interface ILOrder {
      startOrder();
      registerItemonOrder(barcode:string, quantity:number);
      removeItemonOrder(barcode:string);
      closeOrder();  
}