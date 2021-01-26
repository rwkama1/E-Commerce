import { LArticle } from "./class/LArticle";
import { LCategory } from "./class/LCategory";
import { ILArticle } from "./interfaces/ILArticle";
import { ILCategory } from "./interfaces/ILCategory";

export class FactoryLogic {
    public static getLCategory(): ILCategory {
        return (LCategory.getInstance());
    }
    public static getLArticle(): ILArticle {
        return (LArticle.getInstance());
    }
   
}