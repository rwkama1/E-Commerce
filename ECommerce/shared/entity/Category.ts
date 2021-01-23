 export class Category
{
   private _name: string = "";
   private _description: string = "";

     public get name(): string {
         return this._name;
     }
     public set name(value: string) {
         this._name = value;
     }
   
     public get description(): string {
         return this._description;
     }
     public set description(value: string) {
         this._description = value;
     }
     
    constructor(pname:string,pdescription:string)
    {
        this.name=pname;
        this.description=pdescription;
    }

}

