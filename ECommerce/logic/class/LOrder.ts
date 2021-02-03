import { FactoryData } from "../../data/FactoryData";
import { Article } from "../../shared/entity/Article";
import { Client } from "../../shared/entity/Client";
import { Order } from "../../shared/entity/Order";
import { OrderDetail } from "../../shared/entity/OrderDetail";
import { LogicException } from "../../shared/exceptions/logicexception";
import { ILOrder } from "../interfaces/ILOrder";
import { LArticle } from "./LArticle";

export class LOrder implements ILOrder {

    private static instancia: LOrder;
    private constructor() { }
    public static getInstance(): LOrder {
        if (!LOrder.instancia) {
            LOrder.instancia = new LOrder();
        }

        return LOrder.instancia;
    }
    private _order: Order;
    public get order(): Order {
        return this._order;
    }
    public set order(value: Order) {
        this._order = value;
    }
    //*********************************** */
    //VALIDATIONS
    private validateBarCode(barcode: string)
    {
        if (barcode.trim() === "") {
            throw new LogicException("The barcode cannot be empty");
        }
    }
    private validateregisterItemonOrder(barcode: string,quantity:number,dataorder:Order)
    {
        this.validateBarCode(barcode)
        if (quantity<1) {
            throw new LogicException("The quantity must be greater than 0");
        }
        if (dataorder==null) {
            throw new LogicException("The Order is null");
        }
    }
    private validateState(state: string)
    {
        if (state!="Pending") {
            throw new LogicException("The state must be 'Pending'");
        }
    }
    private validateArticle(article:Article)
    {
        if (article==null) {
            throw new LogicException("That Article does not exists in the system");
        }
    }
    //********************************* */
    //FUNCTIONS
    public async startOrder() {
        var vorder=new Order(0,null,"Pending",0,null,[]);

        this.order=await vorder;
        return "A new order was started";
    }
    public  async registerItemonOrder(barcode:string, quantity:number) {
       
        var dataOrderDetails :OrderDetail;
        var dataorder=this.order;
        this.validateregisterItemonOrder(barcode,quantity,dataorder);
        var estado = dataorder.state;
        this.validateState(estado);
        var article = await LArticle.getInstance().getArticle(barcode);
        this.validateArticle(article);       
        dataOrderDetails=dataorder.registerOrderDetail(article,quantity);     
        return dataOrderDetails;
        
    }
    public async removeItemonOrder(barcode:string) {
       
      
        var getdataorder=this.order;
        this.validateBarCode(barcode);
        var article = await LArticle.getInstance().getArticle(barcode);
        this.validateArticle(article);       
        getdataorder.removeOrderDetail(barcode);     
        return "The Order detail with barcode: "+ barcode+" was deleted";
        
    }
    public async closeOrder() {
        var dataOrder :Order;
        dataOrder = await this.order;
        
        if (this.order != null) {
            var clstate = this.order.state;
            this.validateState(clstate);
            
            dataOrder.close();
        }
        else
        {
            throw new LogicException("The Order is null");
        }
        return dataOrder;
    }
    public async saveOrder(client:Client) {
        var dataOrders :Order;
        dataOrders =  this.order;
        var now =new Date();
        dataOrders.date=new Date(now.getFullYear(),now.getMonth(),now.getDay());
        dataOrders.client=client;
        if (this.order != null) {
          var haveorderdetails=dataOrders.haveOrderDetails();
          if(haveorderdetails)
          {
             await FactoryData.getDOrder().addOrder(dataOrders);
             return "The order was saved in the database";
          }
          else
          {
              throw new LogicException("The order has no ordered items");
          }
        }
        else
        {
            throw new LogicException("The Order is null");
        }
      
    }
    public async getPendingOrders()  {
        var list = await FactoryData.getDOrder().listpendingOrders();
        return list;
      }
   public async getOrder(id: number) {
       
        var searchorder=await FactoryData.getDOrder().getOrder(id);
        if(searchorder==null)
        {
            throw new LogicException("That Order does not exists in the system");
        }
        return searchorder
    }
    public async deliverOrder(dtorder:Order) {
       this.validateState(dtorder.state);
      var searchorder= this.getOrder(dtorder.id);
       dtorder.state="Delivered";
       await FactoryData.getDOrder().updatestateOrder(dtorder);
       return "The Order was delivered"
      
    }  
} 
