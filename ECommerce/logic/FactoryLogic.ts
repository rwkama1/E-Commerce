import { LArticle } from "./class/LArticle";
import { LCategory } from "./class/LCategory";
import { LOrder } from "./class/LOrder";
import { LUser } from "./class/LUser";
import { ILArticle } from "./interfaces/ILArticle";
import { ILCategory } from "./interfaces/ILCategory";
import { ILOrder } from "./interfaces/ILOrder";
import { ILUser } from "./interfaces/ILUser";

export class FactoryLogic {
    public static getLCategory(): ILCategory {
        return (LCategory.getInstance());
    }
    public static getLArticle(): ILArticle {
        return (LArticle.getInstance());
    }
    public static getLUser(): ILUser {
        return (LUser.getInstance());
    }
    public static getLOrder(): ILOrder {
        return (LOrder.getInstance());
    }
    
   
}