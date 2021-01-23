import { DCategory } from "./class/DCategory";
import { IDCategory } from "./interfaces/IDCategory";

export class FactoryData {
    public static getDCategory(): IDCategory {
        return (DCategory.getInstance());
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
