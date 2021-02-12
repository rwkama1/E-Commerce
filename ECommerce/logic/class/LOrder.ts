import { FactoryData } from "../../data/FactoryData";
import { Article } from "../../shared/entity/Article";
import { Client } from "../../shared/entity/Client";
import { Order } from "../../shared/entity/Order";
import { OrderDetail } from "../../shared/entity/OrderDetail";
import { User } from "../../shared/entity/User";
import { LogicException } from "../../shared/exceptions/logicexception";
import { ILOrder } from "../interfaces/ILOrder";
import { LArticle } from "./LArticle";
import { LUser } from "./LUser";

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
    private validateClient(client: Client)
    {
        if (client==null) {
            throw new LogicException("That Client does not exists in the system");
        }

    }
    private validateStockQuantity(article:Article,quantity:number)
    {
        if (article.stock<quantity) {
            throw new LogicException("The quantity entered is greater than the stock of the item");
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
        this.validateStockQuantity(article,quantity);    
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
    public  cancelOrder() {
        var canceldataOrders =  this.order;
         
         if (canceldataOrders != null) {
             this.order=null; 
             return "The Order was canceled";
            }
     }
    public async saveOrder(client:Client) {
        this.validateClient(client);
        var dataOrders :Order;
        dataOrders =  this.order;
        dataOrders.client=client;
        if (this.order != null) {
          var haveorderdetails=dataOrders.haveOrderDetails();
          if(haveorderdetails)
          {
             await FactoryData.getDOrder().addOrder(dataOrders);
             this.order=null;
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
    public async deliverOrder(dtorder:Order) {
        this.validateState(dtorder.state);
       
        dtorder.state="Delivered";
        for(var ordetails of dtorder.listOrderDetails)
        {
           await LArticle.getInstance().deStock(ordetails._article._barcode,ordetails._quantity);
        }
        await FactoryData.getDOrder().updatestateOrder(dtorder);
        return "The Order was delivered"
       
     }  
     public async personalOrder(dtorder:Order) {
       
       
        if(dtorder.state=="Pending")
        {
            await FactoryData.getDOrder().deleteOrder(dtorder);
            return "The Order was deleted"
        }
        if(dtorder.state=="Delivered")
        {
            await FactoryData.getDOrder().addOrder(dtorder);
            return "The Order was duplicated"
        }
       
     } 
    
    //Get Orders
    public async getPendingOrders()  {
        var list = await FactoryData.getDOrder().listpendingOrders();
        return list;
      }
    public async getDeliveredOrders()  {
        var list = await FactoryData.getDOrder().listdeliveredOrders();
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
    public async getClientOrders(identitycard:string)  {
        var searchclient=await LUser.getInstance().getUser(identitycard);
        if(searchclient==null)
        {
            throw new LogicException("That Client does not exists in the system"); 
        }
       
        var list = await FactoryData.getDOrder().listClientOrders(identitycard);
        return list;
      }
    public async getAllOrders()  {
        var list = await FactoryData.getDOrder().getOrders();
        return list;
      }
      public async getOrdersbyDates(date1:Date,date2:Date)  {
        var list = await FactoryData.getDOrder().listOrdersbyDate(date1,date2);
        return list;
      }
} 
