export abstract class User
{
   private _identitycard: string = "";
   private _password: string = "";
   private _username: string = "";
   private _completename: string = "";

    public get identitycard(): string {
        return this._identitycard;
    }
    public set identitycard(value: string) {
        this._identitycard = value;
    }
 
    public get completename(): string {
        return this._completename;
    }
    public set completename(value: string) {
        this._completename = value;
    }
   
    public get username(): string {
        return this._username;
    }
    public set username(value: string) {
        this._username = value;
    }
 
    public get password(): string {
        return this._password;
    }
    public set password(value: string) {
        this._password = value;
    }

    
    constructor(pidentitycard:string,pcompletename:string,ppasword:string,pusername:string)
    {
        this.identitycard=pidentitycard;
        this.username=pusername;
        this.completename=pcompletename;
        this.password=ppasword;
    }

}