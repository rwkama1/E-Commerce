import { Article } from "../../shared/entity/Article";
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
        if (state!="Open") {
            throw new LogicException("The state must be 'Open'");
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
    public  startOrder() {
        var vorder=new Order("Open",0,null,[]);
        this.order=vorder;
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
    public  closeOrder() {
        var dataOrder :Order;
        dataOrder = this.order;
        
        if (this.order != null) {
            var clstate = this.order.state;
            this.validateState(clstate);
            dataOrder.close();
        }
        else
        {
            throw new LogicException("The Order is null")
        }
        return dataOrder;
    }
 
}