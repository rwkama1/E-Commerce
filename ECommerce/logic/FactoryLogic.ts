import { LCategory } from "./class/LCategory";
import { ILCategory } from "./interfaces/ILCategory";

export class FactoryLogic {
    public static getLCategory(): ILCategory {
        return (LCategory.getInstance());
    }
   
}