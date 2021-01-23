import { LCategory } from "./class/LCategory";
import { ILCategory } from "./interfaces/ILCategory";

export class FactoryLogic {
    public static getLCategory(): ILCategory {
        return (LCategory.getInstance());
    }
    // public static getDProgram(): IDProgram {
    //     return (DProgram.getInstance());
    // }
    // public static getDExternalCampaign(): IDExternalCampaign {
    //     return (DExternalCampaign.getInstance());
    // }
    // public static getDOwnCampaign(): IDOwnCampaign {
    //     return (DOwnCampaign.getInstance());
    // }
}