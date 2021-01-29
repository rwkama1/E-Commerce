import { DArticle } from "./class/DArticle";
import { DCategory } from "./class/DCategory";
import { DClient } from "./class/DClient";
import { IDArticle } from "./interfaces/IDArticle";
import { IDCategory } from "./interfaces/IDCategory";
import { IDClient } from "./interfaces/IDClient";

export class FactoryData {
    public static getDCategory(): IDCategory {
        return (DCategory.getInstance());
    }
    public static getDArticle(): IDArticle {
        return (DArticle.getInstance());
    }
    public static getDClient(): IDClient {
        return (DClient.getInstance());
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
