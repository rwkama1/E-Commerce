import { Client } from "./Client";

export class OrderDetail 
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

    // constructor(pstate:string,ptotal:number,pclient:Client,plistordersdetails)
    // {
    //     this.quantity=pquantity;
    //     this.article=particle;
    // }
}