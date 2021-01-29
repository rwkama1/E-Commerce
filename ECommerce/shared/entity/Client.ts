import { User } from "./User";

export class Client extends User
{
    private _shippingaddress: string = "";
    private _creditcardnumber: string = "";

    public get shippingaddress(): string {
        return this._shippingaddress;
    }
    public set shippingaddress(value: string) {
        this._shippingaddress = value;
    }
    
    public get creditcardnumber(): string {
        return this._creditcardnumber;
    }
    public set creditcardnumber(value: string) {
        this._creditcardnumber = value;
    }
      
    constructor(pidentitycard:string,pcompletename:string,ppasword:string,pusername:string,pshippingaddress:string,pcreditcard:string)
    {
        super(pidentitycard,pcompletename,ppasword,pusername);
        this.shippingaddress=pshippingaddress;
        this.creditcardnumber=pcreditcard;
    }
}