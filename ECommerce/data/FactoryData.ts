import { DArticle } from "./class/DArticle";
import { DCategory } from "./class/DCategory";
import { IDArticle } from "./interfaces/IDArticle";
import { IDCategory } from "./interfaces/IDCategory";

export class FactoryData {
    public static getDCategory(): IDCategory {
        return (DCategory.getInstance());
    }
    public static getDArticle(): IDArticle {
        return (DArticle.getInstance());
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
