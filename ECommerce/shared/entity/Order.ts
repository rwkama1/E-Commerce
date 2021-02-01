import { Article } from "./Article";
import { Client } from "./Client";
import { OrderDetail } from "./OrderDetail";

export class Order
{

    private _state: string = "";
    private _total: number = 0;
    private _client: Client = null;
    private _listOrderDetails: OrderDetail[] = [];

    public get state(): string {
        return this._state;
    }
    public set state(value: string) {
        this._state = value;
    }
   
    public get total(): number {
        return this._total;
    }
    public set total(value: number) {
        this._total = value;
    }
    
    public get client(): Client {
        return this._client;
    }
    public set client(value: Client) {
        this._client = value;
    }
   
    public get listOrderDetails(): OrderDetail[] {
        return this._listOrderDetails;
    }
    public set listOrderDetails(value: OrderDetail[]) {
        this._listOrderDetails = value;
    }

    constructor(pstate:string,ptotal:number
        ,pclient:Client,plistordersdetails:OrderDetail[])
    {
        this.state=pstate;
        this.total=ptotal;
        this.client=pclient;
        this.listOrderDetails=plistordersdetails;
    }
    
    public quantityofarticles(): number {
        return this.listOrderDetails.length;
    }
    public  registerOrderDetail(article:Article, quantity:number) {
        var detail = new OrderDetail(quantity,article);
        var odetails=this.listOrderDetails;
        odetails.push(detail);
        return detail;
       
    }
    public  close() {
       
        var details=this.listOrderDetails;
        var vtotal=0;
        for (var d of details) {
            vtotal += d.getAmount
        }
       this.total=vtotal;    
    }
     
    public  haveOrderDetails() {
        var varhdetails=this.listOrderDetails;
        var haveod = varhdetails.length > 0;
        return haveod;
    }
}