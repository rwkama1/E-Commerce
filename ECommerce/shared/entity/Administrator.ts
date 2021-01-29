import { User } from "./User";

export class Administrator extends User
{
    private _position: string = "";
    public get position(): string {
        return this._position;
    }
    public set position(value: string) {
        this._position = value;
    }
   

    constructor(pidentitycard:string,pcompletename:string,ppasword:string,pusername:string,pposition:string)
    {
        super(pidentitycard,pcompletename,ppasword,pusername);
        this.position=pposition;
        
    }
}